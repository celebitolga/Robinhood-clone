import React, { useEffect } from 'react';
import './Stats.scss';

import StatsRow from "./StatsRow";

import { useSelector, useDispatch } from "react-redux";
import {
  selectStockData,
  selectMyStocks,
  getStockDataAsync,
  getMyStocksFromDBAsync,
} from "./../../features/stocks/stocksSlice";

function Stats() {

  const dispatch = useDispatch();

  const stockData = useSelector(selectStockData);
  const myStocks = useSelector(selectMyStocks);

  useEffect(() => {
    dispatch(getStockDataAsync());
    dispatch(getMyStocksFromDBAsync());
  }, [dispatch]);

  const errorRender = () => {
    return (
      <div className="loadingError">API limit reached</div>
    )
  }

  return (
    <div className="Stats">
      <div className="Stats-container">
        <div className="Stats-header">
          <p>My Stocks</p>
        </div>

        <div className="Stats-content">
          <div className="Stats-content-rows">
            {myStocks.error
              ? errorRender(myStocks.error)
              : myStocks.data.map(
                  ({ id, data: { shares, ticker }, info: { o, c } }) => (
                    <StatsRow
                      key={id}
                      name={ticker}
                      shares={shares}
                      openPrice={o}
                      price={c}
                    />
                  )
                )}
          </div>
        </div>

        <div className="Stats-lists">
          <p>Lists</p>
        </div>

        <div className="Stats-content">
          <div className="Stats-content-rows">
            {stockData.error
              ? errorRender()
              : stockData.data.map(({ name, data: { o, c } }, index) => (
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
