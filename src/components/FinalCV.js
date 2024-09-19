import React from 'react';

export default function FinalCV({ template: Template }) {
  return (
    <div>
      <div className="finalCVContainer">
        <h2>Here is your final CV</h2>
        <div className="finalCVSection">
          {Template ? <Template /> : <p>No template selected</p>}
        </div>
      </div>
    </div>
  );
}
