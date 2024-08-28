import React, {useState} from 'react'
import './templatesDisplay.css'
import templateData from '../templateSelector/templateData';
import BasicTemplate from '../allTemplates/basicTemplate/BasicTemplate';

export default function TemplatesDisplay() {
  const [selectedTemplate, setSelectedTemplate] = useState(BasicTemplate);
  const [borderColor, setBorderColor] = useState({});

  const handleCardClick = (template) => {
    setSelectedTemplate(template.component);
  };

  const changeborderColor = (templateId) => {
    setBorderColor((prevColors) => ({
      ...prevColors,
      [templateId]: 'blue'
    }));
  }
  return (
    <div>
      <div className="allTemplateDisplay">
        <h2>Select a Template</h2>
        <div className="allTemplateInfo">
          <h3>Here are some of the available Template for CV</h3>
          <div className="allTemplateContainer">
            {templateData.map((template) => (
              <div className="templateCard" key={template.id} onClick={()=> {handleCardClick(template); changeborderColor(template.id)}} style={{borderColor: borderColor[template.id]}}>
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
