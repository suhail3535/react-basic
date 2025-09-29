import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h1>This is Navbar component</h1>
      <div>
        <ul id="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Courses</li>
          <li>Experience</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
