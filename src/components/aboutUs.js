import React from 'react'
import './about.css'

export default function AboutUs() {
  return (
    <div>
      <div className="aboutUsConponent">
        <h2>About Us</h2>
        <div className="aboutUsContainer">
            <div className="owner">
                <figure><img src="" alt="" /></figure>
                <div className="ownerInfo">
                    <h3>Rohit Ghatal</h3>
                </div>
            </div>
            <div className="aboutApp">
                <p>This is a React app for creating CV in professional way</p>
            </div>
        </div>
      </div>
    </div>
  )
}
