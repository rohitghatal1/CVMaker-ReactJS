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

                        <div className="addExperienceModal">
                            <form className='addExperienceForm'>
                                <label htmlFor="title">Job Title</label>
                                <input type="text" name='jobTitle' />

                                <label htmlFor="org">Organization</label>
                                <input type="text" name='organization' />

                                <label htmlFor="location">Location</label>
                                <input type="text" name='location' />

                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" name='sDate' />

                                <label htmlFor="endDate">End Date</label>
                                <input type="date" name='eDate' />

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'>Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </form>
                        </div>
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
