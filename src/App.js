import { useState, useEffect } from 'react';
import './App.css';

const App = () =>  {
  const[x, setX] = useState(0);
  const[y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  }
 
  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      console.log("window");
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, [])

  return (
    <div className="App">
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default App;
