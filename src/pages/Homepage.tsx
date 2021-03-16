import React from "react"

import "../assets/css/homepage.css"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
//Import component
import Backgrounds from "../components/Backgrounds"
import Moon from "../components/Moon"
import Slider from "../components/Slider"
import SectionManager from "../components/SectionManager"
import Nav from "../components/Nav"
import HomepageContent from "../components/HomepageContent"
import Blackbar from "../components/Blackbar"
import ScrollDown from "../components/ScrollDown"
import Logo from "../components/LogoName"

const HomepageContainer = (props: any) => {  
    
    return(
        <div className="homepageContainer" id="home">
            <Router>
                <Switch>
                    <Route exact path="/home">
                        
                        <HomepageContent/>
                        <Blackbar/>
                        <Logo/>
                        <Nav/>
                        <SectionManager/>
                        <Moon/>
                        <Slider/>
                        <ScrollDown/>
                        <Backgrounds/>
                    </Route>

                    <Route exact path="/home/strength">
                        <Backgrounds/>
                        <Blackbar/>
                        <Nav/>
                        <Moon/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default HomepageContainer