import React from "react";
import shopify from "../../assets/shopify.jpg";
import cinemaTicketsIS from "../../assets/cinema_tickets_IS.jpg"
import crwnEshop from "../../assets/crwn-eshop.jpg";
import portfolio from "../../assets/portfolio.jpg";
import moviesDDD from "../../assets/movies-DDD.jpg";
import tripTour from "../../assets/trip.jpg";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import './portfolio.styles.css'



const Pofrfolio = () => {

    // Shopify
  const openPopupboxShopify = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={shopify} alt="Shopify Clone Project..." />
        <p></p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/emastojanovska/online-shops")}>https://github.com/emastojanovska/online-shops</a>
      </>
    )
    PopupboxManager.open({ content,
    config: {
      titleBar: {
        enable: true,
        text: "Shopify ASP.NET MVC Application"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }})
  }

 

  // Cinema Tickets IS
  const openPopupboxCinema = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cinemaTicketsIS} alt="Cinema Management Microservices..." />
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/emastojanovska/cinema-tickets-application", "_blank")}>https://github.com/emastojanovska/cinema-tickets-application</a>
      </>
    )
    PopupboxManager.open({ content,
    config: {
      titleBar: {
        enable: true,
        text: "Cinema Tickets Management ASP.NET Core Application"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }})
  }



  // crwnEshop Project
  const openPopupboxCrwnEshop = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={crwnEshop} alt="Portfolio Project..." />
        <p></p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://crwn-live-eshop.herokuapp.com/", "_blank")}>https://crwn-live-eshop.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/emastojanovska/react-eshop", "_blank")}>https://github.com/emastojanovska/react-eshop</a>
      </>
    )
    PopupboxManager.open({ content,
    config: {
      titleBar: {
        enable: true,
        text: "Eshop React and Node.js Application"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }})
  }

  // Movies DDD
  
  const openPopupboxMoviesDDD = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={moviesDDD} alt="..." />
        <p></p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/emastojanovska/cinema-management-ddd", "_blank")}>https://github.com/emastojanovska/cinema-management-ddd</a>
      </>
    )
    PopupboxManager.open({ content,
    config: {
      titleBar: {
        enable: true,
        text: "Cinema Management Domain Driven Design Java Springboot"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }})
  }

  

  // Portfolio
  
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="..." />
        <p></p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://emastojanovska.github.io/portfolio", "_blank")}>"https://emastojanovska.github.io/portfolio</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/emastojanovska/portfolio", "_blank")}>https://github.com/emastojanovska/portfolio</a>
      </>
    )
    PopupboxManager.open({ content,
    config: {
      titleBar: {
        enable: true,
        text: "My Portfolio React Application"
      },
      fadeIn: true,
      fadeInSpeed: 500
    } })
  }


  // Trip Tour
  
  const openPopupboxTripTour = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={tripTour} alt="Trip Tours Project..." />
        <p></p>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarkoMarkovikj/proektDians", "_blank")}>https://github.com/MarkoMarkovikj/proektDians</a>
      </>
    )
    PopupboxManager.open({ content,
    config: {
      titleBar: {
        enable: true,
        text: "Trip Routes Java Springboot Web Application"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }})
  }

  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="container-fluid justify-content-center">
        <h1 className="text-uppercase text-center py-5">My work</h1>
        <div className="row justify-content-center">

            <div className="col-md-3 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxShopify}>
                    <img className="portfolio-image" src={shopify} alt="Shopify Clone Project..." />
                    <div className="overflow"></div>
        
                </div>
                
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxCinema}>
                    <img className="portfolio-image" src={cinemaTicketsIS} alt="City Guide Project..." />
                    <div className="overflow"></div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxCrwnEshop}>
                    <img className="portfolio-image" src={crwnEshop} alt="Portfolio React and Material UI Project..." />
                    <div className="overflow"></div>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">

            <div className="col-md-3 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                    <img className="portfolio-image" src={portfolio} alt="..." />
                    <div className="overflow"></div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxMoviesDDD}>
                    <img className="portfolio-image" src={moviesDDD} alt="..." />
                    <div className="overflow"></div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxTripTour}>
                    <img className="portfolio-image" src={tripTour} alt="..." />
                    <div className="overflow"></div>
                </div>
            </div>
        </div>
        
      </div>
      
      <PopupboxContainer/>
    

    </div>
  )
}

export default Pofrfolio;