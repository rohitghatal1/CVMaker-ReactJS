import React, {useState, useEffect} from 'react'
import './achievements.css'

export default function Achievements() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

    const openAddAchievementModal = () => {
        setIsModalOpen(true);
        setIsAddButtonVisible(false);
    }

    const handleCloseForm = () => {
        setIsModalOpen(false);
        setIsAddButtonVisible(true);
    }

    const [newAchievement, setNewAchievement] = useState({
        title: '',
        desc: ''
    })

    const [achievements, setAchievements] = useState([]);
    const submitAchievementForm = (e) => {
        e.preventDefault();

        if(newAchievement.title && newAchievement.desc){
            const updatedAchievements = [...achievements, newAchievement];

            setAchievements(updatedAchievements);
            localStorage.setItem('achievementData', JSON.stringify(updatedAchievements));
            setIsModalOpen(false);
            setIsAddButtonVisible(true);
            setNewAchievement({title:'', desc: ''});
        }
    }
    return (
        <div>
            <div className="achievementComponent">
                <h2>Achievements</h2>
                <p>Describe about what you have achieved yet</p>

                <section className="achievementSection">
                    <div className="addedAchievement">
                        <p>Achievements</p>
                    </div>

                    <div className="newAchievement">
                        <p>New Achievement</p>

                        {isModalOpen && <div className="achievementModal">
                            <form onSubmit={submitAchievementForm}>
                                <label htmlFor="title">Title</label>
                                <input type="text" placeholder='What did you achieve?' value={newAchievement.title} onChange={(e) => setNewAchievement({...newAchievement, title: e.target.value})} />

                                <label htmlFor="Description">Description</label>
                                <textarea rows={5} placeholder='Write a short deescription about your achievement!!' value={newAchievement.desc} onChange={(e) => setNewAchievement({...newAchievement, desc: e.target.value})}></textarea>

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'>Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </form>
                        </div>}

                        {isAddButtonVisible && <button className='addNewAchievementbtn' onClick={openAddAchievementModal}><i className='fas fa-plus'></i> Add Achievement</button>}
                    </div>
                </section>
            </div>
        </div>
    )
}
