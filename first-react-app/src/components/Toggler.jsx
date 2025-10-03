import React, { useState } from 'react'

const Toggler = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }


  return (
    
     <div style={{ background: isOn ? "yellow" : "black", color: isOn ? "black" : "white", padding: "20px" }}>
      <p>The light is {isOn ? "ON" : "OFF"}</p>
      <button style={{width:"100px"}} onClick={toggle}>
        Toggle Light
      </button>

    </div>
  )
}

export default Toggler
