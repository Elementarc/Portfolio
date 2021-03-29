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
    //Animations
    var homeContentAnimation = {
        initial: {
            opacity: 0,
        },
        in: {
            transition: {delay: 0.1, duration: 1},
            opacity: 1,
        },
        out: {
            transition: {duration: 0.2},
            opacity: 0,
            y: -500,
        },
    }
    var backgroundAnimation = {
        initial: {
            opacity: 0,
        },
        in: {
            transition: {delay: 0.2, duration: 0.3},
            opacity: 1,
        },
        out: {
            opacity: 0,
        },
    }
    var moonAnimation = {
        initial: {
            y: -150,
            opacity: 0,
        },
        in: {
            transition: {delay: 2, duration: 1.2},
            y: 0,
            opacity: 1,
        },
        out: {
            transition: {duration: 0.2},
            opacity: 0,
            y: -500,
        },
    }
    var interfaceAnimation = {
        initial: {
            opacity: 0,
        },
        in: {
            transition: {delay: 2, duration: 1},
            opacity: 1,
        },
        out: {
            transition: {duration: 0.2},
            opacity: 0,
        },
    }

    return(
        <div className="homepageContainer" id="home">
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/home">
                        <HomepageContent animation={homeContentAnimation}/>
                    </Route>

                    <Route exact path="/home/strength">


                    </Route>

                    <Route exact path="/home/routine">
                                
                            
                    </Route>

                    <Route exact path="/home/daily" >
                                
                            
                    </Route>
                </Switch>
            </AnimatePresence>
               
            <Backgrounds animation={backgroundAnimation}/>
            <Nav animation={interfaceAnimation}/>
            <Logo animation={interfaceAnimation}/>
            <SectionManager animation={interfaceAnimation}/>
            <Blackbar animation={interfaceAnimation}/>
            <Moon animation={moonAnimation}/>
            <ScrollDown/>
        </div>
    );
}

export default HomepageContainer