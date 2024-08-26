import React, {useState} from 'react'
import './cvgenerator.css'

export default function CVgenerator() {
    const[activeStep, setActiveStep] = useState('Templates');
    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">
                        <div className="stepItem" onClick={() => setActiveStep('Templates')}>
                            <i class="fa-regular fa-copy"></i>
                            <p>Templates</p>
                        </div>

                        <div className="stepItem" onClick={() => setActiveStep('Personal')}>
                            <i class="fa-regular fa-user"></i>
                            <p>Personal</p>
                        </div>

                        <div className="stepItem" onClick={() => setActiveStep('Eduation')}>
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p>Education</p>
                        </div>

                        <div className="stepItem" onClick={() => setActiveStep('Experience')}>
                            <i class="fa-solid fa-layer-group"></i>
                            <p>Experience</p>
                        </div>

                        <div className="stepItem" onClick={() => setActiveStep('Projects')}>
                            <i class="fa-solid fa-rocket"></i>
                            <p>Projects</p>
                        </div>

                        <div className="stepItem" onClick={() => setActiveStep('Skills')}>
                            <i className="fa-solid fa-code-compare"></i>
                            <p>Skills</p>
                        </div>

                        <div className="stepItem" onClick={() => setActiveStep('Achievement')}>
                            <i class="fa-solid fa-star"></i>
                            <p>Achievement</p>
                        </div>
                    </div>
                    <div className="stepInfo">
                        {activeStep == 'Templates' && "roht"}
                    </div>
                </aside>
            </div>
        </div>
    )
}
