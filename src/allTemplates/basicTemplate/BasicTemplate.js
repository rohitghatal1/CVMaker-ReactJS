import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './basicTemplate.css';

export default function BasicTemplate() {
  // Fetch data from localStorage
  const storedUserPhoto = localStorage.getItem('userPhoto');
  const userPhoto = storedUserPhoto ? storedUserPhoto : null; // Check if user photo exists

  const storedPersonalData = localStorage.getItem('personalInfo');
  const personalData = storedPersonalData ? JSON.parse(storedPersonalData) : [];

  const storedSocialLinks = localStorage.getItem('socialLinks');
  const socialLinks = storedSocialLinks ? JSON.parse(storedSocialLinks) : [];

  const storedAwardsData = localStorage.getItem('awardsData');
  const awardData = storedAwardsData ? JSON.parse(storedAwardsData) : [];

  const storedAchievementData = localStorage.getItem('achievementData');
  const achievementData = storedAchievementData ? JSON.parse(storedAchievementData) : [];

  const storedEducationData = localStorage.getItem('educationData');
  const educationData = storedEducationData ? JSON.parse(storedEducationData) : [];

  const storedExperienceData = localStorage.getItem('experienceData');
  const experienceData = storedExperienceData ? JSON.parse(storedExperienceData) : [];

  const storedSkillsData = localStorage.getItem('skillData');
  const skillData = storedSkillsData ? JSON.parse(storedSkillsData) : [];

  return (
    <div>
      <div className="container">
        <div className="left-section">
          <div className="profile-picture">
            {userPhoto ? (
              <img src={userPhoto} alt="Profile" />
            ) : (
              <FontAwesomeIcon icon={faUser} size="6x" />
            )}
          </div>

          {/* Personal Information */}
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

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="socialLinkItems">
              {socialLinks.map((social, index) => (
                <p key={index}>
                  {social.platform === 'Facebook' && <i className="fab fa-facebook"></i>}
                  {social.platform === 'Instagram' && <i className="fab fa-instagram"></i>}
                  {social.platform === 'Twitter' && <i className="fab fa-twitter"></i>}
                  {social.platform === 'LinkedIn' && <i className="fab fa-linkedin"></i>}
                  {social.platform === 'GitHub' && <i className="fab fa-github"></i>}
                  {social.platform === 'Website' && <i className="fas fa-globe"></i>}
                  {social.url}
                </p>
              ))}
            </div>
          )}

          {/* Awards */}
          {awardData.length > 0 && (
            <div className="section awards">
              <h3><i className="fa-solid fa-award"></i> AWARDS</h3>
              {awardData.map((award, index) => (
                <p className='awardDetail' key={index}><strong>{award.title}</strong><br />{award.details}</p>
              ))}
            </div>
          )}

          {/* Achievements */}
          {achievementData.length > 0 && (
            <div className="section achievements">
              <h3><i className="fa-solid fa-star"></i> ACHIEVEMENTS</h3>
              {achievementData.map((achievement, index) => (
                <div key={index}>
                  <strong>{achievement.title}</strong><br />
                  <p className='achievementDesc'>{achievement.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="right-section">
          {/* Summary */}
          {personalData.length > 0 && (
            personalData.map((personal, index) => (
              <div className="section summary" key={index}>
                <h3><i className="fa-solid fa-circle-info"></i> SUMMARY</h3>
                <p>{personal.summary}</p>
              </div>
            ))
          )}

          {/* Education */}
          {educationData.length > 0 && (
            <div className="section education">
              <h3><i className="fa-solid fa-graduation-cap"></i> EDUCATION</h3>
              {educationData.map((education, index) => (
                <p key={index}>
                  <strong>{education.degree}</strong><br />
                  {education.college}<br />
                  {education.startDate} to {education.passDate}
                </p>
              ))}
            </div>
          )}

          {/* Work Experience */}
          {experienceData.length > 0 && (
            <div className="section work-experience">
              <h3><i className="fa-solid fa-layer-group"></i> WORK EXPERIENCE</h3>
              {experienceData.map((experience, index) => (
                <p key={index}>
                  <strong>{experience.jobTitle}</strong><br />
                  {experience.organization}, {experience.location} <br />
                  {experience.startDate} to {experience.endDate}
                </p>
              ))}
            </div>
          )}

          {/* Skills */}
          {skillData.length > 0 && (
            <div className="section skillSection">
              <h3><i className="fa-solid fa-code-compare"></i> SKILLS</h3>
              <div className="skillItemContainer">
                {skillData.map((skill, index) => (
                  <div className="skillItem" key={index}>
                    <h3>{skill.skillName}</h3>
                    <span>{skill.skillLevel}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
