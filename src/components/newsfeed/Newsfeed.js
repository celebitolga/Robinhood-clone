import React, { useState, useEffect } from "react";
import './Newsfeed.scss';

import LineGraph from './LineGraph';
import TimeLine from './TimeLine';
import { Avatar, Chip } from '@material-ui/core';

function Newsfeed() {

  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

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
            <TimeLine />
          </div>
        </div>
        <div className="Newsfeed-buying">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        <div className="Newsfeed-market">
          <div className="Newsfeed-market-box">
            <p>Markets Closed</p>
            <h1>Happy thanksgiving</h1>
          </div>
        </div>
        <div className="Newsfeed-popularList">
          <div className="Newsfeed-popularList-intro">
            <h1>Popular Lists</h1>
            <p>Show More</p>
          </div>
          <div className="Newsfeed-popularList-badges">
            {popularTopics.map((topic, index) => (
              <Chip
                key={index}
                className="topicBadge"
                label={topic}
                clickable
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
