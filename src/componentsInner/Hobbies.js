import React from 'react'
import './hobbies.css'

export default function Hobbies({goToPreviousStep, goToNextStep}) {
    const openAddHobbyModal = () => {

    }

    const handleCloseForm = () => {
        
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
                        <div className="hobbyModal">
                            <form>
                                <label htmlFor="title">Hobby Name:</label>
                                <input type="text" name='hobbyName' placeholder='eg. Playing, Singing, Coding etc' />

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'><i class="fa-regular fa-paper-plane"></i> Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </form>
                        </div>
                        <button className='addNewHobbybtn' onClick={openAddHobbyModal}><i className='fas fa-plus'></i> Add Hobby</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
