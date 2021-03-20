import React from 'react';
import "./TimeLine.scss";

function TimeLine() {
  return (
    <div className="TimeLine">
      <div className="TimeLine-buttons">
        <div className="TimeLine-buttons-button">LIVE</div>
        <div className="TimeLine-buttons-button timelineActive">1D</div>
        <div className="TimeLine-buttons-button">1W</div>
        <div className="TimeLine-buttons-button">3M</div>
        <div className="TimeLine-buttons-button">1Y</div>
        <div className="TimeLine-buttons-button">ALL</div>
      </div>
    </div>
  );
}

export default TimeLine;
