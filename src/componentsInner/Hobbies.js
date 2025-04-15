import React, { useState, useEffect } from 'react'
import './hobbies.css'

export default function Hobbies({ goToPreviousStep, goToNextStep }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
    const openAddHobbyModal = () => {
        setIsModalOpen(true);
        setIsAddButtonVisible(false);
    }

    const handleCloseForm = () => {
        setIsModalOpen(false);
        setIsAddButtonVisible(true);
    }

    const [hobbies, setHobbies] = useState([]);
    const [newHobbies, setNewHobbies] = useState({ hobbieName: '' })

    const submitHobbyForm = (e) => {
        e.preventDefault();
        if (newHobbies.hobbieName) {
            const updatedHobbies = [...hobbies, newHobbies];

            setHobbies(updatedHobbies);
            localStorage.setItem('hobbiesData', JSON.stringify(updatedHobbies));

            setIsModalOpen(false);
            setIsAddButtonVisible(true);
            setNewHobbies({ hobbieName: '' });
        }
    }

    useEffect(() => {
        const storedHobbyData = JSON.parse(localStorage.getItem('hobbiesData'));
        if (storedHobbyData) {
            setHobbies(storedHobbyData)
        }
    }, [])

    const deleteHobbie = (indexToDelete) => {
        const updatedHobbyData = hobbies.filter((_, index) => index !== indexToDelete);

        setHobbies(updatedHobbyData);
        localStorage.setItem('hobbiesData', JSON.stringify(updatedHobbyData))
    }

    return (

        <div>
            <div className="hobbiesComponents">
                <h2>Hobbies</h2>
                <p>List out some of your Hobbies</p>
                <section className="hobbiesSection">
                    <div className="currentHobbies">
                        <p>Hobbies</p>
                        <div className="hobbiesContainer">
                            {hobbies.length > 0 ? (
                                hobbies.map((hobby, index) => (
                                    <div className="hobbieItem" key={index}>
                                        <p>{hobby.hobbieName}</p>
                                        <button className='deleteHobbyBtn' onClick={() => deleteHobbie(index)}><i className='fas fa-trash'></i></button>
                                    </div>
                                ))
                            )
                                : (<p>No Hobbies Added yet!!! </p>)}
                        </div>
                    </div>
                    <div className="newHobbies">
                        <p>New Hobby</p>

                        {isModalOpen && <div className="hobbyModal">
                            <form onSubmit={submitHobbyForm}>
                                <label htmlFor="title">Hobby Name:</label>
                                <input type="text" name='hobbyName' placeholder='eg. Playing, Singing, Coding etc' value={newHobbies.hobbieName} onChange={(e) => setNewHobbies({ ...newHobbies, hobbieName: e.target.value })} />

                                <div className="submitAndCloseBtns">
                                    <button type='submit' className='submitBtn'><i class="fa-regular fa-paper-plane submitIcon"></i> Submit</button>
                                    <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                                </div>
                            </form>
                        </div>}

                        {isAddButtonVisible && <button className='addNewHobbybtn' onClick={openAddHobbyModal}><i className='fas fa-plus'></i> Add Hobby</button>}
                    </div>

                    <div className="nextAndBackBtn">
                        <button className='prevBtn' onClick={goToPreviousStep}><i class="fa-solid fa-arrow-left"></i> Previous</button>
                        <button className='nextBtn' onClick={goToNextStep}>Next <i class="fa-solid fa-arrow-right"></i></button>
                    </div>

                </section>
            </div>
        </div>
    )
}
