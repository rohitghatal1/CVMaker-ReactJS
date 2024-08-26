import React from 'react'
import './cvgenerator.css'

export default function CVgenerator() {
    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">
                        <div className="stepItem">
                            <i class="fa-regular fa-copy"></i>
                            <h4>Templates</h4>
                        </div>

                        <div className="stepItem">
                            <i class="fa-regular fa-user"></i>
                            <h4>Personal</h4>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h4>Education</h4>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-layer-group"></i>
                            <h4>Experience</h4>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-rocket"></i>
                            <h4>Projects</h4>
                        </div>

                        <div className="stepItem">
                            <i className="fa-solid fa-code-compare"></i>
                            <h4>Skills</h4>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-star"></i>
                            <h4>Achievement</h4>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
