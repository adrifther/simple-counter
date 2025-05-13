import React from "react";

import { useState, useEffect } from "react";

//create your first component
const Seconds = ({ initialValue }) => {
  const [seconds, setSeconds] = useState(
    initialValue == !undefined ? initialValue : 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((counter) => counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">SECONDS COUNTER HERE BELOW:</h1>
      <p style={{ backgroundColor: "black", color: "white" }}>{seconds}</p>
      <p>THIS IS THE SECONDS COMPONENT</p>
    </div>
  );
};

export default Seconds;
