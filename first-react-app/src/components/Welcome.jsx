import React from 'react'

const Welcome = ({ school="DPS", course="LKG"}) => {
  return (
    <div>
        <h1>Welcome to {school} and class is {course}.</h1>
    </div>
  )
}



export default Welcome
