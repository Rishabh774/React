import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter]= useState(15)
   const  addvalue = () =>{
      setcounter(counter +1)
    }
    const  removevalue = () =>{
      setcounter(counter -1)
    }
  return (
    <>
      <h1>Counter Number  project {counter}</h1>
      <button onClick={addvalue}> Add Value {counter}</button><br/><br/>
      <button onClick={removevalue}> Remove Value{counter} </button>
    </>
  )
}

export default App
