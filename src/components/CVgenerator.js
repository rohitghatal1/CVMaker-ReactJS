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
import Awards from '../componentsInner/Awards';

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
        'Awards',
        'Achievement'
    ];

    const icons = {
        'Templates': "fa-regular fa-copy",
        'Personal': "fa-regular fa-user",
        'Education': "fa-solid fa-graduation-cap",
        'Experience': "fa-solid fa-layer-group",
        'Projects': "fa-solid fa-rocket",
        'Skills': "fa-solid fa-code-compare",
        'Awards': "fa-solid fa-award",
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
        setActiveStep('FinalCV'); // Set active step to FinalCV after generation
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 'Templates':
                return (
                    <TemplatesDisplay selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} goToNextStep={goToNextStep} />
                );
            case 'Personal':
                return <PersonalData goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />;
            case 'Education':
                return <Education goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />;
            case 'Experience':
                return <Experience goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />;
            case 'Projects':
                return <Projects goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />;
            case 'Skills':
                return <Skills goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep} />;
            case 'Awards':
                return <Awards goToPreviousStep={goToPreviousStep} goToNextStep={goToNextStep}/>
            case 'Achievement':
                return <Achievements goToPreviousStep={goToPreviousStep} generateCV={generateCV} />;
            case 'FinalCV':
                return <FinalCV template={finalCV} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">
                        {steps.map((step) => (
                            <div 
                                key={step} 
                                className={`stepItem ${activeStep === step ? 'active' : ''}`} 
                                onClick={() => setActiveStep(step)}
                            >
                                <i className={icons[step]}></i>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </aside>
                <div className="stepInfo">
                    {renderStepContent()}
                </div>
            </div>
        </div>
    );
}
