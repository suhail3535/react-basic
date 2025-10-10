import React, { use, useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);

    }

    const decrement = () => {
        setCount(count - 1);

    }

    useEffect(() => {
        console.log(`Count has been updated to: ${count} times`);
    }, []); // This effect runs whenever 'count' changes

    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter Application</h1>
            <h2>{count}</h2>


            <div style={{ width: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', gap: '10px' }}>

                <button onClick={increment}>Increment</button>
                <button disabled={count == 0} onClick={decrement} >Decrement</button>

            </div>
        </div>
    )
}

export default Counter
