import React, {useRef} from 'react'
import './finalcv.css'
import html2pdf from 'html2pdf.js';

export default function FinalCV({ template }) {
  const cvRef = useRef();

  const downloadCV = () => {
    const element = cvRef.current;
    const options = {
      margin: 1,
      filename: 'cv.pdf',
      imag: {type: 'jpeg', quality: 0.98},
      html2canvas: {scale: 2},
      jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <div>
      <div className="finalCVSection">
      <div className="headingAndDownloadBtn">
        <h2 className='cvHeading'>Here is your final CV</h2>
        <button onClick={downloadCV} className='downloadCVBtn'>Download CV</button>
      </div>

        <div className="finalCVContainer" ref={cvRef}>
          {template 

            ? React.cloneElement(template) // Render the selected template component directly
            : <p>No template selected.</p>}
        </div>
      </div>
    </div>
  );
}
