import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5);

  function incrementValue() {
    setCount(count+1);
  }

  function decrementValue() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={incrementValue}>Increase</button>
      <br />
      <br />
      <button onClick={decrementValue}>Decrease</button>

      <footer>{count}</footer>

      <p>{count}</p>
    </>
  )
}

export default App
