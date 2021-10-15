import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";
import { faDesktop, faFileCode, faCheck, faCogs} from "@fortawesome/free-solid-svg-icons";

import './technologies.styles.css';

const TechnologyServices = () => {
  return (
    <div className="services" id="services">
      <h1 className="py-5">services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Frontend and Web design</h3>
              <p> 
              <Badge variant="dark">Javascript</Badge>
              <Badge variant="dark">HTML</Badge>
              <Badge variant="dark">CSS</Badge>
              <Badge variant="dark">SCSS</Badge>
              <Badge variant="dark">React</Badge>
              <Badge variant="dark">React Redux</Badge>
              <Badge variant="dark">React Saga / Thunks</Badge>
              <Badge variant="dark">Graphql/ Apollo</Badge>
              <Badge variant="dark">Context API</Badge>
              <Badge variant="dark">Hooks</Badge>
              <Badge variant="dark">PWA</Badge>
              <Badge variant="dark">Styled Components</Badge>
              <Badge variant="dark">Optimization</Badge>
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Backend Web Development</h3>
              <p>
              <Badge variant="dark">Java</Badge>
              <Badge variant="dark">Java Springboot</Badge>
              <Badge variant="dark">ASP.NET MVC</Badge>
              <Badge variant="dark">ASP.NET Core</Badge>
              <Badge variant="dark">Phyton</Badge>
              <Badge variant="dark">SQL</Badge>
              <Badge variant="dark">NoSQL</Badge>
              
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCheck} size="2x" /></div>

              <h3>Software Testing</h3>
              <p>
              <Badge variant="primary">Unit testing</Badge>
              <Badge variant="primary">Integration tests</Badge>
              <Badge variant="primary">Selenium</Badge>
              <Badge variant="primary">Mockito</Badge>
              <Badge variant="primary">Jest</Badge>
              <Badge variant="primary">Pitest</Badge>
              <Badge variant="primary">Input/Graph/Mutation Coverage</Badge>
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size="2x" /></div>

              <h3>Software Architecture and Design</h3>
              <p><Badge variant="primary">Analysis and Design</Badge>
              <Badge variant="primary">Architecture</Badge>
              <Badge variant="primary">Design patterns and principes</Badge>
              <Badge variant="primary">Domain Driven Design</Badge>
              <Badge variant="primary">Onion architecture</Badge>
              <Badge variant="primary">System Integration</Badge>
              <Badge variant="primary">Microservices</Badge>
              
              </p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TechnologyServices;
