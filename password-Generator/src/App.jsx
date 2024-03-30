import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [isNumber,setIsNumber]=useState(false);
  const [isCharacter,setIsCharacter]=useState(false);
  const [Password,setPassword]=useState("");

  const passwordRef=useRef(null);

  const passwordGenerator=useCallback( ()=>{
     let pass="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     if(isNumber){
      str=str+"1234567890";
     }
 
     if(isCharacter){
      str=str+"!~@#$%^&*()_=-{}[]<>/?:;'`|";
     }

     for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass=pass+str.charAt(char);
     }
     setPassword(pass);
  },
  [length,isNumber,isCharacter,setPassword]);
     
  const copypasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,60);
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{
       passwordGenerator()
  },[length,isCharacter,isNumber,passwordGenerator])

  return(
    <>
     <div className="w-full max-w-md mx-auto  shadow-md rounded-md px-4 py-3 my-8 bg-gray-700 text-orange-500">
     <h1 className="text-center text-white ">Password Generator</h1>
         <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
           <input 
           type="text"
           placeholder="password"
           value={Password}
           readOnly
           ref={passwordRef}
           className="outline-none w-full py-1 px-3"
           />
           <button className=" outline-none text-white shrink-0 px-3 py-0.5 bg-blue-700" onClick={copypasswordtoClipboard}>
            copy
           </button>
         </div>
         <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                 <input 
                 type="range"
                 min={6}
                 max={60}
                 value={length}
                 className="cursor-pointer"
                 onChange={(e)=>{setLength(e.target.value)}}
                 
                />
                <label className="mr-4">  Length:{length}     </label>
                <input 
                id="numberCheck"
                type="checkbox"
                defaultChecked={isNumber}
                onChange={()=>setIsNumber((prev)=>!prev)}
                />
                <label className="mr-4" htmlFor="numberInput"> Numbers </label>
              </div>
                <input 
                type="checkbox"
                id="charcterCheck"
                defaultChecked={isCharacter}
                onChange={()=>setIsCharacter((prev)=>!prev)}
                />
                <label className="mr-4" htmlFor="characterInput"> Characters </label>
              </div>
              <div>
         </div>
     </div>
     </>
  )
}

export default App
