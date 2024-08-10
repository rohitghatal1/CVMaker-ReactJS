import React from 'react'
import './home.css'

export default function HomeTab() {
    return (
        <div>
            <div className="banner">
                <div className="bannerInfo">
                    <h2>BUILD YOUR PROFESSIONAL CV/RESUME</h2>
                    <h3>IN JUST FEW MINUTS</h3>
                    <p><i class="fas fa-clock "></i> Time saving. <i class="fas fa-check-circle"></i> Easy to Use. <i class="fas fa-briefcase"></i> Professional</p>
                    <button className='getStartedbtn'>Get Started !</button>
                </div>
            </div>
            <section className="stepsInfo">
                <div className="stepsContainer">
                    <h2>Create your perfect Resume in just few easy steps</h2>
                    <p>Create your job-worthy Resume without making any extra efforts that</p>
                    <p>gets you <span>HIRED</span> faster</p>

                    <div className="stepsDesc">
                        <div className="step">
                            <div className="logo">
                                <i class="fa-regular fa-copy"></i>
                            </div>
                            <div className="aboutStep">
                                <h3>Choose a template</h3>
                                <p>Choose a template of your choice from the list of templates</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="logo">
                                <i class="fa-regular fa-file-lines"></i>
                            </div>
                            <div className="aboutStep">
                                <h3>Fill your Information</h3>
                                <p>Provide your information for Resume</p>
                            </div>
                        </div>
                        
                        <div className="step">
                            <div className="logo">
                                <i class="fa-solid fa-download"></i>
                            </div>
                            <div className="aboutStep">
                                <h3>Quick Download</h3>
                                <p>Download instantly as the CV process completes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}