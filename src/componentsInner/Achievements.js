import React from 'react'
import './achievements.css'

export default function Achievements() {

    const openAddAchievementModal = () => {

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

                <div className="achievementModal">
                    <form>
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder='What did you achieve?' />

                        <label htmlFor="Description">Description</label>
                        <textarea rows={5} placeholder='Write a short deescription about your achievement!!'></textarea>
                    </form>
                </div>

                <button className='addNewAchievementbtn' onClick={openAddAchievementModal}><i className='fas fa-plus'></i> Add Achievement</button>
            </div>
        </section>
      </div>
    </div>
  )
}
