import React, { useEffect, useState } from 'react'
import './awards.css'
import { Button, Form, Input } from 'antd';

export default function Awards({ goToPreviousStep, goToNextStep }) {
  const [awardForm] = Form.useForm();
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
    const { name, value } = e.target;
    setNewAwards({ ...newAwards, [name]: value });
  }

  const submitAwardForm = (e) => {
    e.preventDefault();
    if (newAwards.awardTitle && newAwards.organization && newAwards.location && newAwards.receivedYear && newAwards.description) {
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

  useEffect(() => {
    const storedAwardData = JSON.parse(localStorage.getItem('awardData'));
    if (storedAwardData) {
      setAward(storedAwardData);
    }
  }, [])

  const deleteAward = (indexToDelete) => {
    const updatedAwardData = award.filter((_, index) => index !== indexToDelete);

    setAward(updatedAwardData);
    localStorage.setItem('awardData', JSON.stringify(updatedAwardData));
  }

  return (
    <div>
      <div className="awardsComponent">
        <h2>Awards</h2>
        <p>Describe about the awards you got!!!</p>

        <section className="awardsSection">
          <div className="addedAwards">
            <p>Added Awards</p>
            {award?.length > 0 ? (
              award?.map((Award, index) => (
                <div className="awardItem" key={index}>
                  <div className="title">
                    <span>{Award.awardTitle}</span>
                    <button className='deleteAwardBtn' onClick={() => deleteAward(index)}><i className='fas fa-trash'></i></button>
                  </div>
                  <div className="awardDetails">
                    <p>{Award?.organization}</p>
                    <p>{Award?.location}</p>
                    <p>{Award?.receivedYear}</p>
                    <p>{Award.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No Awards yet!!!</p>
            )}

          </div>
          <div className="newAwards">
            <p>New Achievement</p>
            {isModalOpen && <div className="addNewAwardModal">
              <Form onFinish={submitAwardForm} form={awardForm}>

                <label htmlFor="awardTitle">Title</label>
                <Input type="text" placeholder='eg: Best employee award' name='awardTitle' value={newAwards?.awardTitle} onChange={handleInputChange} />

                <label htmlFor="organization">Organization</label>
                <Input type="text" placeholder='organization' name='organization' value={newAwards?.organization} onChange={handleInputChange} />

                <label htmlFor="location">Location</label>
                <Input type="text" placeholder='location' name='location' value={newAwards?.location} onChange={handleInputChange} />

                <label htmlFor="receivedYear">Received Year</label>
                <Input type="text" placeholder='receivedYear' name='receivedYear' value={newAwards?.receivedYear} onChange={handleInputChange} />

                <label htmlFor="desc">Description</label>
                <textarea rows={5} placeholder="Describe about the award" name='description' value={newAwards?.description} onChange={handleInputChange}></textarea>

                <div className="submitAndCloseBtns">
                  <Button type='submit' className='submitBtn'><i className="fa-regular fa-paper-plane"></i> Submit</Button>
                  <Button className='closeBtn' onClick={handleCloseForm}>Close</Button>
                </div>

              </Form>
            </div>}

            {isAddButtonVisible && <button className='addNewAwardbtn' onClick={openAddAwardModal}><i className='fas fa-plus'></i> Add Award</button>}
          </div>

          <div className="nextAndBackBtn">
            <Button className='prevBtn' onClick={goToPreviousStep}><i class="fa-solid fa-arrow-left"></i> Previous</Button>
            <Button className='nextBtn' onClick={goToNextStep}>Next <i class="fa-solid fa-arrow-right"></i></Button>
          </div>
        </section>
      </div>
    </div>
  )
}
