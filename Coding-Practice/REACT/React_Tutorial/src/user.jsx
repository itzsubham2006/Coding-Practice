function User({name, age, address, Course}){

    console.log(name);

    return(
        <div>
            <h1>This is User Component.</h1>
            <h1>Name : {name}</h1>
            <h2>Age : {age}</h2>
            <h3>Address : {address}</h3>
            <h2>Course : {Course}</h2>
        </div>

    )
    }

    
    


export default User;