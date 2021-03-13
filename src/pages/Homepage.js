import React from "react"
//Css

import "../assets/css/homepage.css"
import particlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
//Import component
import Particles from "react-particles-js"

import InterfaceHomepage from "../components/Homepage/InterfaceHomepage"
import HomepageContent from "../components/Homepage/HomepageContent"

const HomepageContainer = (props) => {  
    
    return(
        <div className="homepageContainer" id="home">
            <HomepageContent/>

            <div className="homepageBackground">
                <Particles id="particles" className="homepageBackgroundParticles" params={particlesConfig}></Particles>
            </div>

            
            
            

            

            <InterfaceHomepage/>
        </div>
    );
}

export default HomepageContainer