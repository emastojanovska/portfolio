import React from "react";
import './education.styles.css'

const Education = () => {
  return (
    <div className="experience" id="education">
      <div className="d-flex justify-content-center my-5">
        <h1>Education</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2018</h3>
            <p>SUGS Nikola Karev, Skopje
            
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018</h3>
           <p> Course of coding in C++ in Education Center "Визија", Skopje</p>
           </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2022</h3>
            <p>Faculty of Computer Science and Engineering in Skopje, Software engineering and information systems.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-now</h3>
            <p>Zero to Mastery Academy </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Education;
