import React from 'react'

export default function CVgenerator() {
    return (
        <div>
            <div className="cvGeneratorContainer">
                <aside className='stepsIdicator'>
                    <div className="stepItemsContainer">
                        <div className="stepItem">
                            <i class="fa-regular fa-copy"></i>
                            <h3>Templates</h3>
                        </div>

                        <div className="stepItem">
                            <i class="fa-regular fa-user"></i>
                            <h3>Personal</h3>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <h3>Education</h3>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-layer-group"></i>
                            <h3>Experience</h3>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-rocket"></i>
                            <h3>Projects</h3>
                        </div>

                        <div className="stepItem">
                            <i className="fa-solid fa-code-compare"></i>
                            <h3>Skills</h3>
                        </div>

                        <div className="stepItem">
                            <i class="fa-solid fa-star"></i>
                            <h3>Achievement</h3>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
