import React,{useState, useEffect} from 'react'
import './education.css'

export default function Education() {
  const [education, setEduacation] = useState([]);
  const [newEducation, setNewEducation] = useState();
  const [isModalOpen, setisModalOpen] = useState(false);

  const hanldeAddEducation = ()=> {
    setisModalOpen(true);
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
                    <h2>Education Details</h2>
                    <form className="educationForm">
                      <label htmlFor="Degree">Degree:</label>
                      <input type="text" placeholder='eg. Bachelors, masters etc.' />

                      <label htmlFor="clz">College Name:</label>
                      <input type="text" placeholder='Enter name of college' />

                      <label htmlFor="started">Started Date</label>
                      <input type="date" />
                      
                      <label htmlFor="passedYear">Passed Date</label>
                      <input type="date" />
                    </form>
                  </div>
                )}
                <button className='addNewEducationbtn' onClick={hanldeAddEducation}><i className='fas fa-plus'></i> Add Education</button>
            </div>
        </section>
      </div>
    </div>
  )
}
