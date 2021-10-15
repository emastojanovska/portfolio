import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./components/nav-bar/nav-bar.components";
import Header from "./components/header/header.component";
import AboutMe from './components/about-me/about-me.component';
import TechnologyServices from './components/technologies/techonologies.components';
import Education from './components/education/education.component';
import Pofrfolio from './components/portfolio/portfolio.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component'

function App() {
  return (
    <div>
    <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f542a7"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe/>
      <TechnologyServices/>      
      <Education/>
      <Pofrfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;