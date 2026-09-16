import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import User from './user'

function App() {

  const [counter, statecounter] = useState(0)

  return <>
  <h1>Counter value : {counter}</h1>
  <User/>
  <button onClick={()=>statecounter(counter+1)}> Click me to increase</button>
  <br />
  <button onClick={()=>statecounter(counter-1)}>Click here to decrease</button>

  <br />
  <button onClick={()=>statecounter(0)}>Reset</button>
  </>;
}

export default App
