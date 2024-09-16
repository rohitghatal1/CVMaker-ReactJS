import React, {useState} from 'react'
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
    const steps = ['Templates', 'Personal', 'Education', 'Experience', 'Projects', 'Skills', 'Achievement'];
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [finalCV, setFinalCV] = useState(null);

    const goToNextStep = () => {
        if(activeStepIndex < steps.length - 1){
            setActiveStepIndex(activeStepIndex + 1);
        }
    };

    const goToPreviousStep = () => {
        if(activeStepIndex > 0){
            setActiveStepIndex(activeStepIndex - 1)
        }
    }

    const generateCV = () => {
        const personalData = JSON.parse(localStorage.getItem('personalData'));
        const educationData = JSON.parse(localStorage.getItem('educationData'));
        const experienceData = JSON.parse(localStorage.getItem('experienceData'));
        const projectsData = JSON.parse(localStorage.getItem('projectsData'));
        const skillsData = JSON.parse(localStorage.getItem('skillsData'));
        const achievementData = JSON.parse(localStorage.getItem('achievementData'));

        setFinalCV({
            template: selectedTemplate,
            personalData,
            educationData,
            experienceData,
            projectsData,
            skillsData,
            achievementData
        })
    };

    const currentStep = steps[activeStepIndex];

    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">

                        {steps.map((step, index) => (
                            <div key={step} className={`stepItem ${currentStep === step ? 'active' : ''}`} onClick = {() => setActiveStepIndex(index)}>
                            <i class="fa-regular fa-copy"></i>
                            <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </aside>
                    <div className="stepInfo">
                        {currentStep === 'Templates' && <TemplatesDisplay selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Personal' && <PersonalData goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Education' && <Education goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Experience' && <Experience goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Projects' && <Projects goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Skills' && <Skills goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Achievement' && <Achievements goToPreviousStep = {goToPreviousStep} generateCV = {generateCV} />}
                        {finalCV &&(
                            <FinalCV
                                template = {finalCV.template}
                                personalData = {finalCV.personalData}
                                educationData = {finalCV.educationData}
                                experienceData = {finalCV.experienceData}
                                projectsData = {finalCV.projectsData}
                                skillsData = {finalCV.skillsData}
                                achievementData = {finalCV.achievementData} 
                            />
                        )}
                    </div>
            </div>
        </div>
    )
}
