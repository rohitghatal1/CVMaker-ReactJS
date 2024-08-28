import React, {useState} from 'react'
import './templatesDisplay.css'
import templateData from '../templateSelector/templateData';
import BasicTemplate from '../allTemplates/basicTemplate/BasicTemplate';

export default function TemplatesDisplay() {
  const [selectedTemplate, setSelectedTemplate] = useState(BasicTemplate);
  return (
    <div>
      <div className="allTemplateDisplay">
        <h2>Select a Template</h2>
        <div className="allTemplateInfo">
          <h3>Here are some of the available Template for CV</h3>
          <div className="allTemplateContainer">
            {templateData.map((template) => (
              <div className={`templateCard ${selectedTemplate === template.component? 'selectedCard' : ''}`} key={template.id} onClick={()=> setSelectedTemplate(template.component)}>
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
