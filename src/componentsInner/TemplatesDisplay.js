import React, { useState } from 'react';
import './templatesDisplay.css';
import templateData from '../templateSelector/templateData';
import BasicTemplate from '../allTemplates/basicTemplate/BasicTemplate';

export default function TemplatesDisplay({ selectedTemplate, setSelectedTemplate, goToNextStep }) {
  const [selectedCardId, setSelectedCardId] = useState(null); // Track selected card ID

  const handleCardClick = (template) => {
    setSelectedTemplate(template.component);
    setSelectedCardId(template.id); // Set the clicked template's ID as selected
  };

  return (
    <div>
      <div className="allTemplateDisplay">
        <div className="templateContainerHeading">
          <h2>Select a Template</h2>
          <button className='nextbtn' onClick={goToNextStep}>Next <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="allTemplateInfo">
          <h3>Here are some of the available Template for CV</h3>
          <div className="allTemplateContainer">
            {templateData.map((template) => (
              <div 
                className={`templateCard ${selectedCardId === template.id ? 'selectedCard' : ''}`} 
                key={template.id}
                onClick={() => handleCardClick(template)}
              >
                <figure className="templateImage">
                  <img src={template.image} alt={template.name} />
                </figure>
                <label>{template.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
