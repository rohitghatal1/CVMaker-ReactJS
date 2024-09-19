import React from 'react';
import './basicTemplate.css';
import peronPhoto from '../../assets/personPhotos/rohit2.jpg';
import { json } from 'react-router-dom';

export default function BasicTemplate() {
  // Fetch data from localStorage directly
  const storedPersonalData = localStorage.getItem('personalInfo');
  const personalData = storedPersonalData ? JSON.parse(storedPersonalData) : [];

  const storedSocialLinks = localStorage.getItem('socialLinks');
  const socialLinks = storedSocialLinks ? JSON.parse(storedSocialLinks) : [];

  const storedAwardsData = localStorage.getItem('awardsData');
  const awardData = storedAwardsData ? JSON.parse(storedAwardsData) : [];

  const storedAchievementData = localStorage.getItem('achievementData');
  const achievementData = storedAchievementData ? JSON.parse(storedAchievementData) : [];

  const storedEducationData = localStorage.getItem('educationData');
  const educationData = storedAchievementData ? JSON.parse(storedEducationData) : [];

  const storedExperienceData = localStorage.getItem('experienceData');
  const experienceData = storedExperienceData ? JSON.parse(storedExperienceData) : [];

  return (
    <div>
      <div className="container">
        <div className="left-section">
          <div className="profile-picture">
            <img src={peronPhoto} alt="Profile Picture" />
          </div>

          {/* Ensure data is mapped only if it exists */}
          {personalData.length > 0 && (
            personalData.map((personal, index) => (
              <div className="personalInformation" key={index}>
                <h1>{personal.fName} {personal.lName}</h1>
                <h2>{personal.speciality}</h2>

                <div className="section summary">
                  <h3><i className="fa-solid fa-address-book"></i> Contact</h3>
                  <ul>
                    <li><i className="fas fa-phone"></i> {personal.contactNo}</li>
                    <li><i className="fas fa-envelope"></i> {personal.email}</li>
                    <li><i className="fas fa-map-marker-alt"></i> {personal.PAddress}, {personal.city}</li>
                  </ul>
                </div>
              </div>
            ))
          )}

          {/* Ensure socialLinks are mapped only if they exist */}
          {socialLinks.length > 0 && (
            socialLinks.map((social, index) => (
              <div className="socialLinkItems" key={index}>
                {social.platform === 'Facebook' && <span><i className="fab fa-facebook"></i> {social.url}</span>}
                {social.platform === 'Instagram' && <span><i className="fab fa-instagram"></i> {social.url}</span>}
                {social.platform === 'Twitter' && <span><i className="fab fa-twitter"></i> {social.url}</span>}
                {social.platform === 'LinkedIn' && <span><i className="fab fa-linkedin"></i> {social.url}</span>}
                {social.platform === 'GitHub' && <span><i className="fab fa-github"></i> {social.url}</span>}
                {social.platform === 'Website' && <span><i className="fas fa-globe"></i> {social.url}</span>}
              </div>
            ))
          )}

          {awardData.length > 0 && (
            awardData.map((award, index) => (
              <div className="section awards">
                <h3><i className="fa-solid fa-award"></i> AWARDS</h3>
                <p><strong>Best booking App</strong><br />SR hotel / 2023 / Lalitpur<br />Improve information architecture of ABC's Web site by assisting with</p>
                <p><strong>UI Design 2018</strong><br />Sunsex Global / 2018 / Nairobi<br />Overall responsibilities included managing a portfolio of customers</p>
              </div>
            ))
          )}

          {achievementData.length > 0 && (
            achievementData.map((achivement, index) => (
              <div className="section achievements">
                <h3><i className="fa-solid fa-star"></i> ACHIEVEMENTS</h3>
                <p><strong>{achivement.title}</strong><br /></p>
                <p>{achivement.desc}</p>
              </div>
            ))
          )}
        </div>

        <div className="right-section">
          <div className="section summary">
            <h3><i className="fa-solid fa-circle-info"></i> SUMMARY</h3>
            <p>Consistently ranked in the top ten country managers for UNDP as measured by overall revenues generated and year over year increase in revenues...</p>
          </div>

          <div className="section education">
            <h3><i className="fa-solid fa-graduation-cap"></i> EDUCATION</h3>
            <p><strong>Master in Interface Design</strong><br />Pulchok Engineering College / Pulchowk / Mar, 2018 - Apr 2021<br />Overall responsibilities included managing a portfolio of customers with total value of $35 million in revenue...</p>
            <p><strong>Bachelor in Computer Application</strong><br />CSE College / Dhulikhel / Mar, 2015 - Apr 2018<br />Completed user research to identify opportunities for improving XYZ's and ABC's Web presence...</p>
          </div>

          <div className="section work-experience">
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
  );
}
