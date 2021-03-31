import React from "react"
import {Route, Switch, useLocation} from "react-router-dom"

//Import components
import Backgrounds from "../components/Backgrounds"
import Moon from "../components/Moon"
import SectionManager from "../components/SectionManager"
import Nav from "../components/Nav"
import HomepageContent from "../components/HomepageContent"
import Blackbar from "../components/Blackbar"
import ScrollDown from "../components/ScrollDown"
import Logo from "../components/LogoName"
import {AnimatePresence} from "framer-motion"

//CSS
import "./styleSheetPage/homepage.scss"




const HomepageContainer = (props: any) => {
    const location = useLocation()
    //Home animations. Sending those dictonaries as props through components to then apply them via framer-motion.
    
    return(
        <div className="homepageContainer" id="home">
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact strict path="/home">
                        <HomepageContent/>
                    </Route>

                    <Route exact path="/home/strength">


                    </Route>

                    <Route exact path="/home/routine">
                                
                            
                    </Route>

                    <Route exact path="/home/daily" >
                                
                            
                    </Route>
                </Switch>
            </AnimatePresence>

            <Backgrounds/>
            
            <SectionManager/>
            <Blackbar/>
            <Logo/>
            <Moon/>
            <ScrollDown/>
            
        </div>
    );
}

export default HomepageContainer