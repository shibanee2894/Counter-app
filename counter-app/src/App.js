import React, {useState} from 'react';
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 10);
  const decrement = () => setCount(count - 5);
  const reset = () => setCount(0);

  return(
    <div className="CounterApp">
      <h1>COUNTER APPLICATION</h1>

      <div className="buttons">
        <button className="increment" onClick={increment}>Increment</button>
        <button className="decrement" onClick={decrement}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>

      <div className="display">
        <h1>{count}</h1>

      </div>

    </div>
  )
}

export default App;