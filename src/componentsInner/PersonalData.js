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

          <div className="infoForm">
            <form>
              <div className="row">
                <div className="col">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" placeholder='First Name' />
                </div>
                <div className="col">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" placeholder='Last Name' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
