import React from 'react';
import personPhoto from '../../assets/personPhotos/rohit2.jpg';
import './creativeTemplate.css';

export default function CreativeTemplate() {
    return (
        <div>
            <div className="CVContainer">
                <section className="infoAndSkillsSection">
                    <div className="photo">
                        <img src={personPhoto} alt="Person" />
                    </div>
                    <div className="infoAndSkills">
                        <div className="personInfo">
                            <h2>Rohit Ghatal</h2>
                            <p>Web Developer</p>
                        </div>
                        <hr />
                        <div className="contactAndSkills">
                            <div className="skills">
                                <h2><i className="fa-solid fa-code-compare"></i> Skills</h2>
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
                                        <p>Javascript</p>
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

                                    <div className="skillItem">
                                        <p>React</p>
                                        <div className="skillbar"><div className="fill" style={{ width: '40%' }}></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="contactContainer">
                                <h2><i className="fa-solid fa-child-reaching"></i> Contact Me</h2>
                                <div className="contactItems">
                                    <span><i className="fa-solid fa-phone"></i> 9875468459</span>
                                    <span><i className="fa-regular fa-envelope"></i> rohitghatal@gmail.com</span>
                                    <span><i className="fa-solid fa-location-dot"></i> Thasikhel, Lalitpur</span>
                                    <span><i className="fab fa-facebook"></i> facebook.com/rohit.rohit.ghatal</span>
                                    <span><i className="fab fa-instagram"></i> instagram.com/_rohit.ghatal_/</span>
                                    <span><i className="fa-brands fa-linkedin-in"></i> linkedin.com/in/rohit-ghatal-7823111b4/</span>
                                    <span><i className="fa-brands fa-github"></i> github.com/rohitghatal1</span>
                                    <span><i className="fa-solid fa-link"></i> rohitghatal.com.np/</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>

                <section className="summarySection">
                    <div className="summaryContainer sectionContainer">
                        <div className="summaryContent">
                            <div className="icon">
                                <i className='fas fa-user'></i>
                                <h2>Summary</h2>
                            </div>
                            <div className="summaryDetails">
                                <p>
                                    A passionate Front-End & Back-End developer with a knack for designing user interfaces.
                                    With over 2 years of experience in web development.
                                </p>
                                <p>
                                    Beyond my professional life, I'm an avid tech enthusiast, which keeps me inspired and
                                    constantly seeking new ways to infuse creativity into my work. Whether it's through
                                    developing my own websites or exploring the latest trends in web development, I believe in
                                    continuous learning and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="education-section">
                    <div className="educationContainer sectionContainer">
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-graduation-cap"></i>
                                <h2>ACADEMY</h2>
                            </div>
                            <div className="text">
                                <h3>Vedas College , Lalitpur</h3>
                                <h2>BACHELORS IN COMPUTER APPLICATION</h2>
                                <p className='courseTime'>March, 2021 - Present</p>
                                <p>Bachelor of Computer Applications (BCA) graduate with a strong foundation in software development, web technologies,
                                    and database management. Proficient in programming languages such as Java, C#, .NET, PHP, HTML, CSS, Mobile Programming.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects-section">
                    <div className="section-header">
                        <div className="icon">
                            <i className="fas fa-rocket"></i>
                            <h2>Projects</h2>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="line"></div>
                        <div className="project-content">
                            <h3>E-Commerce Website</h3>
                            <p>This website is basically an E-Commerce Site for buying Laptops, Mobiles & Smart Watches named as "GadgetHub"</p>
                            <a href="https://rohighta1.github.io/E-CommerceCite-GadjetHub-/" target="_blank" rel="noopener noreferrer">https://rohighta1.github.io/E-CommerceCite-GadjetHub-/</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="line"></div>
                        <div className="project-content">
                            <h3>Online Hotel Booking</h3>
                            <p>This website helps users to easily book/cancel rooms of a hotel with accurate room availability information.</p>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="line"></div>
                        <div className="project-content">
                            <h3>Facebook Clone</h3>
                            <p>This is just an interface design of the "FACEBOOK" without backend and chatting function.</p>
                            <a href="https://rohighta1.github.io/facebookClone/" target="_blank" rel="noopener noreferrer">https://rohighta1.github.io/facebookClone/</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="line"></div>
                        <div className="project-content">
                            <h3>News App Using ReactJs</h3>
                            <p>This project is a news showing app named "NewsPortal" created using ReactJs.</p>
                        </div>
                    </div>
                </section>

                <section className="workExperience-section">
                    <div className="section-header">
                        <div className="icon">
                            <i className="fas fa-briefcase"></i>
                            <h2>Work Experience</h2>
                        </div>
                    </div>

                    <div className="work-item">
                        <div className="line"></div>
                        <div className="work-content">
                            <h3>Front-End Developer at Tech Solutions</h3>
                            <p><strong>January 2022 - Present</strong></p>
                            <p>Worked on creating user-friendly web pages and applications, implementing responsive designs, and optimizing website performance.</p>
                        </div>
                    </div>

                    <div className="work-item">
                        <div className="line"></div>
                        <div className="work-content">
                            <h3>Intern at Web Innovators</h3>
                            <p><strong>June 2021 - December 2021</strong></p>
                            <p>Assisted in developing and maintaining web applications, working closely with senior developers, and gaining hands-on experience in various web technologies.</p>
                        </div>
                    </div>
                </section>

                <section className="achievements-section">
                    <div className="section-header">
                        <div className="icon">
                            <i className="fas fa-trophy"></i>
                            <h2>Achievements</h2>
                        </div>
                    </div>

                    <div className="achievement-item">
                        <div className="line"></div>
                        <div className="achievement-content">
                            <h3>Winner of Web Development Hackathon</h3>
                            <p>Won first place in a national-level web development hackathon organized by XYZ Tech.</p>
                        </div>
                    </div>

                    <div className="achievement-item">
                        <div className="line"></div>
                        <div className="achievement-content">
                            <h3>Top Performer in Coding Challenge</h3>
                            <p>Achieved top rank in a global coding challenge hosted by ABC Coding Platform.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
