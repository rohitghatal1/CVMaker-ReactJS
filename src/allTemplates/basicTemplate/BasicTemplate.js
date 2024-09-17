import React, { useEffect, useState } from 'react'
import './basicTemplate.css'
import peronPhoto from '../../assets/personPhotos/rohit2.jpg'

export default function BasicTemplate() {

    const [personalData, setPersonalData] = useState(null);
    const [socialLinks, setSocialLinks] = useState(null);

    // for feteching personalData from local storage 
    useEffect(() => {
        const storedPersonalData = JSON.parse(localStorage.getItem('personalInfo'));
        if (storedPersonalData) {
            setPersonalData(storedPersonalData);
        }
    }, [])

    // for fetching social links 
    useEffect(() => {
        const storedSocialLinks = JSON.parse(localStorage.getItem('socialLinks'));
        if (storedSocialLinks) {
            setSocialLinks(storedSocialLinks);
        }
    }, [])
    return (
        <div>
            <div class="container">
                <div class="left-section">
                    <div class="profile-picture">
                        <img src={peronPhoto} alt="Profile Picture" />
                    </div>
                    {personalData && (
                        personalData.map((personal, index) => (
                            <div className="personalInformation" key={index}>
                                <h1>{personal.fName} {personal.lName}</h1>
                                <h2>{personal.speciality}</h2>

                                <div class="section summary">
                                    <h3><i class="fa-solid fa-address-book"></i> Contact</h3>
                                    <ul>
                                        <li><i class="fas fa-phone"></i> {personal.contactNo}</li>
                                        <li><i class="fas fa-envelope"></i> {personal.email}</li>
                                        <li><i class="fas fa-map-marker-alt"></i> {personal.PAddress}, {personal.city}</li>
                                    </ul>
                                </div>
                            </div>)
                        ))
                    }
                    {socialLinks && (
                        socialLinks.map((social, index) => (
                            <div className="socialLinkItems">
                                <span><i class="fab fa-facebook"></i> {social.url}</span>
                            </div>
                        ))
                    )}

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
                                <h3>HTML</h3>
                                <span>Expert</span>
                            </div>

                            <div className="skillItem">
                                <h3>CSS</h3>
                                <span>Skillful</span>
                            </div>

                            <div className="skillItem">
                                <h3>JavaScript</h3>
                                <span>Intermediate</span>
                            </div>

                            <div className="skillItem">
                                <h3>PHP</h3>
                                <span>Good</span>
                            </div>

                            <div className="skillItem">
                                <h3>Bootstrap</h3>
                                <span>Good</span>
                            </div>

                            <div className="skillItem">
                                <h3>Java</h3>
                                <span>Good</span>
                            </div>

                            <div className="skillItem">
                                <h3>C</h3>
                                <span>Good</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
