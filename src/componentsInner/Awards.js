import React, { useEffect, useState } from 'react'
import './awards.css'
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Awards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

  const openAddAwardModal = () => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  }

  const handleCloseForm = () => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  }

  return (
    <div>
      <div className="awardsComponent">
        <h2>Awards</h2>
        <p>Describe about the awards you got!!!</p>

        <section className="awardsSection">
          <div className="addedAwards">

          </div>
          <div className="newAwards">
            <p>New Achievement</p>
            {isModalOpen && <div className="addNewAwardModal">
              <form action="">
                <label htmlFor="awardTitle">Title</label>
                <input type="text" />

                <label htmlFor="organization">Organization</label>
                <input type="text" />

                <label htmlFor="location">Location</label>
                <input type="text" />

                <label htmlFor="receivedYear">Received Year</label>
                <input type="text" />

                <label htmlFor="desc">Description</label>
                <textarea rows={5} name="" id=""></textarea>

                <div className="submitAndCloseBtns">
                  <button type='submit' className='submitBtn'><i className="fa-regular fa-paper-plane"></i> Submit</button>
                  <button className='closeBtn' onClick={handleCloseForm}>Close</button>
                </div>

              </form>
            </div>}

            {isAddButtonVisible && <button className='addNewAwardbtn' onClick={openAddAwardModal}><i className='fas fa-plus'></i> Add Award</button>}
          </div>
        </section>
      </div>
    </div>
  )
}
