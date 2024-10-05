import React from 'react'
import './hobbies.css'

export default function Hobbies({goToPreviousStep, goToNextStep}) {
    const openAddHobbyModal = () => {

    }
    return (
        <div>
            <div className="hobbiesComponents">
                <h2>Hobbies</h2>
                <p>List out some of your Hobbies</p>
                <section className="hobbiesSection">
                    <div className="currentHobbies">
                        <p>Hobbies</p>
                    </div>
                    <div className="newHobbies">
                        <p>New Hobby</p>
                        <button className='addNewHobbybtn' onClick={openAddHobbyModal}><i className='fas fa-plus'></i> Add Hobby</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
