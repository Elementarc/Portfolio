import React from "react"
import {Route, Switch, useLocation} from "react-router-dom"

//Import components
import Backgrounds from "../components/Backgrounds"
import Moon from "../components/Moon"
import SectionManager from "../components/SectionManager"
import HomepageContent from "../components/HomepageContent"
import ScrollDown from "../components/ScrollDown"
import {AnimatePresence, motion} from "framer-motion"
//CSS
import "./styleSheetPage/homepage.scss"
const HomepageContainer = (props: any) => {
    const location = useLocation()

    return(
        <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
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
            <Moon/>
            <ScrollDown/>
            
        </motion.div>
    );
}

export default HomepageContainer