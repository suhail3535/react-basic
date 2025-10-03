import React, { use, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")


    const increment = () => {
        setCount(count + 2);
        setName("Hello")
    }

    const decrement = () => {
        setCount(count - 1);
        setName("")
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter Application</h1>
            <h2>{count}</h2> 
            <h1>{name}</h1>
            <div style={{ width: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', gap: '10px' }}>

                <button onClick={increment}>Increment</button>
                <button disabled={count == 0} onClick={decrement} >Decrement</button>

            </div>
        </div>
    )
}

export default Counter
