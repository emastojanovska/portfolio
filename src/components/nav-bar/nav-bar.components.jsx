import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import './nav-bar.styles.css'

const NavBar = () => {
    const name = '<My Portfolio/>'
    return(
        <nav className="navbar navbar-expand-lg navbar-dark p-4 fixed-top">
        <div className="container">
        <Link className="navbar-brand portfolio-name" smooth={true} to="home" offset={-170}> {name} </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link smooth={true} to="home" offset={-170} className="nav-link" href="#">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">About me</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="services" offset={-95} className="nav-link" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="education" offset={-50} className="nav-link" href="#">Education</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="portfolio" offset={-20} className="nav-link" href="#">My work</Link>
          </li>

          <li className="nav-item">
            <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">Contact</Link>
          </li>

        </ul>

      </div>
      </div>
    </nav>
)
}

export default NavBar;