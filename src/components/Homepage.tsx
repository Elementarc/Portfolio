import React, {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {Route, Switch, useHistory, useLocation} from "react-router-dom"
//Import components
import Stars from "./HomePageComponents/Stars"
import Moon from "./HomePageComponents/Moon"
import SectionManager from "./HomePageComponents/SectionManager"
import HomeContent from "./HomePageComponents/HomeContent"
//CSS
import "./styleSheets/homepage.scss"

const HomepageContainer = (props: any) => {
    const location = useLocation()
    const path = useLocation().pathname.toLowerCase()
    const history = useHistory()

    //Sets initial State based on url
    const [LocationIndex, setLocationIndex] = useState(() =>{
        if(path === "/home"){
            return 0
        }
        else if(path === "/home/strength"){
            return 1
        }
        else if(path === "/home/routine"){
            return 2
        }
        else if(path === "/home/daily"){
            return 3
        }
        
    })
    //Changes url based on Location index. Allows us to cycle through urls when adding or subtracting 1 from LocationIndex
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
            if(window.innerWidth > 900){
                if(path === "/home"){
                    getContent.style.top = "0"
                    getContent.style.left = "0"
                }
                else if(path === "/home/strength"){
                    getContent.style.top = "-100vh"
                    getContent.style.left = "0"
                }
                else if(path === "/home/routine"){
                    getContent.style.top = "-200vh"
                    getContent.style.left = "0"
                }
                else if(path === "/home/daily"){
                    getContent.style.top = "-300vh"
                    getContent.style.left = "0"
                }
            }
            else if(window.innerWidth < 900) {
                if(path === "/home"){
                    getContent.style.top = "0"
                    getContent.style.left = "0"
                }
                else if(path === "/home/strength"){
                    getContent.style.top = "0"
                    getContent.style.left = "-100vw"
                }
                else if(path === "/home/routine"){
                    getContent.style.top = "0"
                    getContent.style.left = "-200vw"
                }
                else if(path === "/home/daily"){
                    getContent.style.top = "0"
                    getContent.style.left = "-300vw"
                }
            }
        }
        homepageContentAnimation()
    }, [path])

    
    return(
        <motion.div  exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
            <motion.div className="contentContainer" id="contentContainer">
                <AnimatePresence>
                    <Switch location={location} key={path}>
                        <Route strict path="/home">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
                        </Route>
                        <Route strict path="/home/strength">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex} />
                        </Route>
                        <Route strict path="/home/routine">
                            
                        </Route>
                        <Route strict path="/home/daily">
                            
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