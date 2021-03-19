import React from 'react';
import './Newsfeed.scss';

import LineGraph from './LineGraph';

function Newsfeed() {
  return (
    <div className="Newsfeed">
      <div className="Newsfeed-container">
        <div className="Newsfeed-chartSection">
          <div className="Newsfeed-chartSection-portfolio">
            <h1>$114,656</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>
          <div className="Newsfeed-chartSection-chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
