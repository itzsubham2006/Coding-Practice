import './App.css'
import { useState } from 'react';

function App() {

  const [fruit, setFruit] = useState("Apple");

  const fruitHandler = () => {
      if (fruit == "Apple"){
        setFruit('Banana')
      }
      else setFruit('Apple')
  }

  return(
    <div>
      <h1>This is a fruit handler</h1>
      <h1>{fruit}</h1>

      <button onClick={fruitHandler}>Change fruit name</button>
    </div>
  )
 

  
  
}



export default App
