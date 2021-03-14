import React from "react"
//Css

import "../assets/css/homepage.css"
import particlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
//Import component
import Backgrounds from "../components/Backgrounds"
import Moon from "../components/Moon"
import Slider from "../components/Slider"
import SectionManager from "../components/SectionManager"
import Nav from "../components/Nav"
import HomepageContent from "../components/HomepageContent"

const HomepageContainer = (props) => {  
    
    return(
        <div className="homepageContainer" id="home">
            <Backgrounds/>
            <Nav/>
            <SectionManager/>
            <HomepageContent/>
            <Slider/>
            <Moon/>
            
            
            

            

        </div>
    );
}

export default HomepageContainer