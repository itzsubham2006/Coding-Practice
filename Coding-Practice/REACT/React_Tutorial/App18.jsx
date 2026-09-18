import User from "./src/user";

function App18(){
    let name = "Subham Pathak";
    let userObject = {
        name : "Subham Pathak",
        age : 19,
        address : "Rowta",
        Course : "B.Tech"
    }

    return (

    <div>
        <h1>This is function 18</h1>
        <User name = {userObject.name} age = {userObject.age} address = {userObject.address} Course = {userObject.Course}/>

    </div>
        
    )


}

export default App18;