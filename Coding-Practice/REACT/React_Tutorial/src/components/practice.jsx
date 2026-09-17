function Header(){
    return(
        <div>
            <h1>Anil Sidhu Todos</h1>
        </div>
    )
}

export function Photos(){
    return(
        <div><img src="src/assets/hero.png" alt="Hero png" /></div>
    )
}

export function Points(){
    return(
        <div>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Honesty is the best policy</li>
        </div>
    )
}

export function Click(){
    return(
        <div>
            <button onClick={''}>Click me</button>
        </div>
    )
}

export default Header;