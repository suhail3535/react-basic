import React from 'react'

import suhail from "../assets/images/profile.jpg"
const Welcome = ({ school="DPS", course="LKG"}) => {
  return (
    <div>
        <h1>Welcome to {school} and class is {course}.</h1>
        <img style={{width:'100px',height:'100px'}} src={suhail} alt='profile' />
        <img style={{width:'100px',height:'100px'}} src='https://media.geeksforgeeks.org/gfg-gg-logo.svg' alt='logo' />
    </div>
  )
}



export default Welcome
