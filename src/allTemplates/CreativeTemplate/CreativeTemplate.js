import React from 'react'
import personPhoto from '../../assets/personPhotos/rohit2.jpg'
import './creativeTemplate.css'

export default function CreativeTemplate() {
    return (
        <div>
            <div className="CVContainer">
                <section className="infoAndSkillsSection">
                    <div className="photo">
                        <img src={personPhoto} />
                    </div>
                    <div className="infoAndSkills">
                        <div className="personInfo">
                            <h2>Rohit Ghatal</h2>
                            <p>Web Developer</p>
                        </div>
                        <hr />
                        <div className="contactAndSkills">
                            <div className="skills">
                                <h2><i class="fa-solid fa-code-compare"></i> Skills</h2>
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
                                </div>
                            </div>
                            <div className="contactContainer">
                                <h2><i class="fa-solid fa-child-reaching"></i> Contact Me</h2>

                                <div className="contactItems">
                                    <span><i class="fa-solid fa-phone"></i> 9875468459</span>
                                    <span><i class="fa-regular fa-envelope"></i> rohitghatal@gmail.com</span>
                                    <span><i class="fa-solid fa-location-dot"></i> Thasikhel, Lalitpur</span>
                                    <span><i class="fab fa-facebook"></i> facebook.com/rohit.rohit.ghatal</span>
                                    <span><i class="fab fa-instagram"></i> instagram.com/_rohit.ghatal_/</span>
                                    <span><i className="fa-brands fa-linkedin-in"></i> linkedin.com/in/rohit-ghatal-7823111b4/</span>
                                    <span><i class="fa-brands fa-github"></i> github.com/rohitghatal1</span>
                                    <span><i class="fa-solid fa-link"></i> rohitghatal.com.np/</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>

                <section className="summarySection">
                    <div className="summaryContainer sectionContainer">
                        <div className="line"></div>
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
                    <hr style={{ width: '85%', margin: '20px auto 0', marginLeft: '6rem' }} />
                </section>

                <section class="education-section">
                    <div className="educationContainer sectionContainer">
                        <div class="line"></div>
                        <div class="content">
                            <div class="icon">
                                <i class="fas fa-graduation-cap"></i>
                                <h2>ACADEMY</h2>
                            </div>
                            <div class="text">
                                <h3>Vedas College , Lalitpur</h3>
                                <h2>BACHELORS IN COMPUTER APPLICATION</h2>
                                <p className='courseTime'>March, 2021 - Present</p>
                                <p>Bachelor of Computer Applications (BCA) graduate with a strong foundation in software development, web technologies,
                                    and database management. Proficient in programming languages such as Java, C#, .NET, PHP, HTML, CSS, Mobile Programming.</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{ width: '85%', margin: '20px auto 0', marginLeft: '6rem' }} />
                </section>

                <section class="projects-section">
                    <div class="section-header">
                        <div class="icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h2>Projects</h2>
                    </div>

                    <div class="project-item">
                        <div class="line"></div>
                        <div class="project-content">
                            <h3>E-Commerce Website</h3>
                            <p>This website is basically an E-Commerce Site for buying Laptops, Mobiles & Smart Watches named as "GadgetHub"</p>
                            <a href="https://rohighta1.github.io/E-CommerceCite-GadjetHub-/" target="_blank">https://rohighta1.github.io/E-CommerceCite-GadjetHub-/</a>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="line"></div>
                        <div class="project-content">
                            <h3>Online Hotel Booking</h3>
                            <p>This website helps users to easily book/cancel rooms of a hotel with accurate room availability information.</p>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="line"></div>
                        <div class="project-content">
                            <h3>Facebook Clone</h3>
                            <p>This is just an interface design of the "FACEBOOK" without backend and chatting function.</p>
                            <a href="https://rohighta1.github.io/facebookClone/" target="_blank">https://rohighta1.github.io/facebookClone/</a>
                        </div>
                    </div>

                    <div class="project-item">
                        <div class="line"></div>
                        <div class="project-content">
                            <h3>News App Using ReactJs</h3>
                            <p>This project is a news showing app named "NewsPortal" created using ReactJs.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
