import React from 'react';
import Stock from '../svg/Stock';
import "./StatsRow.scss";

function StatsRow({ name, openPrice, price, shares }) {

  const getSvgColor = () => {
    let percentage = (price / openPrice) * 100 - 100;
    if (percentage > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  const getPercentage = () => {
    let percentage = ((price / openPrice) * 100) - 100;
    return percentage.toFixed(2);
  }

  const renderPercentage = () => {
    let percentage = getPercentage();

    if (percentage > 0) {
      return (
        <p className="StatsRow-numbers-percentage">
          <span className="StatsRow-numbers-percentage-green">
            + {percentage} %
          </span>
        </p>
      );
    } else {
      return (
        <p className="StatsRow-numbers-percentage">
          <span className="StatsRow-numbers-percentage-red">
            - {Math.abs(percentage)} %
          </span>
        </p>
      );
    }
  }

  return (
    <div className="StatsRow">
      <div className="StatsRow-intro">
        <h1>{name && name}</h1>
        <p>{shares && shares}</p>
      </div>
      <div className="StatsRow-chart">
        <Stock fill={getSvgColor()} />
      </div>
      <div className="StatsRow-numbers">
        <p className="StatsRow-numbers-price">${price}</p>
        {/* <p className="StatsRow-numbers-price">${openPrice}</p> */}
        {renderPercentage()}
      </div>
    </div>
  );
}

export default StatsRow;
