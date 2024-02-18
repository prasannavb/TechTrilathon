import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import "../styles/stats.css";

export default function Stats({reference,visible}) {
  

  return (
    <div className="stats" ref={reference}>
      <span className="stats-bg">
        <h2>
          A place for learning, discovery, innovation, expression and discourse
        </h2>
        <div className="group">
          <h3>No. of Years</h3>
          <h1>
            {visible && <CountUp duration={5} className="counter" end={37} />}
          </h1>
        </div>

        <div className="group">
          <h3>Programs</h3>
          <h1>
            {visible && <CountUp duration={5} className="counter" end={19} />}
          </h1>
        </div>

        <div className="group">
          <h3>Students</h3>
          <h1>
            {visible && <CountUp duration={5} className="counter" end={3911} />}
          </h1>
        </div>
        <div className="group">
          <h3>Placements</h3>
          <h1>
            {visible && <CountUp duration={5} className="counter" end={98.82} />}%
          </h1>
        </div>
      </span>
    </div>
  );
}
