import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import templateData from '../templateSelector/templateData'
import './templates.css'

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  return (
    <div>
      <section className="templatesSection">
        <h2>Here are the Best <span>Template Designs</span> for you</h2>
        <p>An outstanding resume opens the door. A great interview seals the deal</p>
        <div className="templateContainer">
          <Swiper
            // spaceBetween={0}
            slidesPerView = {1}
            loop = {true}
            pagination = {{clickable: true}}
            navigation = {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
          >
          {templateData.map((template) =>(
            <SwiperSlide key={template.id}>
              <div
                className="templateCard"
                onClick={()=> setSelectedTemplate(template.component)}
              >
                <img src={template.image} alt={template.name} />
                <h3>{template.name}</h3>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
        {selectedTemplate && (
          <div className="templatePreview">
            <h2>Preview of Selected Template</h2>
            <selectedTemplate data = {{}}/>
          </div>
        )}
      </section>
    </div>
  )
}
