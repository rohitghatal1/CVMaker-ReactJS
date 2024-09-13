import React, {useState} from 'react'
import './templatesDisplay.css'
import templateData from '../templateSelector/templateData';
import BasicTemplate from '../allTemplates/basicTemplate/BasicTemplate';

export default function TemplatesDisplay({goToNextStep}) {
  const [selectedTemplate, setSelectedTemplate] = useState(BasicTemplate);
  const [borderColor, setBorderColor] = useState({});

  const handleCardClick = (template) => {
    setSelectedTemplate(template.component);
    setBorderColor({[template.id]: 'blue'})
  };

  return (
    <div>
      <div className="allTemplateDisplay">
      <div className="templateContainerHeading">
        <h2>Select a Template</h2>
        <button className='nextbtn' onClick={goToNextStep}>Next <i class="fa-solid fa-arrow-right"></i></button>
      </div>
        <div className="allTemplateInfo">
          <h3>Here are some of the available Template for CV</h3>
          <div className="allTemplateContainer">
            {templateData.map((template) => (
              <div className="templateCard" key={template.id} 
                onClick={()=> handleCardClick(template)} style={{borderColor: borderColor[template.id] || 'transparent'}}>
                <figure className="templateImage">
                  <img src={template.image} alt="basicTemplate" />
                </figure>
                <label>{template.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
