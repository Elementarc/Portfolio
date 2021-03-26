import React from "react"

import "../assets/css/homepage.scss"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
//Import component
import Backgrounds from "../components/Backgrounds"
import Moon from "../components/Moon"
import SectionManager from "../components/SectionManager"
import Nav from "../components/Nav"
import HomepageContent from "../components/HomepageContent"
import Blackbar from "../components/Blackbar"
import ScrollDown from "../components/ScrollDown"
import Logo from "../components/LogoName"

const HomepageContainer = (props: any) => {  
    
    return(
        <div className="homepageContainer" id="home">
                <Backgrounds/>
            
                <Switch>
                    <Route exact path="/home" >
                        <Nav/>
                        <SectionManager/>
                        <HomepageContent/>
                        <Blackbar/>
                        <Logo/>        
                        <Moon/>
                        <ScrollDown/>
                    </Route>

                    <Route exact path="/home/strength" >
                        <Nav/>
                        <SectionManager/>
                        
                        <Blackbar/>
                        <Logo/>        
                        <Moon/>
                        <ScrollDown/>
                    </Route>

                    <Route exact path="/home/routine" >
                        <Nav/>
                        <SectionManager/>
                        
                        <Blackbar/>
                        <Logo/>        
                        <Moon/>
                        <ScrollDown/>
                    </Route>

                    <Route exact path="/home/daily" >
                        <Nav/>
                        <SectionManager/>
                        
                        <Blackbar/>
                        <Logo/>        
                        <Moon/>
                        <ScrollDown/>
                    </Route>
                </Switch>
            
            
        </div>
    );
}

export default HomepageContainer