import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

import './footer.styles.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Skopje, Macedonia</p>
            </div>
            <div className="d-flex">
              <a >076/250-293</a>
            </div>
            <div className="d-flex">
              <p>emastojanovska52@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-170} className="footer-nav" href="#"> Home <span className="sr-only"></span></Link>
                <br />
                <Link smooth={true} to="about" offset={-100} className="footer-nav" href="#">About me</Link>
                <br />
                <Link smooth={true} to="services" offset={-95} className="footer-nav" href="#">Services</Link>
                </div>
              <div className="col">
              <Link smooth={true} to="education" offset={-50} className="footer-nav" href="#">Education</Link>
              <br />
              <Link smooth={true} to="portfolio" offset={-20} className="footer-nav" href="#">My work</Link>
              <br />
              <Link smooth={true} to="contact" offset={-50} className="footer-nav" href="#">Contact</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://emastojanovska.github.io/portfolio"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://emastojanovska.github.io/portfolio"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://emastojanovska.github.io/portfolio"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://emastojanovska.github.io/portfolio"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
