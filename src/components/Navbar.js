import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../CVCraft.png'

export default function Navbar({ openForm }) {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo"><img src={logo} alt="CVCraft" /></div>

          <div className="navitems">
            <NavLink to="/" className="navlinks" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/templateTab" className="navlinks" activeClassName="active">Templates</NavLink>
            <NavLink to="/cvgenerator" className="navlinks" activeClassName="active">CV-Generator</NavLink>
            <NavLink to="/about" className="navlinks" activeClassName="active">About</NavLink>

          </div>
          <div className="loginSignup">
            <button className='loginbtn' onClick={openForm}>Login / Register</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
