import React from 'react'
import './about.css'
import developerPhoto from '../assets/personPhotos/profilePic.jpg'

export default function AboutUs() {
  return (
    <div>
      <div className="aboutUsConponent">
        <h2>About Us</h2>
        <div className="aboutUsContainer">
          <fieldset className="owner">
            <legend>Developer</legend>
            <div className="ownerInfo">
              <h3>Rohit Ghatal</h3>
            </div>
            <figure className='developerPhoto'><img src={developerPhoto} alt="" /></figure>
          </fieldset>
          
          <div className="aboutApp">

          </div>
        </div>
      </div>
    </div>
  )
}
