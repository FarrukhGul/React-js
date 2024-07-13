import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState("")

//useRef Hook
const passwordRef = useRef(null);





  const passwordGen = useCallback(() => {
   let pass = " ";
   let str = 
   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

   if(numberAllowed) str += "0123456789"
   if(characterAllowed) str += "!@#$%^&*_+-<>?~"

   for (let i = 1; i <= length; i++) {
   let char = Math.floor(Math.random() * str.length + 1)
   
   pass += str.charAt(char);
   }

   setPassword(pass);

  },  [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(Password)
  },
[Password])

  useEffect(()=>{
    passwordGen();
  }, [length, numberAllowed, characterAllowed, passwordGen]) 


  
  
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 py-4 my-8 text-orange-500 bg-gray-800'> 

     <h1 className='text-white text-2xl text-center my-3'>
      Password Generator</h1>

     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={Password}
      className='outline-none w-full px-3 py-1'
      placeholder='Password'
      readOnly
      ref={passwordRef} />

      <button 
      onClick={copyPasswordToClipboard}
      className='bg-green-500 text-white text-[1.1rem] px-3'>Copy</button>
     </div>

     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={8}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label className='text-[1.2rem]'>Length: {length}</label>
      </div>

        <div className='flex items-center gap-x-1'>
         <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {setNumberAllowed((prev)=>
          !prev);
          }} 
      />
      <label className='text-[1rem]' htmlFor="numberInput">Numbers</label>
        </div>
        
      
        <div className='flex items-center gap-x-1'>
         <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {setCharacterAllowed((prev)=>
          !prev);
          }} 
      />
      <label className='text-[1rem]' htmlFor="numberInput">Characters</label>
        </div>


     </div>

     </div>
    </>
  )
}

export default App
