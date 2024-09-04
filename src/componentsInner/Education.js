import React from 'react'
import './education.css'

export default function Education() {
  return (
    <div>
      <div className="educationComponent">
        <h2>Education</h2>
        <p>Provide your Education Details here</p>

        <section className='educationSection'>
            <div className="currentEducationDetails">

            </div>
            <div className="addNewEducationDetail">
                <button><i className='fas fa-plus'></i> Add Education</button>
            </div>
        </section>
      </div>
    </div>
  )
}
