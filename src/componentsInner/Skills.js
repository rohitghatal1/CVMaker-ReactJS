import React, { useState, useEffect } from 'react'
import './skills.css'
import { Form, Input, Select } from 'antd';
const { Option } = Select;

export default function Skills({ goToPreviousStep, goToNextStep }) {

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

  const submitSkillForm = (e) => {
    e.preventDefault();

    if (newSkill.skillName && newSkill.skillLevel) {
      const updatedSkills = [...skills, newSkill];

      setSkills(updatedSkills);
      localStorage.setItem('skillData', JSON.stringify(updatedSkills));
      setIsModalOpen(false);
      setIsAddButtonVisible(true);
      setNewSkill({ skillName: '', skillLevel: '' })
    }
  }

  useEffect(() => {
    const sotredSkills = JSON.parse(localStorage.getItem('skillData'));
    if (sotredSkills) {
      setSkills(sotredSkills);
    }
  }, [])

  const deleteSkill = (indexToDelete) => {
    const updatedSkillData = skills.filter((_, index) => index !== indexToDelete);

    setSkills(updatedSkillData);
    localStorage.setItem('skillData', JSON.stringify(updatedSkillData));
  }
  return (
    <div>
      <div className="skillsComponent">
        <h2>Skills</h2>
        <p>Provide Your Skill Details</p>
        <section className="skillSection">
          <div className="addedSkills">
            <p>Skills</p>

            <div className="skillsContainer">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <div className="skillItem" key={index}>
                    <div className="skillAndDeleteBtn">
                      <p>{skill.skillName} <br /><span>{skill.skillLevel}</span></p>
                    </div>
                    <button className='deleteSkillBtn' onClick={() => deleteSkill(index)}><i className='fas fa-trash'></i></button>
                  </div>
                ))
              )
                : (
                  <p>No skills added yet!! </p>
                )}
            </div>
          </div>

          <div className="newSkills">
            <p>New Skills</p>

            {isModalOpen && <div className="addSkillModal">
              <Form className='addSkillForm' onFinish={submitSkillForm}>
                <div className="row">

                  <Input type="text" placeholder='eg. HTML, CSS, JAVA, C ...' value={newSkill.skillName} onChange={(e) => setNewSkill({ ...newSkill, skillName: e.target.value })} />

                  <Select showSearch allowClear name="skillLevel" value={newSkill.skillLevel} onChange={(e) => setNewSkill({ ...newSkill, skillLevel: e.target.value })}>
                    <Option value="Beginner">Beginner</Option>
                    <Option value="Intermediate">Intermediate</Option>
                    <Option value="Experienced">Experienced</Option>
                    <Option value="Expert">Expert</Option>
                  </Select>
                </div>

                <div className="submitAndCloseBtns">
                  <button type='submit' className='submitBtn'><i className="fa-regular fa-paper-plane"></i> Submit</button>
                  <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                </div>

              </Form>
            </div>}

            {isAddButtonVisible && <button className='addNewSkillbtn' onClick={openAddSkillModal}><i className='fas fa-plus'></i> Add Skill</button>}
          </div>

          <div className="nextAndBackBtn">
            <button className='prevBtn' onClick={goToPreviousStep}><i className="fa-solid fa-arrow-left"></i> Previous</button>
            <button className='nextBtn' onClick={goToNextStep}>Next <i className="fa-solid fa-arrow-right"></i></button>
          </div>

        </section>
      </div>
    </div>
  )
}
