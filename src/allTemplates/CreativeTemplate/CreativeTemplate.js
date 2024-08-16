import React from 'react'
import personPhoto from '../../assets/personPhotos/rohit2.jpg'

export default function CreativeTemplate() {
  return (
    <div>
      <div className="CVContainer">
        <section className="infoAndSkillsSection">
            <div className="photo">
                <img src={personPhoto} alt="photo" />
            </div>
            <div className="infoAndSkills">
                <div className="personInfo">
                    <h2>Rohit Ghatal</h2>
                    <p>Web Developer</p>
                </div>
                <hr />
                <div className="contactAndSkills">
                    <div className="skills">
                        <h2><i class="fa-solid fa-code-compare"></i> Skills</h2>

                        <div className="skillItem">
                            <p>Html</p>
                            <div className="skillbar"><div className="fill"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}
