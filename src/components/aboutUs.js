import React from 'react';
import './about.css';
import developerPhoto from '../assets/personPhotos/profilePic.jpg';

export default function AboutUs() {
  return (
    <div className="aboutUsWrapper">
      <div className="aboutUsComponent">
        <h2>About Us</h2>
        <div className="aboutUsContainer">
          <fieldset className="developerSection">
            <legend>Developer</legend>
            <div className="developerInfo">
              <h3>Rohit Ghatal</h3>
              <p></p>
              <div className="socialSection">
                {/* Facebook link */}
                <div className="facebookContainer">
                  <div className="tooltipContainer">
                    <div className="tooltipBox">
                      <div className="profileBox">
                        <div className="userInfo">
                          <div className="userImage">Fb</div>
                          <div className="userDetails">
                            <div className="userName">User</div>
                            <div className="userHandle">@username</div>
                          </div>
                        </div>
                        <div className="friendsInfo">500+ Friends</div>
                      </div>
                    </div>
                    <div className="socialLink">
                      <a className="iconLink" href="/">
                        <div className="iconLayer">
                          <span></span><span></span><span></span><span></span>
                          <span className="facebookSVG">
                            <svg
                              viewBox="0 0 40 40"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop stopColor="#0062e0" offset="0"></stop>
                                <stop stopColor="#19afff" offset="1"></stop>
                              </linearGradient>
                              <path
                                d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                                fill="url(#a)"
                              ></path>
                              <path
                                d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <div className="linkText">Facebook</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure className="developerPhoto">
              <img src={developerPhoto} alt="Developer" />
            </figure>
          </fieldset>

          <div className="aboutAppSection">
            {/* Additional content for the app can go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
