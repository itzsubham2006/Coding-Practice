import { useState } from "react";

function App17(){

    const [count, setCount] = useState(0);

    return(
    <>
    <h1>{count}</h1>

    <button onClick={()=>{setCount(count+1)}}>Click to increase</button>

    { count==0 ? <h1>Condition : {count} </h1>
    : count==1 ? <h1>Condition : {count} </h1>
    : count==2 ? <h1>Condition : {count} </h1>
    : count==3 ? <h1>Condition : {count} </h1>
    : count==4 ? <h1>Condition : {count} </h1>
    : null

    }

    <br />

    <button onClick={()=>{setCount(0)}}>Reset</button>

    </>
    )

}

export default App17;