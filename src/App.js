import React, { useReducer } from 'react';
import './App.css';

const intialState = 0;
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return intialState;
    default:
      return state;
  }
}

const App = () =>  {
  const[count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>Count - {count} </div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default App;
