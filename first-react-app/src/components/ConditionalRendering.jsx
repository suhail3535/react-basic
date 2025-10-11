import React, { useState } from 'react'
import Counter1 from './Counter1'
import Counter from './Counter'

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleChnage = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            <h1>This is conditinal rendering</h1>

            {isLoggedIn ? <Counter1/> : <Counter/>}
            <button onClick={handleChnage}>Change</button>

        </div>
    )
}

export default ConditionalRendering
