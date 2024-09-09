import React, { useState, useEffect } from 'react'
import './experience.css'

export default function Experience() {

    const [newExperience, setNewExperience] = useState({
        jobTitle: '',
        organization: '',
        location: '',
        startDate: '',
        endDate: ''
    })


    const [experience, setExperience] = useState([]);

    // fetching data from local storage 
    useEffect(() => {
        const storedExperience = JSON.parse(localStorage.getItem('experienceData'));
        if (storedExperience) {
            setExperience(storedExperience)
        }
    }, []);

    const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseForm = () => {
        setIsModalOpen(false);
        setIsAddButtonVisible(true);
    }

    const openAddExperienceModal = () => {
        setIsModalOpen(true);
        setIsAddButtonVisible(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExperience({ ...newExperience, [name]: value })
    }
    const submitExperienceForm = (e) => {
        e.preventDefault();

        if (newExperience.jobTitle && newExperience.organization && newExperience.location && newExperience.startDate && newExperience.endDate) {
            const updatedExperience = [...experience, newExperience];

            setExperience(updatedExperience);
            localStorage.setItem('experienceData', JSON.stringify(updatedExperience));
            setIsModalOpen(false);
            setIsAddButtonVisible(true);
            setNewExperience({
                jobTitle: '', organization: '', location: '', startDate: '', endDate: ''
            })
        }
    }
    return (
        <div>
            <div className="experienceComponent">
                <h2>Experience</h2>
                <p>Provide your Experience details here</p>

                <section className="experienceSection">
                    <div className="currentAddedExperience">
                        <p>Experience</p>

                        {experience.length > 0 ? (
                            experience.map((exp, index) => (
                                <div className="experienceItem" key={index}>
                                    <div className="title">
                                        <span>{exp.jobTitle}</span>
                                        <button><i className='fas fa-trash'></i></button>
                                    </div>
                                    <div className="jobDetails">
                                        <div className="row">
                                            <div className="col"><p><strong>Company:</strong>{exp.organization}</p></div>
                                            <div className="col"><p><strong>Location:</strong>{exp.location}</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col"><p><strong>Start Date:</strong>{exp.startDate}</p></div>
                                            <div className="col"><p><strong>End Date:</strong>{exp.endDate}</p></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No experience added yet!!</p>
                        )}
                    </div>

                    <div className="addNewExperiecne">
                        <p>New details</p>

                        {isModalOpen && <div className="addExperienceModal">
                            <form className='addExperienceForm' onSubmit={submitExperienceForm}>
                                <label htmlFor="title">Job Title</label>
                                <input type="text" name='jobTitle' value={newExperience.jobTitle} onChange={handleInputChange} />

                                <label htmlFor="org">Organization</label>
                                <input type="text" name='organization' value={newExperience.orgnaization} onChange={handleInputChange} />

                                <label htmlFor="location">Location</label>
                                <input type="text" name='location' value={newExperience.location} onChange={handleInputChange} />

                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" name='startDate' value={newExperience.startDate} onChange={handleInputChange} />

                                <label htmlFor="endDate">End Date</label>
                                <input type="date" name='endDate' value={newExperience.endDate} onChange={handleInputChange} />

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'>Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </form>
                        </div>
                        }

                        {isAddButtonVisible && <button className='addNewExperiencebtn' onClick={openAddExperienceModal}><i className='fas fa-plus'></i> Add Experience</button>}
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
