import React from 'react';
import './professionalTemplate.css';

export default function ProfessionalTemplate() {
    // Fetch data from localStorage
    const storedPersonalData = localStorage.getItem('personalInfo');
    const personalData = storedPersonalData ? JSON.parse(storedPersonalData) : [];

    const storedSocialLinks = localStorage.getItem('socialLinks');
    const socialLinks = storedSocialLinks ? JSON.parse(storedSocialLinks) : [];

    const storedSkillData = localStorage.getItem('skillData');
    const skillData = storedSkillData ? JSON.parse(storedSkillData) : [];

    const storedAchievementData = localStorage.getItem('achievementData');
    const achievementData = storedAchievementData ? JSON.parse(storedAchievementData) : [];

    const storedEducationData = localStorage.getItem('educationData');
    const educationData = storedEducationData ? JSON.parse(storedEducationData) : [];

    const storedProjectsData = localStorage.getItem('projectData');
    const projectsData = storedProjectsData ? JSON.parse(storedProjectsData) : [];

    const storedExperienceData = localStorage.getItem('experienceData');
    const experienceData = storedExperienceData ? JSON.parse(storedExperienceData) : [];

    return (
        <div className="container professionalTemplate">
            <aside className="sidebar">
                <div className="personal-info">
                    <h2>Personal</h2>
                    <hr />
                    {personalData.length > 0 && personalData.map((personal, index) => (
                        <div key={index}>
                            <p><strong>Name</strong><br /><span>{personal.fName} {personal.lName}</span></p>
                            <p><strong>Address</strong><br /><span>{personal.PAddress}, {personal.city}</span></p>
                            <p><strong>Phone number</strong><br /><span>{personal.contactNo}</span></p>
                            <p><strong>Email</strong><br /><span>{personal.email}</span></p>
                            {socialLinks.length > 0 && socialLinks.map((social, index) => (
                                <p key={index}><strong>{social.platform}</strong><br /><span>{social.url}</span></p>
                            ))}
                        </div>
                    ))}
                </div>

                {achievementData.length > 0 && (
                    <div className="achievementsItem">
                        <h3><i className="fa-solid fa-star"></i> ACHIEVEMENTS</h3>
                        <hr />
                        {achievementData.map((achievement, index) => (
                            <div key={index}>
                                <strong className='achievementTitle'>{achievement.title}</strong><br />
                                <p className='achievementDesc'>{achievement.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </aside>

            <main className="main-content">
                {personalData.length > 0 && (
                    <div>
                        <h1>{personalData[0].fName} {personalData[0].lName}</h1>
                        <hr />
                        <p className="summary">
                            {personalData[0].summary}
                        </p>
                    </div>
                )}

                <section className="education">
                    <h2>Education and Qualifications</h2>
                    <hr />
                    {educationData.length > 0 && educationData.map((education, index) => (
                        <div className="education-item" key={index}>
                            <h3>{education.degree}</h3>
                            <p><strong>{education.institution}</strong><br />{education.startDate} to {education.passDate}</p>
                            <p>{education.description}</p>
                        </div>
                    ))}
                </section>

                {projectsData.length > 0 && (
                    <section className="projectsContainer">
                        <div className="projectHeader">
                            <div className="iconAndHeading">
                                <i className="fas fa-rocket"></i>
                                <h2>Projects</h2>
                            </div>
                        </div>
                        {projectsData.map((project, index) => (
                            <div className="project-item" key={index}>
                                <div className="line"></div>
                                <div className="project-content">
                                    <h3>{project.projectTitle}</h3>
                                    <p>{project.projectDesc}</p>
                                </div>
                            </div>
                        ))}
                    </section>
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


                <section className="skills">
                    <h2>Skills</h2>
                    <hr />
                    {skillData.length > 0 && skillData.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <p>{skill.skillName} - {skill.skillLevel}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
