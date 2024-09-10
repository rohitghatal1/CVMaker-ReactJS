import React from 'react'
import './projects.css'

export default function Projects() {
  const openAddProjectModal = () => {

  }

  const handleCloseForm = () =>{
    
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

            <div className="addNewProjectModal">
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
            </div>

            <button className='addNewProjectbtn' onClick={openAddProjectModal}><i className='fas fa-plus'></i> Add Experience</button>
          </div>
        </section>
      </div>
    </div>
  )
}
