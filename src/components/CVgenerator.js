import React, {useState} from 'react'
import './cvgenerator.css'
import TemplatesDisplay from '../componentsInner/TemplatesDisplay';
import PersonalData from '../componentsInner/PersonalData';
import Education from '../componentsInner/Education';
import Experience from '../componentsInner/Experience';
import Projects from '../componentsInner/Projects';
import Skills from '../componentsInner/Skills';
import Achievements from '../componentsInner/Achievements'

export default function CVgenerator() {
    const steps = ['Templates', 'Personal', 'Education', 'Experience', 'Projects', 'Skills', 'Achievement'];
    const [activeStepIndex, setActiveStepIndex] = useState(0);

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
                        {currentStep === 'Templates' && <TemplatesDisplay goToNextStep = {goToNextStep} />}
                        {currentStep === 'Personal' && <PersonalData goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Education' && <Education goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Experience' && <Experience goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Projects' && <Projects goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Skills' && <Skills goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                        {currentStep === 'Achievement' && <Achievements goToPreviousStep = {goToPreviousStep} goToNextStep = {goToNextStep} />}
                    </div>
            </div>
        </div>
    )
}
