import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Be Right Back</h1>
      <h2 className="counter">Counter: {counter}</h2>
    </div>
  );
}

export default App;
