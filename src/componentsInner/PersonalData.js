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

            </div>
        </div>
      </div>
    </div>
  )
}
