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

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    skillName: '',
    skillLevel: ''
  })

  const submitSkillForm = (e) =>{
    e.preventDefault();

    if(newSkill.skillName && newSkill.skillLevel){
      const updatedSkills = [...skills, newSkill];

      setSkills(updatedSkills);
      localStorage.setItem('skillData', JSON.stringify(updatedSkills));
      setIsModalOpen(false);
      setIsAddButtonVisible(true);
      setNewSkill({skillName: '', skillLevel: ''})
    }
  }

  useEffect(() => {
    const sotredSkills = JSON.parse(localStorage.getItem('skillData'));
    if(sotredSkills){
      setSkills(sotredSkills);
    }
  }, [])
  return (
    <div>
      <div className="skillsComponent">
        <h2>Skills</h2>
        <p>Provide Your Skill Details</p>
        <section className="skillSection">
          <div className="addedSkills">
            <p>Skills</p>

            {skills.length > 0 ? (
              skills.map((skill, index) =>(
                <div className="skillItem" key={index}>
                  <div className="skillAndDeleteBtn">
                    <p>{skill.skillName} <span>({skill.skillLevel})</span></p>
                  </div>
                </div>
              ))
            )
            :(
              <p>No skills added yet!! </p>
            )}
          </div>

          <div className="newSkills">
            <p>New Skills</p>

            {isModalOpen && <div className="addSkillModal">
              <form className='addSkillForm' onSubmit={submitSkillForm}>
                <div className="row">
                
                  <input type="text" placeholder='eg. HTML, CSS, JAVA, C ...' value={newSkill.skillName} onChange={(e) => setNewSkill({...newSkill, skillName: e.target.value})} />

                  <select name="skillLevel" value={newSkill.skillLevel} onChange={(e) => setNewSkill({...newSkill, skillLevel: e.target.value })}>
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
