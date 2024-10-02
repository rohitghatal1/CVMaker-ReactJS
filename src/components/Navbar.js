import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom';
import logo from '../CVCraft.png'

export default function Navbar({openForm}) {
  return (
    <div>
      <nav>
        <div className="navbar">
            <div className="logo"><img src={logo} alt="CVCraft" /></div>
           
            <div className="navitems">
                <NavLink to = "/" className="navNavLinks" activeClassName ="active" exact>Home</NavLink>
                <NavLink to = "/templateTab" className="navNavLinks" activeClassName ="active">Templates</NavLink>
                <NavLink to = "/cvgenerator" className="navNavLinks" activeClassName ="active">CV-Generator</NavLink>
                <NavLink to = "/about" className="navNavLinks" activeClassName ="active">About</NavLink>
            </div>
            <div className="loginSignup">
                <button className='loginbtn' onClick={openForm}>Login / Register</button>
            </div>
        </div>
      </nav>
    </div>
  )
}
