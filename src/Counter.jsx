import React from 'react'
import {useState} from 'react'


export default function Counter() {
    const [counter,setCounter] = useState(0)
    const clickHandle=()=>{

        setCounter()
    }
  return (
    <div>
        <span>{counter}</span>
        <button onClick={clickHandle}>+1</button>
    </div>
    
  )
}

