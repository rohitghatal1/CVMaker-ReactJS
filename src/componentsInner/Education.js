import React, { useState, useEffect } from 'react'
import './education.css'
import { Input, Form } from 'antd';

export default function Education({ goToPreviousStep, goToNextStep }) {
  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    degree: '',
    college: '',
    startDate: '',
    passDate: ''
  });
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    const storedEducation = JSON.parse(localStorage.getItem('educationData'));
    if (storedEducation) {
      setEducation(storedEducation)
    }
  }, []);

  const hanldeAddEducation = () => {
    setisModalOpen(true);
    setIsAddButtonVisible(false);
  }

  const deleteEducation = (indexToDelete) => {
    const updatedEducation = education.filter((_, index) => index !== indexToDelete);
    setEducation(updatedEducation);
    localStorage.setItem('educationData', JSON.stringify(updatedEducation));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newEducation.degree && newEducation.college && newEducation.startDate && newEducation.passDate) {
      const updatedEducation = [...education, newEducation];

      setEducation(updatedEducation);
      localStorage.setItem('educationData', JSON.stringify(updatedEducation));
      setisModalOpen(false);
      setIsAddButtonVisible(true);
      setNewEducation({ degree: '', college: '', startDate: '', passDate: '' });
    }
  };

  const handleCloseForm = () => {
    setisModalOpen(false);
    setIsAddButtonVisible(true);
  }
  return (
    <div>
      <div className="educationComponent">
        <h2>Education</h2>
        <p>Provide your Education Details here</p>

        <section className='educationSection'>
          <div className="currentEducationDetails">
            <p>Current Details:</p>
            {education?.length > 0 ? (
              education?.map((edu, index) => (
                <div className="educationItem" key={index}>
                  <div className="degree">
                    <span>{edu?.degree}</span>
                    <button className='deleteEducationBtn' onClick={() => deleteEducation(index)}><i className='fas fa-trash'></i></button>
                  </div>
                  <div className="collegeDetail">
                    <p><strong>College:</strong> {edu?.college}</p>
                    <p><strong>Start Date:</strong> {edu?.startDate}</p>
                    <p><strong>Passed Date:</strong> {edu?.passDate}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='noeducation'>No Education Details added yet.</p>
            )}
          </div>

          <div className="addNewEducationDetail">
            <p>New Details</p>

            {isModalOpen && (
              <div className="addEducationModal">
                <h4>Education Details</h4>
                <Form className="educationForm" onFinish={handleFormSubmit}>
                  <label htmlFor="Degree">Degree:</label>
                  <Input type="text" placeholder='eg. Bachelors, masters etc.' name='degree' value={newEducation.degree} onChange={handleInputChange} />

                  <label htmlFor="clz">College Name:</label>
                  <Input type="text" placeholder='Enter name of college' name='college' value={newEducation.college} onChange={handleInputChange} />

                  <label htmlFor="started">Started Date</label>
                  <Input type="date" name='startDate' value={newEducation?.startDate} onChange={handleInputChange} />

                  <label htmlFor="passedYear">Passed Date</label>
                  <Input type="date" name='passDate' value={newEducation?.passDate} onChange={handleInputChange} />

                  <div className="submitAndCloseBtns">
                    <button type='submit' className='submitBtn'><i class="fa-regular fa-paper-plane"></i> Submit</button>
                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                  </div>
                </Form>
              </div>
            )}
            {isAddButtonVisible && (<button className='addNewEducationbtn' onClick={hanldeAddEducation}><i className='fas fa-plus'></i> Add Education</button>)}
          </div>

          <div className="nextAndBackBtn">
            <button className='prevBtn' onClick={goToPreviousStep}><i class="fa-solid fa-arrow-left"></i> Previous</button>
            <button className='nextBtn' onClick={goToNextStep}>Next <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </section>
      </div>
    </div>
  )
}
