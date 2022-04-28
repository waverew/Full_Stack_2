import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date,setDate] = useState(new Date());

  useEffect(() =>{
    let timerID = setInterval(() => setDate(new Date()), 1000);
    return () => {
        clearInterval(timerID);
    }
  }
  );

  return (
      <div>
        <p>Hello, world!</p>
        <h1>Now is {date.toLocaleTimeString()}.</h1>
      </div>
    );
};

export default Clock;
