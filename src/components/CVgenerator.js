import React, { useState } from 'react';
import './cvgenerator.css';
import TemplatesDisplay from '../componentsInner/TemplatesDisplay';
import PersonalData from '../componentsInner/PersonalData';
import Education from '../componentsInner/Education';
import Experience from '../componentsInner/Experience';
import Projects from '../componentsInner/Projects';
import Skills from '../componentsInner/Skills';
import Achievements from '../componentsInner/Achievements';
import FinalCV from './FinalCV';

export default function CVgenerator() {
    const [activeStep, setActiveStep] = useState('Templates');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [finalCV, setFinalCV] = useState(null);

    const steps = [
        'Templates', 
        'Personal', 
        'Education', 
        'Experience', 
        'Projects', 
        'Skills', 
        'Achievement'
    ];

    // Icon mapping based on step names
    const icons = {
        'Templates': "fa-regular fa-copy",
        'Personal': "fa-regular fa-user",
        'Education': "fa-solid fa-graduation-cap",
        'Experience': "fa-solid fa-layer-group",
        'Projects': "fa-solid fa-rocket",
        'Skills': "fa-solid fa-code-compare",
        'Achievement': "fa-solid fa-star"
    };

    const goToNextStep = () => {
        const currentIndex = steps.indexOf(activeStep);
        if (currentIndex < steps.length - 1) {
            setActiveStep(steps[currentIndex + 1]);
        }
    };

    const goToPreviousStep = () => {
        const currentIndex = steps.indexOf(activeStep);
        if (currentIndex > 0) {
            setActiveStep(steps[currentIndex - 1]);
        }
    };

    const generateCV = () => {
        setFinalCV(selectedTemplate);
    };

    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">
                        {steps.map((step) => (
                            <div key={step} className={`stepItem ${activeStep === step ? 'active' : ''}`} onClick={() => setActiveStep(step)}>
                                <i className={icons[step]}></i>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </aside>
                <div className="stepInfo">
                    {finalCV ? (
                        <FinalCV template={finalCV} />
                    ) : (
                        <>
                            {activeStep === 'Templates' && (
                                <TemplatesDisplay selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} goToNextStep={goToNextStep} />
                            )}
                            {activeStep === 'Personal' && <PersonalData goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                            {activeStep === 'Education' && <Education goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                            {activeStep === 'Experience' && <Experience goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                            {activeStep === 'Projects' && <Projects goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                            {activeStep === 'Skills' && <Skills goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                            {activeStep === 'Achievement' && <Achievements goToPreviousStep={goToPreviousStep} generateCV={generateCV} />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
