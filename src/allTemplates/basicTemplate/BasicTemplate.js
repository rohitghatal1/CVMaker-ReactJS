import React from 'react'
import './basicTemplate.css'
import peronPhoto from '../../assets/personPhotos/rohit2.jpg'

export default function BasicTemplate() {
    return (
        <div>
            <div class="container">
                <div class="left-section">
                    <div class="profile-picture">
                        <img src={peronPhoto} alt="Profile Picture" />
                    </div>
                    <h1>Rohit Ghatal</h1>
                    <h2>Web Developer</h2>

                    <div class="section summary">
                        <h3><i class="fa-solid fa-address-book"></i> Contact</h3>
                        <ul>
                            <li><i class="fas fa-phone"></i> 9806468522</li>
                            <li><i class="fas fa-envelope"></i> rohitghatal@gmail.com</li>
                            <li><i class="fas fa-map-marker-alt"></i> Thasikhel, Lalitpur</li>
                            <li><i class="fab fa-facebook"></i> Facebook.com/rohitghatal</li>
                        </ul>
                    </div>

                    <div class="section awards">
                        <h3><i class="fa-solid fa-award"></i> AWARDS</h3>
                        <p><strong>Best booking App</strong><br />SR hotel / 2023 / Lalitpur<br />Improve information architecture of ABC's Web site by assisting with</p>
                        <p><strong>UI Design 2018</strong><br />Sunsex Global / 2018 / Nairobi<br />Overall responsibilities included managing a portfolio of customers</p>
                    </div>

                    <div class="section achievements">
                        <h3><i class="fa-solid fa-star"></i> ACHIEVEMENTS</h3>
                        <p><strong>Designed Nepal Wallet App</strong><br />Partnered with user interface designers, Web developers and UX</p>
                        <p><strong>User Research Web Presence</strong><br />Completed user research to identify opportunities for improving XYZ's</p>
                        <p><strong>Success in Cross Platform Digital Money Connection</strong><br />Partnered with user interface designers, Web developers and UX</p>
                    </div>
                </div>

                <div class="right-section">
                    <div class="section summary">
                        <h3><i class="fa-solid fa-circle-info"></i> SUMMARY</h3>
                        <p>Consistently ranked in the top ten country managers for UNDP as measured by overall revenues generated and year over year increase in revenues...</p>
                    </div>

                    <div class="section education">
                        <h3><i class="fa-solid fa-graduation-cap"></i> EDUCATION</h3>
                        <p><strong>Master in Interface Design</strong><br />Pulchok Engineering College / Pulchowk / Mar, 2018 - Apr 2021<br />Overall responsibilities included managing a portfolio of customers with total value of $35 million in revenue...</p>
                        <p><strong>Bachelor in Computer Application</strong><br />CSE College / Dhulikhel / Mar, 2015 - Apr 2018<br />Completed user research to identify opportunities for improving XYZ's and ABC's Web presence...</p>
                    </div>

                    <div class="section work-experience">
                        <h3><i className="fa-solid fa-layer-group"></i> WORK EXPERIENCE</h3>
                        <p><strong>Product Manager</strong><br />Brain Workshop / Pulchowk / Mar, 2018 - Apr 2021<br />Overall responsibilities included managing a portfolio of customers with total value of $35 million in revenue...</p>
                        <p><strong>UI Designer</strong><br />Karkhana Inc / Dhulikhel / Mar, 2015 - Apr 2018<br />Completed user research to identify opportunities for improving XYZ's and ABC's Web presence...</p>
                        <p><strong>Graphics Designer</strong><br />Thompson Advertising / Jawalakhel / Mar, 2014 - Apr 2015<br />Completed user research to identify opportunities for improving XYZ's and ABC's Web presence...</p>
                    </div>

                    <div className="section skills">
                        <h3><i className="fa-solid fa-code-compare"></i> SKILLS</h3>
                        <div className="skillItemContainer">
                            <div className="skillItem">
                                <p>HTML</p>
                                <div className="skillbar"><div className="fill" style={{ width: '80%' }}></div></div>
                            </div>

                            <div className="skillItem">
                                <p>CSS</p>
                                <div className="skillbar"><div className="fill" style={{ width: '70%' }}></div></div>
                            </div>

                            <div className="skillItem">
                                <p>JavaScript</p>
                                <div className="skillbar"><div className="fill" style={{ width: '60%' }}></div></div>
                            </div>

                            <div className="skillItem">
                                <p>PHP</p>
                                <div className="skillbar"><div className="fill" style={{ width: '75%' }}></div></div>
                            </div>

                            <div className="skillItem">
                                <p>Bootstrap</p>
                                <div className="skillbar"><div className="fill" style={{ width: '55%' }}></div></div>
                            </div>

                            <div className="skillItem">
                                <p>Java</p>
                                <div className="skillbar"><div className="fill" style={{ width: '40%' }}></div></div>
                            </div>

                            <div className="skillItem">
                                <p>C</p>
                                <div className="skillbar"><div className="fill" style={{ width: '70%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
