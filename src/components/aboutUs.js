import React from 'react';
import './about.css';
import developerPhoto from '../assets/personPhotos/profilePic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
              <figure className='developerPhoto'>
                <img src={developerPhoto} alt="Developer" />
              </figure>

              {/* Social Media Section */}
              <div className="social">
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </li>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                </ul>
              </div>
            </div>
          </fieldset>
          <div className="aboutApp">
            {/* Additional content for the app description can go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
