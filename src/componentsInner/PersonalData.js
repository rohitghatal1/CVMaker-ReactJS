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

              <div className="fullWidthInput">
                <label htmlFor="designattion">Specialist on</label>
                <input type="text" placeholder='ex: Web Developer, Python, React Developer etc' />
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder='address' />
                </div>

                <div className="col">
                  <label htmlFor="city">City</label>
                  <input type="text" placeholder='city' />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder='email address'/>
                </div>

                <div className="col">
                  <label htmlFor="phone">Contact No.</label>
                  <input type="text" placeholder='contact number' />
                </div>
              </div>

              <div className="fullWidthInput">
                <label htmlFor="summary">Summary</label>
                <textarea></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
