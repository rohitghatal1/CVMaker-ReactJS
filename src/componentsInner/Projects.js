import React, { useState, useEffect } from 'react'
import './projects.css'

export default function Projects() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

  const [newProjects, setNewProjects] = useState({
    projectTitle: '',
    projectDesc: ''
  })

  const [projects, setProjects] = useState([]);

  const openAddProjectModal = () => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  }

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProjects({ ...newProjects, [name]: value });
  }

  const submitExperienceForm = (e) => {
    e.preventDefault();

    if (newProjects.projectTitle && newProjects.projectDesc) {
      const updatedProjects = [...projects, newProjects];

      setProjects(updatedProjects);

      localStorage.setItem('projectData', JSON.stringify(updatedProjects));
      setIsModalOpen(false);
      setIsAddButtonVisible(true);
      setNewProjects({ projectTitle: '', projectDesc: '' });
    }
  }

  // to retrieve all project data from local storage 
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projectData'));
    if (storedProjects) {
      setProjects(storedProjects);
    }
  }, [])

  const deleteProject = (indexToDelete) => {
    const updatedProjectData = projects.filter((_, index) => index !== indexToDelete);
    setProjects(updatedProjectData);
    localStorage.setItem('projectData', JSON.stringify(updatedProjectData));
  }

  return (
    <div>
      <div className="projectsComponent">
        <h2>Projects</h2>
        <p>List Out your Projects</p>

        <section className="projectsSection">
          <div className="addedProjects">
            <p>Current Projects</p>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div className="projectItem" key={index}>
                  <div className="projectTitleAndDeleteBtn">
                    <span>{project.projectTitle}</span>
                    <button className='deleteProjectBtn' onClick={() => deleteProject(index)}><i className='fas fa-trash'></i></button>
                  </div>
                  <p>{project.projectDesc}</p>
                </div>
              )
              )) :
              <p>No Projects added yet</p>}
          </div>

          <div className="newProjects">
            <p>New Projects</p>

            {isModalOpen && <div className="addNewProjectModal">
              <form className='projectForm' onSubmit={submitExperienceForm}>
                <label htmlFor="pTitle">Project Title</label>
                <input type="text" name="projectTitle" placeholder='Title of your project' value={newProjects.projectTitle} onChange={handleInputChange} />

                <label htmlFor="pDescription">Description</label>
                <input type="text" name='projectDesc' placeholder='tell what your project is about' value={newProjects.projectDesc} onChange={handleInputChange} />

                <div className="submitAndCloseBtns">
                  <button type='submit' className='submitBtn'><i class="fa-regular fa-paper-plane"></i> Submit</button>
                  <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                </div>
              </form>
            </div>}

            {isAddButtonVisible && <button className='addNewProjectbtn' onClick={openAddProjectModal}><i className='fas fa-plus'></i> Add Project</button>}
          </div>

          <div className="nextAndBackBtn">
            <button className='prevBtn'><i class="fa-solid fa-arrow-left"></i> Previous</button>
            <button className='nextBtn'>Next <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </section>
      </div>
    </div>
  )
}
