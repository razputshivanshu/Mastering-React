import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    userName: "hitesh",
    age:21,
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <h1 className='p-4 bg-amber-50 flex justify-center mb-10'>I will not control my urges and become best version of myself...</h1>
      <Card className='mb-10' channel='chaiaurcode' someObj={myObj} text="Card1" array={newArr} />
      <Card className='mb-10' channel='chaiaurcode' someObj = {myObj} text="Card2"/>
      <Card className='mb-10' channel='chaiaurcode' someObj = {myObj} text="card3"/>
    </>
  )
}

export default App
