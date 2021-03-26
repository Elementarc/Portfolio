import React from "react"

import {Route, Switch} from "react-router-dom"
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
            <Switch>
                <Route exact path="/home" >
                    <HomepageContent/>
                    
                </Route>

                <Route exact path="/home/strength" >
                        
                    
                </Route>

                <Route exact path="/home/routine" >
                        
                    
                </Route>

                <Route exact path="/home/daily" >
                        
                    
                </Route>
            </Switch>

            <Backgrounds/>
            <Nav/>
            <Blackbar/>
            <SectionManager/>
            <Logo/>        
            <Moon/>
            <ScrollDown/>
        </div>
    );
}

export default HomepageContainer