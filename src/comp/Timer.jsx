import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div style={{backgroundColor:'white',width:'fit-content',paddingLeft:3,paddingRight:3}}><h2 style={{color:'red'}}>Timer: {seconds} seconds</h2></div>;
};

export default Timer;
