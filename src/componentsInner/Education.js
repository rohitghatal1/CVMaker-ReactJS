import React,{useState, useEffect} from 'react'
import './education.css'

export default function Education() {
  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    degree: '',
    college: '',
    startDate: '',
    passDate: ''
  });
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);

  const hanldeAddEducation = ()=> {
    setisModalOpen(true);
    setIsAddButtonVisible(false);
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewEducation({...newEducation, [name]: value});
  }
  const handleFormSubmit = () => {

  }

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
            </div>

            <div className="addNewEducationDetail">
                <p>New Details</p>

                {isModalOpen && (
                  <div className="addEducationModal">
                    <h4>Education Details</h4>
                    <form className="educationForm">
                      <label htmlFor="Degree">Degree:</label>
                      <input type="text" placeholder='eg. Bachelors, masters etc.' name='degree' value={newEducation.degree} onChange={handleInputChange}/>

                      <label htmlFor="clz">College Name:</label>
                      <input type="text" placeholder='Enter name of college' name='college' value={newEducation.college} onChange={handleInputChange} />

                      <label htmlFor="started">Started Date</label>
                      <input type="date" name='startDate' value={newEducation.startDate} onChange={handleInputChange}/>

                      <label htmlFor="passedYear">Passed Date</label>
                      <input type="date" name='passDate' value={newEducation.passDate} onChange={handleInputChange}/>

                      <div className="submitAndCloseBtns">
                        <button className='submitBtn' onClick={handleFormSubmit}>Submit</button>
                        <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                      </div>
                    </form>
                  </div>
                )}
                {isAddButtonVisible && (<button className='addNewEducationbtn' onClick={hanldeAddEducation}><i className='fas fa-plus'></i> Add Education</button>)}
            </div>
        </section>
      </div>
    </div>
  )
}
