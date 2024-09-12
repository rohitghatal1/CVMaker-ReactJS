import React, { useState, useEffect } from 'react'
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

        if (newAchievement.title && newAchievement.desc) {
            const updatedAchievements = [...achievements, newAchievement];

            setAchievements(updatedAchievements);
            localStorage.setItem('achievementData', JSON.stringify(updatedAchievements));
            setIsModalOpen(false);
            setIsAddButtonVisible(true);
            setNewAchievement({ title: '', desc: '' });
        }
    }

    useEffect(() => {
        const storedAchievements = JSON.parse(localStorage.getItem('achievementData'))
        if (storedAchievements) {
            setAchievements(storedAchievements);
        }
    }, [])

    const deleteAchievement = (indexToDelete) => {
        const updatedAchievementData = achievements.filter((_, index) => index !== indexToDelete)

        setAchievements(updatedAchievementData);
        localStorage.setItem('achievementData', JSON.stringify(updatedAchievementData));
    }

    return (
        <div>
            <div className="achievementComponent">
                <h2>Achievements</h2>
                <p>Describe about what you have achieved yet</p>

                <section className="achievementSection">
                    <div className="addedAchievement">
                        <p>Achievements</p>
                        <div className="achievementsContainer">
                            {achievements.length > 0 ? (
                                achievements.map((achievement, index) => (
                                    <div className="achievementItem" key={index}>
                                        <div className="titleAndDeleteBtn">
                                            <span>{achievement.title}</span>
                                            <button className='deleteAchievementBtn' onClick={() => deleteAchievement(index)}><i className='fas fa-trash'></i></button>
                                        </div>
                                        <p>{achievement.desc}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No achievements added yet !!</p>
                            )}
                        </div>
                    </div>

                    <div className="newAchievement">
                        <p>New Achievement</p>

                        {isModalOpen && <div className="achievementModal">
                            <form onSubmit={submitAchievementForm}>
                                <label htmlFor="title">Title</label>
                                <input type="text" placeholder='What did you achieve?' value={newAchievement.title} onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })} />

                                <label htmlFor="Description">Description</label>
                                <textarea rows={5} placeholder='Write a short deescription about your achievement!!' value={newAchievement.desc} onChange={(e) => setNewAchievement({ ...newAchievement, desc: e.target.value })}></textarea>

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'>Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </form>
                        </div>}

                        {isAddButtonVisible && <button className='addNewAchievementbtn' onClick={openAddAchievementModal}><i className='fas fa-plus'></i> Add Achievement</button>}
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
