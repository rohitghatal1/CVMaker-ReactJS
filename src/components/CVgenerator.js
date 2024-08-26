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
                            <p>Templates</p>
                        </div>

                        <div className="stepItem">
                            <i class="fa-regular fa-user"></i>
                            <p>Personal</p>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <p>Education</p>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-layer-group"></i>
                            <p>Experience</p>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-rocket"></i>
                            <p>Projects</p>
                        </div>

                        <div className="stepItem">
                            <i className="fa-solid fa-code-compare"></i>
                            <p>Skills</p>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-star"></i>
                            <p>Achievement</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
