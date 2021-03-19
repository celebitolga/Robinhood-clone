import React from 'react';

function Stock({ fill }) {
  return (
    <div className="Stock">
      <svg
        stroke={fill}
        fill="transparent"
        version="1.1"
        id="Layer_2"
        x="0px"
        y="0px"
        viewBox="0 0 60 18.6"
      >
        <g>
          <path d="M-0.5,17.3h6 M4.5,17.3h36 M39.5,17.3h21" />
        </g>
        <g>
          <path
            d="M0,13.5h4.2L5,12.7 M5,12.7l0.8-0.5l0.8-1.8l0.8-2l0.8-2.6l0.8-0.6L10,4.6l0.8-3.3l0.8,0.8l0.8,0.6l0.8-0.3
          l0.8,2.3L15,6.6l0.8-0.4l0.8-1.8l0.8,1l0.8,0.3L19.2,6L20,4.8l0.8-0.4l0.8,0.7l0.8-0.2l0.8,2.2h0.8L25,7.2l0.8-2.3l0.8-0.1l0.8,2
          l0.8-0.4l0.8,0.9L30,5.4L30.8,6l0.8-0.3L32.5,7l0.8,0.4l0.8-0.8L35,6.3l0.8,0.8l0.8,1.4l0.8,0.3l0.8,1.4l0.8-0.3l0.8,0 M40,9.9h20"
          />
        </g>
      </svg>
    </div>
  );
}

export default Stock;
