import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import templateData from '../templateSelector/templateData';
import './templates.css';
import { Button } from 'antd';

export default function Templates() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 2;

  const totalSlides = Math.ceil(templateData.length / slidesPerPage);


  const goToTemplate = useNavigate();

  const handleSeeMore = () => {
    goToTemplate('/templateTab');
  }

  // Handle the next and previous buttons
  const goNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div>
      <section className="templatesSection">
        <h2>Here are the Best <span>Template Designs</span> for you</h2>
        <p>An outstanding resume opens the door. A great interview seals the deal</p>
        <div className="templateContainer">

          <div className="customSwiper">
            <Button className="prevBtn" onClick={goPrev} disabled={currentSlide === 0}>&#60;</Button>
            <div className="swiperWrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {templateData.map((template, index) => (
                <div className="swiperSlide" key={template.id}>
                  <div className="templateCardContainer">
                    <div className="templateCard">
                      <figure className="imageContainer">
                        <img src={template.image} alt={template.name} />
                      </figure>
                      <h3>{template.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="nextBtn" onClick={goNext} disabled={currentSlide === totalSlides - 1}>&#62;</Button>
          </div>

          <div className="pagination">
            {Array.from({ length: totalSlides }, (_, i) => (
              <span
                key={i}
                className={`paginationDot ${currentSlide === i ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>

        <Button className="seeMoreTemplateBtn" onClick={handleSeeMore}>See More...</Button>
      </section>
    </div>
  );
}
