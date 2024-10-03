import React from 'react';
import './about.css';
import developerPhoto from '../assets/personPhotos/profilePic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function AboutUs() {
  return (
    <div>
      <div className="aboutUsConponent">
        <h2>About</h2>
        <div className="aboutUsContainer">
          <fieldset className="owner">
            <legend>Developer</legend>
            <div className="ownerInfo">
              <h3>Rohit Ghatal</h3>
              <p>A passionate full stack Web Developer with a knack for designing user interfaces.
                My journey began with a deep curiosity for website design, which has since evolved into a
                fulfilling career dedicated to full stack Web Development.
              </p>

              {/* Social Media Section */}
              <div className="social">
                <h3>Follow me on:</h3>
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <a href="https://www.facebook.com/rohit.rohit.ghatal" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>

                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <a href="https://www.instagram.com/_rohit.ghatal_/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">GitHub</span>
                    <a href="https://github.com/rohitghatal1" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <figure className='developerPhoto'>
              <img src={developerPhoto} alt="Developer" />
            </figure>
          </fieldset>

          <div className="aboutApp">
            {/* Additional content for the app description can go here */}
          </div>
          
          {/* send message section  */}
          <div className="sendMessageSection">
            <div className="messageForm">

            </div>
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
