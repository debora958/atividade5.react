import React, {useState} from 'react'
import './App.css'

export default function App(){

  const [num, setNum] =useState(10)

return(
  <>
  <p>Valor inicial: {num}</p>
  <button onClick={()=>setNum(num+10)}>Soma 10</button>
  </>
)
}