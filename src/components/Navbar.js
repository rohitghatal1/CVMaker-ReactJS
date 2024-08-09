import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
            <div className="logo">CV Maker</div>
            <div className="navitems">
                <span className="navlinks">Home</span>
                <span className="navlinks">Templates</span>
                <span className="navlinks">Services</span>
                <span className="navlinks">About</span>
            </div>
            <div className="loginSignup">
                <button className='loginbtn'>Login</button>
            </div>
        </div>
      </nav>
    </div>
  )
}
