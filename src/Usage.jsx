import React, { useState } from "react";
import "./Usage.css";

const Usage = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="usage" style={{ backgroundColor: color }}>
      <div className="usage-item">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
      <button onClick={() => setColor("red")}>Red</button>
    </div>
  );
};

export default Usage;
