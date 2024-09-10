import React, {useState} from 'react'
import './cvgenerator.css'
import TemplatesDisplay from '../componentsInner/TemplatesDisplay';
import PersonalData from '../componentsInner/PersonalData';
import Education from '../componentsInner/Education';
import Experience from '../componentsInner/Experience';
import Projects from '../componentsInner/Projects';
import Skills from '../componentsInner/Skills';

export default function CVgenerator() {
    const[activeStep, setActiveStep] = useState('Templates');
    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">
                        <div className={`stepItem ${activeStep === 'Templates'? 'active' : ''}`} onClick={() => setActiveStep('Templates')}>
                            <i class="fa-regular fa-copy"></i>
                            <p>Templates</p>
                        </div>

                        <div className={`stepItem ${activeStep === 'Personal'? 'active' : ''}`} onClick={() => setActiveStep('Personal')}>
                            <i class="fa-regular fa-user"></i>
                            <p>Personal</p>
                        </div>

                        <div className={`stepItem ${activeStep === 'Education'? 'active' : ''}`} onClick={() => setActiveStep('Education')}>
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p>Education</p>
                        </div>

                        <div className={`stepItem ${activeStep === 'Experience'? 'active' : ''}`} onClick={() => setActiveStep('Experience')}>
                            <i class="fa-solid fa-layer-group"></i>
                            <p>Experience</p>
                        </div>

                        <div className={`stepItem ${activeStep === 'Projects'? 'active' : ''}`} onClick={() => setActiveStep('Projects')}>
                            <i class="fa-solid fa-rocket"></i>
                            <p>Projects</p>
                        </div>

                        <div className={`stepItem ${activeStep === 'Skills'? 'active' : ''}`} onClick={() => setActiveStep('Skills')}>
                            <i className="fa-solid fa-code-compare"></i>
                            <p>Skills</p>
                        </div>

                        <div className={`stepItem ${activeStep === 'Achievement'? 'active' : ''}`} onClick={() => setActiveStep('Achievement')}>
                            <i class="fa-solid fa-star"></i>
                            <p>Achievement</p>
                        </div>
                    </div>
                </aside>
                    <div className="stepInfo">
                        {activeStep === 'Templates' && <TemplatesDisplay />}
                        {activeStep === 'Personal' && <PersonalData />}
                        {activeStep === 'Education' && <Education/>}
                        {activeStep === 'Experience' && <Experience/>}
                        {activeStep === 'Projects' && <Projects/>}
                        {activeStep === 'Skills' && <Skills/>}
                    </div>
            </div>
        </div>
    )
}
