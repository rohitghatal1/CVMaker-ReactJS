import React from 'react'

export default function FinalCV({template:Template, storedPersonalData, storedSocialData, storedEducationData, storedExperienceData, storedProjectsData, storedSkillsData, storedAchievementData}) {
  return (
    <div>
      <div className="finalCVContainer">
        <h2>Here is you final CV</h2>

        <div className="finalCVSection">
            {React.createElement(Template, {
              storedPersonalData, 
              storedSocialData, 
              storedEducationData, 
              storedExperienceData, 
              storedProjectsData, 
              storedSkillsData, 
              storedAchievementData
            })}
        </div>
      </div>
    </div>
  )
}
