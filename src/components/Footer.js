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
                <h2>Follow Us:</h2>
                <div className="socialLinks facebookIcon">
                    <span><i className='fab fa-facebook'></i> Facebook</span>
                </div>
                <div className="socialLinks instagramIcon">
                    <span><i className='fab fa-instagram'></i> Instagram</span>
                </div>
                <div className="socialLinks linkedInIcon">
                    <span><i className="fa-brands fa-linkedin-in"></i> Linked In</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
