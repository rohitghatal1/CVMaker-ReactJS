import React from 'react'
import templateData from '../templateSelector/templateData';
import './templateTab.css'

export default function TemplateTab() {
  return (
    <div>
      <div className="TemplateTab">
        <h2>Templates</h2>
        <p>Here is the list of <span>Templates</span> available!!!</p>

        <div className="templates-Container">
            {templateData.map((template) => (
                <div className="template-Card">
                    <figure className='templateImage'>
                        <img src={template.image} alt={template.name} />
                    </figure>
                    <p>{template.name}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
