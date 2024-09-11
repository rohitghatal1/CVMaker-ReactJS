import React from 'react'
import './skills.css'

export default function Skills() {

  const openAddSkillModal = () => {

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

            <div className="addSkillModal">
              <form className='addSkillForm'>
                <div className="row">
                
                  <input type="text" placeholder='eg. HTML, CSS, JAVA, C ...' />
                  
                  <select name="skillLevel">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Experienced">Experienced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </form>
            </div>
            <button className='addNewSkillbtn' onClick={openAddSkillModal}><i className='fas fa-plus'></i> Add Skill</button>
          </div>
        </section>
      </div>
    </div>
  )
}
