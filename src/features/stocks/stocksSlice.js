import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { getStockDataFromAPI } from "./../../api/index";

export const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    stockData: {
      error: "",
      data: [],
    },
    myStocks: {
      error: "",
      data: [],
    },
  },
  reducers: {
    setStockData: (state, action) => {
      state.stockData = action.payload;
    },
    setMyStocksFromDB: (state, action) => {
      state.myStocks = action.payload;
    },
  },
});

export const { setStockData, setMyStocksFromDB } = stocksSlice.actions;

export const getStockDataAsync = () => async (dispatch) => {
  const stocksList = [
    "AAPL",
    "MSFT",
    "TSLA",
    "FB",
    "BABA",
    "UBER",
    "DIS",
    "SBUX",
  ];
  let error = "";
  let data = [];
  dispatch(setStockData({ error, data }));

  try {
    let promises = [];

    stocksList.forEach((stock) => {
      promises.push(getStockDataFromAPI(stock));
    });
    await Promise.all(promises).then((res) => {
      data = res;
    });
  } catch (err) {
    error = err.message || "Error loading.";
  } finally {
    dispatch(setStockData({ error, data }));
  }
};

export const getMyStocksFromDBAsync = () => async (dispatch) => {
  let error = "";
  let data = [];
  dispatch(setMyStocksFromDB({ error, data }));

    let promises = [];

    db.collection("myStocks").onSnapshot((snapshot) => {
      snapshot.docs.map(async (doc) => {
        promises.push(
          getStockDataFromAPI(doc.data().ticker)
            .then((res) => ({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            }))
        );
        try {
          await Promise.all(promises)
            .then((res) => {
              data = res;
            })
            .then(() => {
              promises = [];
            });
        } catch (err) {
          error = err.message || "Error loading.";
        } finally {
          dispatch(setMyStocksFromDB({ error, data }));
        }
      });
    })
};

export const addSharesToDBAsync = (name) => async (dispatch, getState) => {
  let index = getState().stocks.myStocks.data.findIndex(
    (stock) => stock.data.ticker === name
  );

  if (index > -1) {
    let id = getState().stocks.myStocks.data[index].id;
    let ticker = getState().stocks.myStocks.data[index].data.ticker;
    let newShares = getState().stocks.myStocks.data[index].data.shares + 1;
    db.collection("myStocks").doc(id).set({
      ticker,
      shares: newShares,
    });
  } else {
    db.collection("myStocks").add({
      ticker: name,
      shares: 1,
    });
  }
};

export const sellSharesToDBAsync = (name) => async (dispatch, getState) => {
  let sellShares = getState().stocks.myStocks.data.find(
    (stock) => stock.data.ticker === name
  );

  if (sellShares && sellShares.data.shares > 1) {
    let id = sellShares.id
    let ticker = sellShares.data.ticker
    let newShares = sellShares.data.shares - 1;
    db.collection("myStocks").doc(id).set({
      ticker,
      shares: newShares,
    });
  } else {
    let id = sellShares.id;
    db.collection("myStocks").doc(id).delete();
  }
};

export const selectStockData = (state) => state.stocks.stockData;
export const selectMyStocks = (state) => state.stocks.myStocks;

export default stocksSlice.reducer;
