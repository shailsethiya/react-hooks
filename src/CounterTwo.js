import React, { useState } from 'react';
import useCounter from './useCounter';

function CounterTwo() {
    const [count, increment, decrement, reset]  = useCounter(10, 20);
    return (
        <div>
            <h1>count = {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

} 

export default CounterTwo;