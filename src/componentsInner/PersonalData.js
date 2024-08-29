import React from 'react'
import './personal.css'
import personPhoto from '../assets/personPhotos/rohit2.jpg'

export default function PersonalData() {
  return (
    <div>
      <div className="personalInfoCollector">
        <h2>About Yourself</h2>
        <p>Fill your personal information</p>

        <div className="personalInformation">
          <div className="photoSection">
            <figure className='personPhoto'>
              <img src={personPhoto} alt="photo" />
            </figure>

            <div className="uploadDeleteBtn">
              <span className='uploadbtn'><i class="fa-solid fa-pencil"></i> Upload Photo</span>
              <span className='deletebtn'><i class="fa-regular fa-trash-can"></i> Delete Photo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
