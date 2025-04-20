import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('bg-white'); // default background

  function changeColor(currColor) {
    setColor(currColor);
  }

  return (
    // <>
    //   <h1 className='font-bold text-2xl text-center p-4'>Background Changer Project</h1>
      
    //   <div className={`h-64 flex justify-center items-center ${color}`}>
    //     <p className="text-xl font-semibold">Current Background: {color}</p>
    //   </div>

    //   <div className='flex flex-wrap gap-2 p-4 justify-center'>
    //     <button onClick={() => changeColor('bg-black')} className='bg-black text-white px-4 py-2 rounded'>Black</button>
    //     <button onClick={() => changeColor('bg-blue-500')} className='bg-blue-500 text-white px-4 py-2 rounded'>Blue</button>
    //     <button onClick={() => changeColor('bg-blue-100')} className='bg-blue-100 text-black px-4 py-2 rounded'>Sky Blue</button>
    //     <button onClick={() => changeColor('bg-red-500')} className='bg-red-500 text-white px-4 py-2 rounded'>Red</button>
    //     <button onClick={() => changeColor('bg-green-400')} className='bg-green-400 text-white px-4 py-2 rounded'>Green</button>
    //   </div>
    // </>

    //Solved with the help of ChatGpt
    
    <div className={`${color}`}>
      
      <h1>Background Changer Project</h1>
       <div className='flex flex-wrap gap-2 p-4 justify-center'>
     <button onClick={() => changeColor('bg-black')} className='bg-black text-white px-4 py-2 rounded'>Black</button>
     <button onClick={() => changeColor('bg-blue-500')} className='bg-blue-500 text-white px-4 py-2 rounded'>Blue</button>
    <button onClick={() => changeColor('bg-blue-100')} className='bg-blue-100 text-black px-4 py-2 rounded'>Sky Blue</button>
    <button onClick={() => changeColor('bg-red-500')} className='bg-red-500 text-white px-4 py-2 rounded'>Red</button>
    <button onClick={() => changeColor('bg-green-400')} className='bg-green-400 text-white px-4 py-2 rounded'>Green</button>
    </div>

    </div>
  )
}

export default App
