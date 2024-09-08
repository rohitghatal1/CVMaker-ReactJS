import React, {useState, useEffect} from 'react'
import './experience.css'

export default function Experience() {

    const [newExperience, setNewExperience] = useState({
        jobTitle: '',
        organization: '',
        location: '',
        startDate: '',
        endDate: ''
    })

    // fetching data from local storage 
    useEffect(() => {
        const storedExperience = json.parse(localStorage.getItem('experienceData'));
        if(storedExperience){
            setExperience(storedExperience)
        }
    }, []);

    const [experience, setExperience] = useState([]);
    const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseForm = ()=> {
        setIsModalOpen(false);
        setIsAddButtonVisible(true);
    }

    const openAddExperienceModal = () => {
        setIsModalOpen(true);
        setIsAddButtonVisible(false);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewExperience = ({...newExperience, [name]: value})
    }
    const submitExperienceForm = (e) => {
       e.preventDefault();
       
       if(newExperience.jobTitle && newExperience.organization && newExperience.location && newExperience.startDate && newExperience.endDate){
        const updatedExperience = [...experience, newExperience];

        setExperience(updatedExperience);
        localStorage.setItem('experienceData', JSON.stringify(updatedExperience));
        isModalOpen(false);
        isAddButtonVisible(true);
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
                    </div>

                    <div className="addNewExperiecne">
                        <p>New details</p>

                        {isModalOpen && <div className="addExperienceModal">
                            <form className='addExperienceForm' onSubmit={submitExperienceForm}>
                                <label htmlFor="title">Job Title</label>
                                <input type="text" name='jobTitle' value={newExperience.jobTitle} />

                                <label htmlFor="org">Organization</label>
                                <input type="text" name='organization' value={newExperience.orgnaization} />

                                <label htmlFor="location">Location</label>
                                <input type="text" name='location' value={newExperience.location} />

                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" name='sDate' value={newExperience.startDate} />

                                <label htmlFor="endDate">End Date</label>
                                <input type="date" name='eDate' value={newExperience.endDate} />

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
