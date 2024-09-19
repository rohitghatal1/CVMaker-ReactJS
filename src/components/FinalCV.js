import React from 'react'

export default function FinalCV(template) {
  return (
    <div>
      <div className="finalCVContainer">
        <h2>Here is you final CV</h2>

        <div className="finalCVSection">
            {React.createElement(template)}
        </div>
      </div>
    </div>
  )
}
