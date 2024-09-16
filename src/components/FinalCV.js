import React from 'react'

export default function FinalCV({template:Template, personalData, educationData, experienceData, projectsData, skillsData, achievementData}) {
  return (
    <div>
      <div className="finalCVContainer">
        <h2>Here is you final CV</h2>

        <div className="finalCVSection">
            {React.createElement(Template, {
                personalData,
                educationData,
                experienceData,
                projectsData,
                skillsData,
                achievementData
            })}
        </div>
      </div>
    </div>
  )
}
