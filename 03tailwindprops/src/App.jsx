// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let myobj = {
  //   username:"farrukh",
  //   age: 21
  // }
  
  // let newArr = [1,2,3]



  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username = "Farrukh" btnText = "Click Me" para = "Hello i am Farrukh Gul Know me more..."/>
     <Card username = "Gul" btnText = "Visit Me" para = "Hello i am Gul Know me more..."/>
    
    </>
  )
}

export default App
