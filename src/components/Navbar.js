import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
import logo from '../CVCraft.png'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
            <div className="logo"><img src={logo} alt="CVCraft" /></div>
            <div className="navitems">
                <Link to = "/" className="navlinks">Home</Link>
                <Link to = "/templateTab" className="navlinks">Templates</Link>
                <Link to = "/cvgenerator" className="navlinks">CV-Generator</Link>
                <Link to = "/about" className="navlinks">About</Link>
            </div>
            <div className="loginSignup">
                <button className='loginbtn'>Login / Register</button>
            </div>
        </div>
      </nav>
    </div>
  )
}
