import { useState, useEffect } from 'react';
import './App.css';

const App = () =>  {
  const[count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
   let interval = setInterval(tick, 1000);
  return () => {
    clearInterval(interval);
  }
  }, [])

  return (
    <div className="App">
      {count}
    </div>
  );
}

export default App;
