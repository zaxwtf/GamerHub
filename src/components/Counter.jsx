import { useState } from "react"


function Counter(){
    const [count, setCount] = useState(0)

    function add(){
        setCount(count + 1)
    }

    function rest(){
        setCount(count - 1)
    }

    function reset(){
        setCount(0)
    }

    return (
        <div>
            <p>Conteo: {count}</p>
            <button onClick={add}>+</button>
            <button onClick={rest}>-</button>
            <button onClick={reset}>R</button>
        </div>
    )
}

export default Counter