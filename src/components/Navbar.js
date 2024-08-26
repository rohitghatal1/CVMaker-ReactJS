import React from 'react'
import './navbar.css'
import logo from '../CVCraft.png'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
            <div className="logo"><img src={logo} alt="CVCraft" /></div>
            <div className="navitems">
                <span className="navlinks">Home</span>
                <span className="navlinks">Templates</span>
                <span className="navlinks">CV-Generator</span>
                <span className="navlinks">About</span>
            </div>
            <div className="loginSignup">
                <button className='loginbtn'>Login / Register</button>
            </div>
        </div>
      </nav>
    </div>
  )
}
