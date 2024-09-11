import React from 'react'
import './skills.css'

export default function Skills() {

  const openAddSkillModal = () =>{

  }
  return (
    <div>
      <div className="skillsComponent">
        <h2>Skills</h2>
        <p>Provide Your Skill Details</p>
        <section className="skillSection">
          <div className="addedSkills">
            <p>Skills</p>
          </div>

          <div className="newSkills">
            <p>New Skills</p>

            <button className='addNewSkillbtn' onClick={openAddSkillModal}><i className='fas fa-plus'></i> Add Skill</button>
          </div>
        </section>
      </div>
    </div>
  )
}
