import React, { useState, useMemo } from 'react';

const App = () =>  {
const [counterOne, setCounterOne] = useState(0);
const [counterTwo, setCounterTwo] = useState(0);


const incrementOne = () => {
  setCounterOne(counterOne + 1);
}

const incrementTwo = () => {
  setCounterTwo(counterTwo + 1);
}

const isEven =  useMemo(() => {
  let i = 0;
  while(i < 20000000) i++
  return counterOne % 2 === 0
}, [counterOne]);

  return (
    <div className="App">
     <button onClick={incrementOne}>First Count - {counterOne}</button>
     <span>{isEven ? 'Even' : 'Odd' }</span>
     <button onClick={incrementTwo}>Second Count - {counterTwo} </button>
    </div>
  );
}

export default App;
