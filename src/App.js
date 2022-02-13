import React, { useState, useEffect, useRef } from 'react';

const App = () =>  {
  const [timer, setTimer] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = setInterval(() => {
     setTimer(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(inputRef.current)
    };
  }, [])

  return (
    <div className="App">
      Timer - {timer}
      <button onClick={() => clearInterval(inputRef.current)}>Stop Timer</button>
    </div>
  );
}

export default App;
