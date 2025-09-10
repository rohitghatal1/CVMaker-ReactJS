import React from 'react';
import './professionalTemplate.css';

export default function ProfessionalTemplate() {
    const storedPersonalData = localStorage.getItem('personalInfo');
    const personalData = storedPersonalData ? JSON.parse(storedPersonalData) : [];

    const storedSocialLinks = localStorage.getItem('socialLinks');
    const socialLinks = storedSocialLinks ? JSON.parse(storedSocialLinks) : [];

    const storedSkillData = localStorage.getItem('skillData');
    const skillData = storedSkillData ? JSON.parse(storedSkillData) : [];

    const storedAchievementData = localStorage.getItem('achievementData');
    const achievementData = storedAchievementData ? JSON.parse(storedAchievementData) : [];

    const storedAwardsData = localStorage.getItem('awardData');
    const awardData = storedAwardsData ? JSON.parse(storedAwardsData) : [];

    const storedEducationData = localStorage.getItem('educationData');
    const educationData = storedEducationData ? JSON.parse(storedEducationData) : [];

    const storedProjectsData = localStorage.getItem('projectData');
    const projectsData = storedProjectsData ? JSON.parse(storedProjectsData) : [];

    const storedExperienceData = localStorage.getItem('experienceData');
    const experienceData = storedExperienceData ? JSON.parse(storedExperienceData) : [];

    return (
        <div className="container professionalTemplate">
            <aside className="sidebar">
                {personalData.length > 0 && (
                    <div className="personal-info">
                        <h2>Personal</h2>
                        <hr />
                        {personalData.map((personal, index) => (
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
                )}

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

                {/* Awards */}
                {awardData.length > 0 && (
                    <div className="awardData">
                        <h3><i className="fa-solid fa-award"></i> AWARDS</h3>
                        <hr />
                        {awardData.map((award, index) => (
                            <div className="awardItem" key={index}>
                                <h4 className='awardTitle'>{award.awardTitle}({award.receivedYear})</h4>
                                <p><strong>{award.organization}, {award.location}</strong></p>
                                <p>{award.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </aside>

            <main className="main-content">
                {personalData.length > 0 && (
                    <div className='userName'>
                        <h1>{personalData[0].fName} {personalData[0].lName}</h1>
                        <hr />
                        <p className="summary">
                            {personalData[0].summary}
                        </p>
                    </div>
                )}

                {educationData.length > 0 && (
                    <section className="education">
                        <h3><i className="fa-solid fa-graduation-cap"></i> EDUCATION</h3>
                        <hr />
                        {educationData.map((education, index) => (
                            <div className="education-item" key={index}>
                                <h3>{education.degree}</h3>
                                <div className="educationDetail">
                                    <p>{education.college}</p>
                                    <p>{education.startDate} to {education.passDate}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {projectsData.length > 0 && (
                    <section className="projectData">
                        <div className="project">
                            <h3><i className="fas fa-rocket"></i> Projects</h3>
                            <hr />
                        </div>
                        {projectsData.map((project, index) => (
                            <div className="projectItem" key={index}>
                                <div className="project-content">
                                    <h3>{project.projectTitle}</h3>
                                    <p>{project.projectDesc}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {experienceData.length > 0 && (
                    <section className="experienceData">
                        <h3><i className="fa-solid fa-layer-group"></i> WORK EXPERIENCE</h3>
                        <hr />
                        {experienceData.map((experience, index) => (
                            <div className='experienceItem' key={index}>
                                <h4>{experience.jobTitle}</h4>
                                <p>{experience.organization}, {experience.location}</p>
                                <p>{experience.startDate} to {experience.endDate}</p>
                            </div>
                        ))}
                    </section>
                )}

                {skillData.length > 0 && (
                    <section className="skills">
                        <h3><i class="fa-solid fa-code-compare"></i> Skills</h3>
                        <hr />
                        <div className="skillsContainer">
                            {skillData.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <p><i class="fa-solid fa-arrow-right" /> {skill.skillName} - {skill.skillLevel}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
