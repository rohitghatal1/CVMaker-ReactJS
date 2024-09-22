import React from 'react'
import './awards.css'

export default function Awards() {

  const openAddAwardModal = () => {

  }

  const handleCloseForm = () => {
    
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
            <div className="addNewAwardModal">
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
            </div>
            <button className='addNewAwardbtn' onClick={openAddAwardModal}><i className='fas fa-plus'></i> Add Award</button>
          </div>
        </section>
      </div>
    </div>
  )
}
