import { useState } from "react";

function App16(){

    const [ display, presentDisplay ] = useState(false)

    return(
        <>
        <h1>This is a toggle button</h1>
        <button onMouseOver={() => { presentDisplay(!display)}}>Toggle</button>

        {
            display ? <h1>Subham Pathak</h1> : null
        }

        </>
    )

    

}

export default App16