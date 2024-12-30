import { useEffect, useState, useCallback, useRef } from 'react'
// import './App.css'
import Card from './Components/Card'

function App() {
  // const [color, setColor] = useState("pink")
  const [length, setlength] = useState(8)
  const [numberall, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv"
    if(numberall) str += "0123456789"
    if(char) str += "!@#$%^&*()_-+={}~`"

    for(let i=1; i<=length;i++){
      let newpass=Math.floor(Math.random() * str.length+1);
       pass += str.charAt(newpass)
    }

    setpassword(pass)

  },[length,numberall,char,setpassword])

  const copypassword=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberall,char,setpassword])

  return (
    <>

     <div className='w-full mx-auto max-w-md rounded-lg px-4 py-4 my-8 text-orange-300 bg-slate-700'>
       <h1 className='text-xl text-white-400 mb-4 text-center'>Password Generator</h1>
       <div className='flex rounded-lg overflow-hidden mb-4'>
         <input type="text" value={password}  className='w-full text-black read-only: py-1 px-2 ' placeholder='password' readOnly ref={passwordRef}/>
         <button onClick={copypassword}  className='bg-blue-500 px-2 text-lg text-black bold rounded-md mx-2'>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1 '>
           <input type="range" onChange={(e)=>{setlength(e.target.value)}} min={8} max={20} value={length} className='cursor-pointer'/>
           <label>Length:{length}</label>
         </div>
         <div className='flex items-center gap-x-1 '>
         <input type="checkbox" defaultChecked={numberall} id="num" onChange={()=>{setnumber(!numberall)}} className='cursor-pointer'/>
         <label htmlFor="num">Number</label>
         </div>
         <div className='flex items-center gap-x-1 '>
           <input type="checkbox" defaultChecked={char} id="character" onChange={()=>{setchar(!char)}}/><label htmlFor="character">Characters</label>
         </div>
       </div>
     </div>


 

      {/* <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='flex flex-wrap fixed bottom-12 inset-x-0  justify-center'>
          <div className='flex flex-wrap justify-center gap-3 bg-white rounded-xl px-3 py-2'>
            <button onClick={() => { setColor("red") }} className='outline-none px-4 py-2 text-white rounded-md' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-2 text-white rounded-md' style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-2 text-white rounded-md' style={{ backgroundColor: "yellow" }}>yellow</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 py-2 text-white rounded-md' style={{ backgroundColor: "black" }}>black</button>
          </div>
        </div>
      </div>

 */}

    </>
  )
}

export default App

//react fibre is an ongoing reimplementation of react core algorithm.The goal is to increase suitability for areas like animation,layouts,guestures.