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

  const [award, setAward] = useState([]);
  const [newAwards, setNewAwards] = useState({
    awardTitle: '',
    organization: '',
    location: '',
    receivedYear: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewAwards({...newAwards, [name]: value});
  }

  const submitAwardForm = (e) => {
    e.preventDefault();
    if(newAwards.awardTitle && newAwards.organization && newAwards.location && newAwards.receivedYear && newAwards.description){
      const updatedAwards = [...award, newAwards];

      setAward(updatedAwards);
      localStorage.setItem('awardData', JSON.stringify(updatedAwards));

      setIsModalOpen(false);
      setIsAddButtonVisible(true);

      setNewAwards({
        awardTitle: '',
        organization: '',
        location: '',
        receivedYear: '',
        description: ''
      })
    }
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
              <form onSubmit={submitAwardForm}>
                <label htmlFor="awardTitle">Title</label>
                <input type="text" placeholder='eg: Best employee award' name='awardTitle' value={newAwards.awardTitle} onChange={handleInputChange}/>

                <label htmlFor="organization">Organization</label>
                <input type="text" placeholder='organization' name='organization' value={newAwards.organization} onChange={handleInputChange} />

                <label htmlFor="location">Location</label>
                <input type="text" placeholder='location' name='location' value={newAwards.location} onChange={handleInputChange} />

                <label htmlFor="receivedYear">Received Year</label>
                <input type="text" placeholder='receivedYear' name='receivedYear' value={newAwards.receivedYear} onChange={handleInputChange}/>

                <label htmlFor="desc">Description</label>
                <textarea rows={5} placeholder="Describe about the award" name='description' value={newAwards.description} onChange={handleInputChange}></textarea>

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
