import React, {useState, useEffect} from 'react'
import './projects.css'

export default function Projects() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);


  const openAddProjectModal = () => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  }

  const handleCloseForm = () =>{
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  }
  return (
    <div>
      <div className="projectsComponent">
        <h2>Projects</h2>
        <p>List Out your Projects</p>

        <section className="projectsSection">
          <div className="addedProjects">
            <p>Current Projects</p>
          </div>

          <div className="newProjects">
            <p>New Projects</p>

            {isModalOpen && <div className="addNewProjectModal">
              <form className='projectForm'>
                <label htmlFor="pTitle">Project Title</label>
                <input type="text" name="projectTitle" placeholder='Title of your project' />

                <label htmlFor="pDescription">Description</label>
                <input type="text" name='projectDesc' placeholder='tell what your project is about' />

                <div className="submitAndCloseBtns">
                  <button type='submit' className='submitBtn'>Submit</button>
                  <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                </div>
              </form>
            </div>}

            {isAddButtonVisible && <button className='addNewProjectbtn' onClick={openAddProjectModal}><i className='fas fa-plus'></i> Add Experience</button>}
          </div>
        </section>
      </div>
    </div>
  )
}
