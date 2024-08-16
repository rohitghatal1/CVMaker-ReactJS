import React from 'react'
import personPhoto from '../../assets/personPhotos/rohit2.jpg'
import './creativeTemplate.css'

export default function CreativeTemplate() {
    return (
        <div>
            <div className="CVContainer">
                <section className="infoAndSkillsSection">
                    <div className="photo">
                        <img src={personPhoto} alt="photo" />
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
                                    <span><i class="fab fa-facebook"></i> https://www.facebook.com/</span>
                                    <span><i class="fab fa-instagram"></i> https://www.instagram.com/</span>
                                    <span><i className="fa-brands fa-linkedin-in"></i> https://www.linkedin.com/in/rohit-ghatal-7823111b4/</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
