import React, {useEffect, useState} from "react"
import {Route, Switch, useHistory, useLocation} from "react-router-dom"
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
    const history = useHistory()

    //Sets initial State based on url
    const [LocationIndex, setLocationIndex] = useState(() =>{
        if(location.pathname.toLowerCase() === "/home"){
            return 0
        }
        else if(location.pathname.toLowerCase() === "/home/strength"){
            return 1
        }
        else if(location.pathname.toLowerCase() === "/home/routine"){
            return 2
        }
        else if(location.pathname.toLowerCase() === "/home/daily"){
            return 3
        }
        
    })
    console.log(LocationIndex)
    //Checks LocationIndex to then switch to the correct URL
    useEffect(() => {
        if(LocationIndex === 0){
            history.replace("/home")
        }
        else if(LocationIndex === 1){
            history.replace("/home/strength")
        }
        else if(LocationIndex === 2){
            history.replace("/home/routine")
        }
        else if(LocationIndex === 3){
            history.replace("/home/daily")
        }
        
    }, [LocationIndex, history]);

    //Animation for scrolling between routes for mobile & desktop
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
    }, [location.pathname])

    return(
        <motion.div  exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
            <motion.div className="contentContainer" id="contentContainer">
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/home">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
                        </Route>
                        <Route exact path="/home/strength">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
                        </Route>
                        <Route exact path="/home/routine">
                            
                        </Route>
                        <Route exact path="/home/daily">
                            
                        </Route>
                    </Switch>
                </AnimatePresence>
            </motion.div>
            
            <Stars/>
            <SectionManager interfaceAnimation={props.interfaceAnimation} locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
            <Moon/>
        </motion.div>
    );
}

export default HomepageContainer