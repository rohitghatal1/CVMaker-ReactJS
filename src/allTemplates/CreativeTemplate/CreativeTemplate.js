import React from 'react';
import personPhoto from '../../assets/personPhotos/rohit2.jpg';
import './creativeTemplate.css';

// Skill level mappings
const skillLevels = {
  beginner: [0, 20],
  intermediate: [20, 40],
  skillful: [40, 60],
  experienced: [60, 80],
  expert: [80, 100]
};

export default function CreativeTemplate() {
    // Fetch data from localStorage
    const storedPersonalData = localStorage.getItem('personalInfo');
    const personalData = storedPersonalData ? JSON.parse(storedPersonalData) : [];

    const storedSocialLinks = localStorage.getItem('socialLinks');
    const socialLinks = storedSocialLinks ? JSON.parse(storedSocialLinks) : [];

    const storedSkillsData = localStorage.getItem('skillData');
    const skillData = storedSkillsData ? JSON.parse(storedSkillsData) : [];

    const storedProjectsData = localStorage.getItem('projectsData');
    const projectsData = storedProjectsData ? JSON.parse(storedProjectsData) : [];

    const storedExperienceData = localStorage.getItem('experienceData');
    const experienceData = storedExperienceData ? JSON.parse(storedExperienceData) : [];

    const storedAchievementData = localStorage.getItem('achievementData');
    const achievementData = storedAchievementData ? JSON.parse(storedAchievementData) : [];

    return (
        <div>
            <div className="CVContainer">
                <section className="infoAndSkillsSection">
                    <div className="photo">
                        <img src={personPhoto} alt="Person" />
                    </div>
                    <div className="infoAndSkills">
                        {personalData.length > 0 && personalData.map((personal, index) => (
                            <div key={index} className="personInfo">
                                <h2>{personal.fName} {personal.lName}</h2>
                                <p>{personal.speciality}</p>
                            </div>
                        ))}
                        <hr />
                        <div className="contactAndSkills">
                            <div className="skills">
                                <h2><i className="fa-solid fa-code-compare"></i> Skills</h2>
                                <div className="skillItemContainer">
                                    {skillData.length > 0 && skillData.map((skill, index) => {
                                        const skillRange = skillLevels[skill.skillLevel] || [0, 0]; // Default to [0, 0] if not found
                                        return (
                                            <div className="skillItem" key={index}>
                                                <p>{skill.skillName}</p>
                                                <div className="skillbar">
                                                    <div className="fill" style={{ width: `${skillRange[1]}%` }}></div>
                                                </div>
                                                <span>{skill.skillLevel} ({skillRange[0]}% - {skillRange[1]}%)</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="contactContainer">
                                <h2><i className="fa-solid fa-child-reaching"></i> Contact Me</h2>
                                <div className="contactItems">
                                    {personalData.length > 0 && personalData.map((personal, index) => (
                                        <div key={index}>
                                            <span><i className="fa-solid fa-phone"></i> {personal.contactNo}</span>
                                            <span><i className="fa-regular fa-envelope"></i> {personal.email}</span>
                                            <span><i className="fa-solid fa-location-dot"></i> {personal.PAddress}, {personal.city}</span>
                                        </div>
                                    ))}
                                    {socialLinks.length > 0 && socialLinks.map((social, index) => (
                                        <span key={index}>
                                            {social.platform === 'Facebook' && <i className="fab fa-facebook"></i>}
                                            {social.platform === 'Instagram' && <i className="fab fa-instagram"></i>}
                                            {social.platform === 'Twitter' && <i className="fab fa-twitter"></i>}
                                            {social.platform === 'LinkedIn' && <i className="fab fa-linkedin"></i>}
                                            {social.platform === 'GitHub' && <i className="fab fa-github"></i>}
                                            {social.platform === 'Website' && <i className="fas fa-globe"></i>}
                                            {social.url}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>

                <section className="summarySection">
                    {personalData.length > 0 && personalData.map((personal, index) => (
                        <div className="summaryContainer sectionContainer" key={index}>
                            <div className="summaryContent">
                                <div className="icon">
                                    <i className='fas fa-user'></i>
                                    <h2>Summary</h2>
                                </div>
                                <div className="summaryDetails">
                                    <p>{personal.summary}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="projects-section">
                    <div className="section-header">
                        <div className="icon">
                            <i className="fas fa-rocket"></i>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    {projectsData.length > 0 && projectsData.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="line"></div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.details}</p>
                                {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>}
                            </div>
                        </div>
                    ))}
                </section>

                <section className="workExperience-section">
                    <div className="section-header">
                        <div className="icon">
                            <i className="fas fa-briefcase"></i>
                            <h2>Work Experience</h2>
                        </div>
                    </div>
                    {experienceData.length > 0 && experienceData.map((experience, index) => (
                        <div className="work-item" key={index}>
                            <div className="line"></div>
                            <div className="work-content">
                                <h3>{experience.jobTitle}</h3>
                                <p><strong>{experience.startDate} - {experience.endDate}</strong></p>
                                <p>{experience.organization}, {experience.location}</p>
                                <p>{experience.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="achievements-section">
                    <div className="section-header">
                        <div className="icon">
                            <i className="fas fa-trophy"></i>
                            <h2>Achievements</h2>
                        </div>
                    </div>
                    {achievementData.length > 0 && achievementData.map((achievement, index) => (
                        <div className="achievement-item" key={index}>
                            <div className="line"></div>
                            <div className="achievement-content">
                                <h3>{achievement.title}</h3>
                                <p>{achievement.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
