import { useState } from 'react';
import './App.css';

const App = () =>  {
  const initialState = 0;
  const[count, setCount] = useState(initialState);

  const handleIncrement = () => {
    for(let i=0; i<5; i++){
      setCount( prevCount => prevCount + 1)
    }
  }
    
  return (
    <div className='App'>
    <button>{count}</button>
    <button onClick={() => (setCount(initialState))}>Reset</button>
    <button onClick={() => (setCount(prevCount => prevCount + 1))}>Increment</button>
    <button onClick={() => (setCount(prevCount => prevCount - 1))}>Decrement</button>
    <button onClick={handleIncrement}>Increment 5</button>
    </div>
  );
}

export default App;
