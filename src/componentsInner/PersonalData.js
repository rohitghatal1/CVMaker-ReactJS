import React, { useState, useEffect } from 'react';
import './personal.css';
import personPhoto from '../assets/personPhotos/rohit2.jpg';

export default function PersonalData() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

  const openAddPersonalModal = () => {
    setIsModalOpen(true);
    setIsAddButtonVisible(false);
  }
  
  const handleCloseForm = () => {
    setIsModalOpen(false);
    setIsAddButtonVisible(true);
  }

  const [newPersonalData, setNewPersonalData] = useState({
    fName: '',
    lName: '',
    speciality: '',
    PAddress: '',
    city: '',
    email: '',
    contactNo: '',
    summary: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPersonalData({ ...newPersonalData, [name]: value });
  }

  const submitPersonalInfoForm = (e) => {
    e.preventDefault();

    if (newPersonalData.fName && newPersonalData.lName && newPersonalData.speciality && newPersonalData.PAddress && newPersonalData.city && newPersonalData.email && newPersonalData.contactNo && newPersonalData.summary) {
      const updatedPersonalData = [...personalInfo, newPersonalData];

      setPersonalInfo(updatedPersonalData);
      localStorage.setItem('personalInfo', JSON.stringify(updatedPersonalData));
    }
  }
  const [personalInfo, setPersonalInfo] = useState([]);

  const [socialLinks, setSocialLinks] = useState([]);
  const [newLink, setNewLink] = useState({ platform: 'Facebook', url: '' });

  // Load social links from local storage on component mount
  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('socialLinks'));
    if (storedLinks) {
      setSocialLinks(storedLinks);
    }
  }, []);

  // Save links to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
  }, [socialLinks]);

  const handleAddLink = () => {
    if (newLink.url) {
      const updatedLinks = [...socialLinks, newLink];
      setSocialLinks(updatedLinks);
      setNewLink({ platform: 'Facebook', url: '' }); // Reset the input fields
    }
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

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

            <div className="uploadDeleteBtn">
              <span className='uploadbtn'><i className="fa-solid fa-pencil"></i> Upload Photo</span>
              <span className='deletebtn'><i className="fa-regular fa-trash-can"></i> Delete Photo</span>
            </div>
          </div>

          <div className="infoForm">
            <form onSubmit={submitPersonalInfoForm}>
              <div className="row">
                <div className="col">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" placeholder='First Name' value={newPersonalData.fName} name='fName' onChange={handleInputChange} />
                </div>
                <div className="col">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" placeholder='Last Name' value={newPersonalData.lName} name='lName' onChange={handleInputChange} />
                </div>
              </div>

              <div className="fullWidthInput">
                <label htmlFor="designation">Specialist on</label>
                <input type="text" placeholder='ex: Web Developer, Python, React Developer etc' value={newPersonalData.speciality} name='speciality' onChange={handleInputChange} />
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder='address' value={newPersonalData.PAddress} name='pAddress' onChange={handleInputChange} />
                </div>
                <div className="col">
                  <label htmlFor="city">City</label>
                  <input type="text" placeholder='city' value={newPersonalData.city} name='city' onChange={handleInputChange} />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder='email address' value={newPersonalData.email} name='email' onChange={handleInputChange} />
                </div>
                <div className="col">
                  <label htmlFor="phone">Contact No.</label>
                  <input type="text" placeholder='contact number' value={newPersonalData.contactNo} name='contactNo' onChange={handleInputChange} />
                </div>
              </div>

              <div className="fullWidthInput">
                <label htmlFor="summary">Summary</label>
                <textarea rows={5} value={newPersonalData.summary} name='summary' onChange={handleInputChange}></textarea>
              </div>

              <div className="submitAndCloseBtns">
                <button type='submit' className='submitBtn'>Submit</button>
                <button className='closeBtn' onClick={handleCloseForm}>Close</button>
              </div>
            </form>
            {isAddButtonVisible && <button className='addPersonalDatabtn' onClick={openAddPersonalModal}><i className='fas fa-plus'></i> Add Info</button>}
          </div>

          <section className="socialLinkSection">
            <p>Social Links</p>
            <div className="currentLinks">
              {socialLinks.map((link, index) => (
                <div key={index} className="socialLinkItem">
                  <span>{link.platform}: {link.url}</span>
                  <span className='deleteLinkbtn' onClick={() => handleDeleteLink(index)}>
                    <i className='fas fa-trash'></i>
                  </span>
                </div>
              ))}
            </div>

            <div className="newLinkSection">
              <p>New Link</p>
              <div className="newlinkForm">
                <select
                  id="socialPlatform"
                  value={newLink.platform}
                  onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
                >
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="GitHub">GitHub</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter link"
                  value={newLink.url}
                  onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                />
              </div>
              <button className="addNewLink" onClick={handleAddLink}>
                <i className='fa fa-plus'></i> Add Link
              </button>
            </div>
          </section>

          <div className="nextAndBackBtn">
            <button className='prevBtn'><i class="fa-solid fa-arrow-left"></i> Previous</button>
            <button className='nextBtn'>Next <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
