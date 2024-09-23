import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './professionalII.css';

export default function ProfessionalIITemplate() {
    // Fetch data from localStorage
    const storedUserPhoto = localStorage.getItem('userPhoto');
    const userPhoto = storedUserPhoto ? storedUserPhoto : null;

    const storedPersonalData = localStorage.getItem('personalInfo');
    const personalData = storedPersonalData ? JSON.parse(storedPersonalData) : [];

    const storedSocialLinks = localStorage.getItem('socialLinks');
    const socialLinks = storedSocialLinks ? JSON.parse(storedSocialLinks) : [];

    const storedSkillsData = localStorage.getItem('skillData');
    const skillData = storedSkillsData ? JSON.parse(storedSkillsData) : [];

    const storedExperienceData = localStorage.getItem('experienceData');
    const experienceData = storedExperienceData ? JSON.parse(storedExperienceData) : [];

    const storedProjectsData = localStorage.getItem('projectData');
    const projectsData = storedProjectsData ? JSON.parse(storedProjectsData) : [];

    return (
        <div className="professionalII-templateContainer">
            <header className="professionalII-headerSection">
                <div className="professionalII-photo">
                    {userPhoto ? (
                        <img src={userPhoto} alt="Profile" />
                    ) : (
                        <FontAwesomeIcon icon={faUser} size="6x" />
                    )}
                </div>
                <div className="professionalII-personalDetails">
                    {personalData.length > 0 && personalData.map((personal, index) => (
                        <div key={index}>
                            <h1>{personal.fName} {personal.lName}</h1>
                            <p>{personal.speciality}</p>
                        </div>
                    ))}
                </div>
            </header>

            <main className="professionalII-mainContent">
                <section className="professionalII-contactSection">
                    <h2>Contact Information</h2>
                    {personalData.length > 0 && personalData.map((personal, index) => (
                        <div key={index}>
                            <p><FontAwesomeIcon icon={faPhone} /> {personal.contactNo}</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> {personal.email}</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {personal.PAddress}, {personal.city}</p>
                        </div>
                    ))}
                    <div className="professionalII-socialLinks">
                        {socialLinks.length > 0 && socialLinks.map((social, index) => (
                            <p key={index}>
                                {social.platform}: <a href={social.url} target="_blank" rel="noopener noreferrer">{social.url}</a>
                            </p>
                        ))}
                    </div>
                </section>

                <section className="professionalII-skillsSection">
                    <h2>Skills</h2>
                    <ul>
                        {skillData.length > 0 && skillData.map((skill, index) => (
                            <li key={index}>{skill.skillName}</li>
                        ))}
                    </ul>
                </section>

                <section className="professionalII-experienceSection">
                    <h2>Work Experience</h2>
                    {experienceData.length > 0 && experienceData.map((experience, index) => (
                        <div className="professionalII-experienceItem" key={index}>
                            <h3>{experience.jobTitle}</h3>
                            <p>{experience.organization}, {experience.location}</p>
                            <p><strong>{experience.startDate} - {experience.endDate}</strong></p>
                            <p>{experience.desc}</p>
                        </div>
                    ))}
                </section>

                <section className="professionalII-projectsSection">
                    <h2>Projects</h2>
                    {projectsData.length > 0 && projectsData.map((project, index) => (
                        <div className="professionalII-projectItem" key={index}>
                            <h3>{project.projectTitle}</h3>
                            <p>{project.projectDesc}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
