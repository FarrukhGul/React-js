import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center
      bottom-20 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg
        px-3 py-2 bg-white text-2xl rounded-full">
<button onClick={()=>setColor("red")} 
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"red"}}>Red</button>

<button onClick={()=>setColor("yellow")} 
className="outline-none px-6 py-1 rounded-full text-black shadow-sm
         "style={{backgroundColor:"Yellow"}}>Yellow</button>

<button onClick={()=>setColor("green")}  
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"green"}}>Green</button>

<button onClick={()=>setColor("dodgerblue")} 
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"dodgerblue"}}>Dodger BLue</button>

<button onClick={()=>setColor("black")} 
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"black"}}>Black</button>

<button onClick={()=>setColor("pink")} 
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"pink"}}>Pink</button>

<button onClick={()=>setColor("orange")} 
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"orange"}}>Orange</button>

<button onClick={()=>setColor("purple")} 
className="outline-none px-6 py-1 rounded-full text-white shadow-sm
         "style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>

      
    </div>
    
    
  )
}

export default App
