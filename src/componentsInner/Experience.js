import React, { useState, useEffect } from 'react'
import './experience.css'
import { Form, Input } from 'antd';

export default function Experience({ goToPreviousStep, goToNextStep }) {

    // use state for saving and settin new exp 
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

    const deleteExp = (expToDelete) => {
        const updatdExperienceData = experience.filter((_, index) => index !== expToDelete);
        setExperience(updatdExperienceData);
        localStorage.setItem('experienceData', JSON.stringify(updatdExperienceData))
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
                                        <button className='deleteExperienceBtn' onClick={() => deleteExp(index)}><i className='fas fa-trash'></i></button>
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
                            <Form className='addExperienceForm' onFinish={submitExperienceForm}>
                                <label htmlFor="title">Job Title</label>
                                <Input type="text" name='jobTitle' value={newExperience.jobTitle} onChange={handleInputChange} />

                                <label htmlFor="org">Organization</label>
                                <Input type="text" name='organization' value={newExperience.orgnaization} onChange={handleInputChange} />

                                <label htmlFor="location">Location</label>
                                <Input type="text" name='location' value={newExperience.location} onChange={handleInputChange} />

                                <label htmlFor="startDate">Start Date</label>
                                <Input type="date" name='startDate' value={newExperience.startDate} onChange={handleInputChange} />

                                <label htmlFor="endDate">End Date</label>
                                <Input type="date" name='endDate' value={newExperience.endDate} onChange={handleInputChange} />

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'><i class="fa-regular fa-paper-plane"></i> Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </Form>
                        </div>
                        }

                        {isAddButtonVisible && <button className='addNewExperiencebtn' onClick={openAddExperienceModal}><i className='fas fa-plus'></i> Add Experience</button>}
                    </div>

                    <div className="nextAndBackBtn">
                        <button className='prevBtn' onClick={goToPreviousStep}><i class="fa-solid fa-arrow-left"></i> Previous</button>
                        <button className='nextBtn' onClick={goToNextStep}>Next <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </section>
            </div>
        </div>
    )
}
