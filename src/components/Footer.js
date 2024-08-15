import React from 'react'
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
                    <p>CVCraft is a Web Application where you can create your CV/Resumes quickly and easily.</p>
                </div>
            </div>
            <div className="quickLinks">
                <h2>Go to:</h2>
                <span className="links">Home</span>
                <span className="links">Templates</span>
                <span className="links">About</span>
            </div>
            <div className="socialSection">
                <h3>Follow Us:</h3>
                <div className="socialLinks">
                    <span><i className='fab fa-facebook'></i></span>
                </div>
                <div className="socialLinks">
                    <span><i className='fab fa-instagram'></i></span>
                </div>
                <div className="socialLinks">
                    <span><i className="fa-brands fa-linkedin-in"></i></span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
