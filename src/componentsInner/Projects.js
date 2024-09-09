import React from 'react'
import './projects.css'

export default function Projects() {
    const openAddProjectModal = () => {
        
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

                <button className='addNewProjectbtn' onClick={openAddProjectModal}><i className='fas fa-plus'></i> Add Experience</button>
            </div>
        </section>
      </div>
    </div>
  )
}
