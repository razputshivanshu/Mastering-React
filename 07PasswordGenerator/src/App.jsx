import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numAllowed) {
      str += "0123456789";
    }

    if (specialChars) {
      str += `~\`!@#$%^&*()-_=+[{]}\\|;:'",<.>/?`;
    }


    //kitni baar loop chalana hai wo depend krega length pr

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      // pass += str.charAt(char);
      pass += str[char];

    }

    setPassword(pass);

  }, [length, numAllowed, specialChars, setPassword]);
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, specialChars, passwordGenerator]);


  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-4xl bg-white text-center'>Password Generator</h1>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700 '>
          <input type='text' 
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
          
          />
          <button>Copy</button>

        </div>
        <div>
          <div>
            <input type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)} }
            />
            <label>Length: {length}</label>
          </div>

          <div>
                        <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

           <div>
              <input 
              type="checkbox"
              defaultChecked={specialChars}
              id="specialChars"
              onChange={() => setSpecialChars(prev => !prev)}
            />
             <label htmlFor='specialChars'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
