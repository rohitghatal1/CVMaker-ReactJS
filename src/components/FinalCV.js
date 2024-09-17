import React from 'react'

export default function FinalCV({template:Template}) {
  return (
    <div>
      <div className="finalCVContainer">
        <h2>Here is you final CV</h2>

        <div className="finalCVSection">
            {React.createElement(Template)}
        </div>
      </div>
    </div>
  )
}
