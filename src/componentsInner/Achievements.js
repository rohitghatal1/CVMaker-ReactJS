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

                <button className='addNewAchievementbtn' onClick={openAddAchievementModal}><i className='fas fa-plus'></i> Add Achievement</button>
            </div>
        </section>
      </div>
    </div>
  )
}
