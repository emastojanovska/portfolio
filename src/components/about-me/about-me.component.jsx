import React from "react";
import cv from '../../files/cv.pdf'
import me from '../../assets/me.jpg'
import './about-me.styles.css'

const AboutMe = () => {
    return(
      <div className="container py-5 about-wrap" id="about">
      <div className="row">
        <div className="col-lg-6 col-xm-12 ">
          <div className="photo-wrap mb-5">
            
            <img className="profile-img img-thumbnail" src={me} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 about-me-section-2">
          <h1 className="heading mb-5 text-center">About me</h1>
          <p className="about-me-text">
          Hello! I’m Ema. I’m a software engineer with big passion for 
          creating quality software, working on great projects and coding fun things.
            I am currently in my last year at Faculty of Computer Science and Engineering in Skopje
             where I’m studying Software engineering and information systems. I have an excellent 
             knowledge for planning, implementing and maintaining creative software solutions.
              Besides of writing clean, logical, high- quality code, I also focus on software 
              analysis, choosing the right architecture, use the right design principles and 
              patterns. My goal is to gain a lot of knowledge and develop the best practices 
              of creating reusable, extensible code with tremendous performance. I love working with
               people on diverse projects, sharing ideas for the things I’m passionate about and enhancing the knowledge for the newest technologies out there. 
          </p>
            
              <a
                href={cv}
                download
                className="btn-main-offer-cv"
              >
                Click here to download my CV
              </a>
           
        </div>
      </div>
      
    </div>
    )
}

export default AboutMe;