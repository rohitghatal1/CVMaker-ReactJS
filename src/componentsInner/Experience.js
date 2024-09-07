import React from 'react'
import './experience.css'

export default function Experience() {
    return (
        <div>
            <div className="experienceComponent">
                <h2>Experience</h2>
                <p>Provide your Experience details here</p>

                <section className="experienceSection">
                    <div className="currentAddedExperience">
                        <p>Experience</p>
                    </div>

                    <div className="addNewExperiecne">
                        <p>New details</p>
                        <button className='addNewExperiencebtn'><i className='fas fa-plus'></i> Add Experience</button>
                    </div>

                    <div className="nextAndBackBtn">
                        <button className='prevBtn'><i class="fa-solid fa-arrow-left"></i> Previous</button>
                        <button className='nextBtn'>Next <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </section>
            </div>
        </div>
    )
}