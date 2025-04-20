import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function incrementValue() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    
    // console.log(count);

    //Above code will only increment value 1 because it is changing the same counter +1 and fibre take all these in a batch manner.

    setCount((prevCounter) => prevCounter + 1);
  setCount((prevCounter) => prevCounter + 1);
  setCount((prevCounter) => prevCounter + 1);
  setCount((prevCounter) => prevCounter + 1);
  console.log(count); // Will still show old value due to async nature of state


  }

  function decrementValue() {
    setCount(count - 1);
  }

  return (
    <>
      
      
      <h1>Counter App: {count} </h1>
      <button onClick={incrementValue}>Increment + </button>
      <button onClick={decrementValue}>Decrement - </button>
      
    </>
  )
}

export default App
