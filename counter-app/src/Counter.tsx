import React from 'react';
import useStore from './store';
import './App.css';


const Counter = () => {
    const { count, increment, decrement, reset } = useStore();

    return (
        <>
        <h1>Counter Application </h1>
        <div className="buttons">
            <button className="increment" onClick={increment}>Increment</button>
            <button className="decrement" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>

        <div className="displayCount">
            <h2>Count: {count}</h2>
        </div>
        </>
    )
}

export default Counter;