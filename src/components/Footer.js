import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../CVCraft.png'
import './footer.css'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footerContainer">
            <div className="aboutApp">
                <div className='applogo'>
                    <img src={logo} alt="CVCraft" />
                </div>
                <div className="appDesc">
                    <p>CVCraft is a Web Application where you can create your <span> CV/Resumes </span> quickly and easily.</p>
                </div>
            </div>
            <div className="quickLinks">
                <h2>Go to:</h2>
                <Link to = "/" className="links">Home</Link>
                <Link to = "/templates" className="links">Templates</Link>
                <Link to = "/cvgenerator" className='links'>CV Generator</Link>
                <Link to = "/about" className="links">About</Link>
            </div>
            <div className="socialSection">
                <h2>Follow Us:</h2>
                <div className="socialLinks facebookIcon">
                    <span><a href="https://www.facebook.com/rohit.rohit.ghatal/"><i className='fab fa-facebook'></i> Facebook</a></span>
                </div>
                <div className="socialLinks instagramIcon">
                    <span><a href="https://www.instagram.com/_rohit.ghatal_/"><i className='fab fa-instagram'></i> Instagram</a></span>
                </div>
                <div className="socialLinks linkedInIcon">
                    <span><a href="https://www.linkedin.com/in/rohit-ghatal-7823111b4/"><i className="fa-brands fa-linkedin-in"></i> Linked In</a></span>
                </div>
            </div>
        </div>
        <div className="aboutDeveloper">
            <p className='developerInfo'>Designed & Developed by <span>Rohit Ghatal</span>.</p>
        </div>
      </footer>
    </div>
  )
}
