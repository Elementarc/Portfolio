import React, {useEffect, useState} from "react"
import {Route, Switch, useLocation} from "react-router-dom"

//Import components
import Stars from "../components/Stars"
import Moon from "../components/Moon"
import SectionManager from "../components/SectionManager"
import {AnimatePresence, motion} from "framer-motion"

import HomeContent from "../components/HomepageComponents/HomeContent"
//CSS
import "./styleSheetPage/homepage.scss"
const HomepageContainer = (props: any) => {
    const location = useLocation()
    //getting changed on resize
    const [State, setState] = useState(false);
    //changing State Whenever Width is > 1000 or < 1000 on resize using eventlistener resize
    useEffect(() => {
        function changeState() {
            if(window.innerWidth > 1000){
                setState(true)
            }
            else{
                setState(false)
            }
        }
        
        window.addEventListener("resize", changeState)
        return(() =>{
            window.removeEventListener("resize", changeState)
        })
    },[]);
    //Animation for scrolling between routes also properly changes view when resizing app because of State depency
    useEffect(() =>{
        function homepageContentAnimation() {
            var getContent = document.getElementById("contentContainer") as HTMLDivElement
            if(window.innerWidth > 1000){
                if(location.pathname === "/home"){
                    getContent.style.top = "0"
                    getContent.style.left = "0"
                }
                else if(location.pathname === "/home/strength"){
                    getContent.style.top = "-100vh"
                    getContent.style.left = "0"
                }
                else if(location.pathname === "/home/routine"){
                    getContent.style.top = "-200vh"
                    getContent.style.left = "0"
                }
                else if(location.pathname === "/home/daily"){
                    getContent.style.top = "-300vh"
                    getContent.style.left = "0"
                }
            }
            else if(window.innerWidth < 1000) {
                if(location.pathname === "/home"){
                    getContent.style.top = "0"
                    getContent.style.left = "0"
                }
                else if(location.pathname === "/home/strength"){
                    getContent.style.top = "0"
                    getContent.style.left = "-100vw"
                }
                else if(location.pathname === "/home/routine"){
                    getContent.style.top = "0"
                    getContent.style.left = "-200vw"
                }
                else if(location.pathname === "/home/daily"){
                    getContent.style.top = "0"
                    getContent.style.left = "-300vw"
                }
            }
        }
        homepageContentAnimation()
    }, [location.pathname, State])
    
    return(
        <motion.div exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
            <div className="contentContainer" id="contentContainer">
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/home">
                            <HomeContent/>
                        </Route>
                        <Route exact path="/home/strength">
                            <HomeContent/>
                        </Route>
                        <Route exact path="/home/routine">
                            
                        </Route>
                        <Route exact path="/home/daily">
                            
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