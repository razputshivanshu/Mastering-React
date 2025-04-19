import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5);
  const [error, setError] = useState(null);

  function incrementValue() {
    if (count < 20) {
      setCount(count + 1);
      setError(null);
    }
    else
      setError("Value can't be greater than 20!!!")
  }

  function decrementValue() {
    if (count >= 1) {
      setCount(count - 1);
      setError(null);
    }
    else
      setError("Value can't be negative!!");
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={incrementValue}>Increase</button>
      <br />
      <br />
      <button onClick={decrementValue}>Decrease</button>

      {
        error && (<div>{error}</div>)
     }
    </>
  )
}

export default App
