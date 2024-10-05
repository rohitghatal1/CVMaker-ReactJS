import React from 'react'
import './hobbies.css'

export default function Hobbies() {
    const openAddHobbyModal = () => {

    }
    return (
        <div>
            <div className="hobbiesComponents">
                <h2>Experience</h2>
                <p>Provide your Experience details here</p>
                <section className="hobbiesSection">
                    <div className="currentHobbies">
                        <p>Hobbies</p>
                    </div>
                    <div className="newHobbies">
                        <p>New Hobby</p>
                        <button className='addNewHobbybtn' onClick={openAddHobbyModal}><i className='fas fa-plus'></i> Add Experience</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
