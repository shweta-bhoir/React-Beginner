import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")


  return (
    <div className=" w-full h-screen duration-200 "
    style={{backgroundColor:color}} >
       <div className="fixed flex flex-wrap justify-center 
       bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-2xl outline ">
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"Yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"Grey"}} onClick={()=>setColor("grey")}>Grey</button>
          <button className=" outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"Brown"}} onClick={()=>setColor("brown")}>Brown</button>
         </div>
       </div>
    </div>
  )
}

export default App
