import React from "react"

import "../assets/css/homepage.css"
//Import component
import Backgrounds from "../components/Backgrounds"
import Moon from "../components/Moon"
import Slider from "../components/Slider"
import SectionManager from "../components/SectionManager"
import Nav from "../components/Nav"
import HomepageContent from "../components/HomepageContent"
import Blackbar from "../components/Blackbar"
import ScrollDown from "../components/ScrollDown"

const HomepageContainer = (props: any) => {  
    
    return(
        <div className="homepageContainer" id="home">
            <Backgrounds/>
            <Blackbar/>
            <SectionManager/>
            <Nav/>
            <HomepageContent/>
            <Slider/>
            <Moon/>
            <ScrollDown/>
            
            

        </div>
    );
}

export default HomepageContainer