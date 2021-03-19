import React, { useState, useEffect } from 'react';
import './Stats.scss';

import axios from "axios";
import StatsRow from "./StatsRow";

import { db } from './../../firebase';

const TOKEN = "c19t14f48v6tl8v9pkog";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getStockDataFromAPI = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .then(res => ({name: stock, data:res.data}))
      .catch((error) => console.log(error));
  }
  
  const getStockData = () => {
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
    let promises = [];

    stocksList.forEach((stock) => {
      promises.push(getStockDataFromAPI(stock));
    });

    Promise.all(promises).then((res) => {
      setStockData(res);
    });
  };

  const getMyStocksFromDB = () => {
    let promises = [];
    db.collection("myStocks").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        promises.push(
          getStockDataFromAPI(doc.data().ticker).then((res) => ({
            id: doc.id,
            data: doc.data(),
            info: res.data,
          }))
        );
        
        Promise.all(promises).then((res) => {
          setMyStocks(res);
        });
      });
    });
  }

  useEffect(() => {
    getMyStocksFromDB();
    getStockData();
  }, []);

  return (
    <div className="Stats">
      <div className="Stats-container">
        <div className="Stats-header">
          <p>My Stocks</p>
        </div>

        <div className="Stats-content">
          <div className="Stats-content-rows">
            {myStocks.map(({ id, data: { shares, ticker }, info: { o, c} }) => (
              <StatsRow
                key={id}
                name={ticker}
                shares={shares}
                openPrice={o}
                price={c}
              />
            ))}
          </div>
        </div>

        <div className="Stats-lists">
          <p>Lists</p>
        </div>

        <div className="Stats-content">
          <div className="Stats-content-rows">
            {stockData.map(({ name, data: { o, c } }, index) => (
              <StatsRow
                key={"statsRow-" + index}
                name={name}
                openPrice={o}
                price={c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
