import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [Counter, setCounter] = useState(0)
  
  let addValue = () =>{
    if(Counter < 20){
      Counter = Counter + 1;
      setCounter(Counter);
    }
    else{
      alert("Counter capacity is Fulled")
    }
   
  }

  let removeValue = () =>{
    if(Counter > 0){
      Counter = Counter - 1;
      setCounter(Counter);
    }
    else{
      alert("Counter value is Already 0 Cant be Negative")
    }
   
  }

  return (
    <>
    <h1>...Counter...</h1>
      <h2>Counter Value: {Counter}</h2>

      <button 
      onClick={addValue}>AddValue</button>
      <br />
      <br />
      <button 
      onClick={removeValue}>RemoveValue</button>
    </>
  )
}

export default App
