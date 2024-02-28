import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCount] = useState(0)
  const AddValue = () => {
    if(counter == 20){

    }
    else{
      setCount(counter+1);
    }
  }
  const RemoveValue = () => {
    if(counter == 0){

    }
    else{
      setCount(counter-1)
    }
  }

  return (
    <>
      <h1>Hello React Start count</h1>
      <h1>CountValue: {counter}</h1>
      <button onClick={AddValue}>Add Value{counter}</button><br />
      <button onClick={RemoveValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
