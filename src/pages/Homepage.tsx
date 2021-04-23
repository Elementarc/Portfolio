import React, {useEffect} from "react"
import {Route, Switch, useLocation} from "react-router-dom"

//Import components
import Stars from "../components/Stars"
import Moon from "../components/Moon"
import SectionManager from "../components/SectionManager"
import HomeContent from "../components/HomepageComponents/HomeContent"
import {AnimatePresence, motion} from "framer-motion"
//CSS
import "./styleSheetPage/homepage.scss"

const HomepageContainer = (props: any) => {
    const location = useLocation()
    useEffect(() =>{
        var getContent = document.getElementById("contentContainer") as HTMLDivElement

        if(location.pathname === "/home"){
            getContent.style.top = "0"
        }
        else if(location.pathname === "/home/strength"){
            getContent.style.top = "-100vh"
        }
        else if(location.pathname === "/home/routine"){
            getContent.style.top = "-200vh"
        }
        else if(location.pathname === "/home/daily"){
            getContent.style.top = "-300vh"
        }

    }, [location.pathname])
    return(
        <motion.div exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
            <div className="contentContainer" id="contentContainer">
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/home">
                            <HomeContent/>
                        </Route>
                        <Route path="/home/strength">
                            
                        </Route>
                        <Route path="/home/routine">
                            
                        </Route>
                        <Route path="/home/daily">
                            
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>
            

            <Stars/>
            <SectionManager/>
            <Moon/>
        </motion.div>
    );
}

export default HomepageContainer