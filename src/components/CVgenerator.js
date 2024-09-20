import React, { useState } from 'react'
import './cvgenerator.css'
import TemplatesDisplay from '../componentsInner/TemplatesDisplay';
import PersonalData from '../componentsInner/PersonalData';
import Education from '../componentsInner/Education';
import Experience from '../componentsInner/Experience';
import Projects from '../componentsInner/Projects';
import Skills from '../componentsInner/Skills';
import Achievements from '../componentsInner/Achievements'
import FinalCV from './FinalCV';

export default function CVgenerator() {

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [finalCV, setFinalCV] = useState(null);

    const steps = ['Templates', 'Personal', 'Education', 'Experience', 'Projects', 'Skills', 'Achievement'];
    // for icons 
    const icons = [
        "fa-regular fa-copy",        // For 'Templates'
        "fa-regular fa-user",        // For 'Personal'
        "fa-solid fa-graduation-cap", // For 'Education'
        "fa-solid fa-layer-group",   // For 'Experience'
        "fa-solid fa-rocket",        // For 'Projects'
        "fa-solid fa-code-compare",  // For 'Skills'
        "fa-solid fa-star"           // For 'Achievement'
    ];

    const goToNextStep = () => {
        if (activeStepIndex < steps.length - 1) {
            setActiveStepIndex(activeStepIndex + 1);
        }
    };

    const goToPreviousStep = () => {
        if (activeStepIndex > 0) {
            setActiveStepIndex(activeStepIndex - 1)
        }
    }

    const generateCV = () => {
        setFinalCV(selectedTemplate);
    };
    

    const currentStep = steps[activeStepIndex];
    const currentIcon = icons[activeStepIndex];

    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">

                        {steps.map((step, index) => (
                            <div key={step} className={`stepItem ${currentStep === step ? 'active' : ''}`} onClick={() => setActiveStepIndex(index)}>
                                <i class={icons[index]}></i>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </aside>
                <div className="stepInfo">
                    {currentStep === 'Templates' && <TemplatesDisplay selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} goToNextStep={goToNextStep} />}
                    {currentStep === 'Personal' && <PersonalData goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                    {currentStep === 'Education' && <Education goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                    {currentStep === 'Experience' && <Experience goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                    {currentStep === 'Projects' && <Projects goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                    {currentStep === 'Skills' && <Skills goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />}
                    {currentStep === 'Achievement' && <Achievements goToPreviousStep={goToPreviousStep} generateCV={generateCV} />}
                    {finalCV && (<FinalCV template={finalCV} />)}
                </div>
            </div>
        </div>
    )
}
