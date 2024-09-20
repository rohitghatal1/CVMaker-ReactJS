import React from 'react'

export default function FinalCV({ template }) {
  return (
    <div>
      <div className="finalCVContainer">
        <h2>Here is your final CV</h2>

        <div className="finalCVSection">
          {template 

            ? React.cloneElement(template) // Render the selected template component directly
            : <p>No template selected.</p>}
        </div>
      </div>
    </div>
  );
}
