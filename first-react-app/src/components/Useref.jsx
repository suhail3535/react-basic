import React from 'react'
import { useRef } from 'react'
const Useref = () => {


    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input style={{width:"200px"}}  type="text" placeholder="Click the button below" />
            <button style={{width:"200px"}} onClick={focusInput}>Focus Input</button>

        </div>
    )
}

export default Useref
