import React, {useState, useEffect} from 'react'
import './skills.css'

export default function Skills() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

  const openAddSkillModal = () => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  }

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
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

            {isModalOpen && <div className="addSkillModal">
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

                <div className="submitAndCloseBtns">
                  <button type='submit' className='submitBtn'>Submit</button>
                  <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                </div>

              </form>
            </div>}

            {isAddButtonVisible && <button className='addNewSkillbtn' onClick={openAddSkillModal}><i className='fas fa-plus'></i> Add Skill</button>}
          </div>
        </section>
      </div>
    </div>
  )
}
