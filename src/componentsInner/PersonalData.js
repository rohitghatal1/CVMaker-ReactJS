import React from 'react'
import './personal.css'

export default function PersonalData() {
  return (
    <div>
      <div className="personalInfoCollector">
        <h2>About Yourself</h2>
        <p>Fill your personal information</p>

        <div className="personalInformation">
            <div className="photoSection">
                <input type="file" />
                <label htmlFor="photo">Upload Photo</label>

            </div>
        </div>
      </div>
    </div>
  )
}
