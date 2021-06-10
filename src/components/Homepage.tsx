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
        else if(path === "/home/passion"){
            return 1
        }
        else if(path === "/home/news"){
            return 2
        }
        else if(path === "/home/contact"){
            return 3
        }
    })
    //Changes url based on Location index. Allows us to cycle through urls when adding or subtracting 1 from LocationIndex
    useEffect(() => {
        if(LocationIndex === 0){
            history.replace("/home")
        }
        else if(LocationIndex === 1){
            history.replace("/home/passion")
        }
        else if(LocationIndex === 2){
            history.replace("/home/news")
        }
        else if(LocationIndex === 3){
            history.replace("/home/contact")
        }
    }, [LocationIndex, history]);

    //Animation for scrolling between routes for mobile & desktop
    useEffect(() =>{
        function homepageContentAnimation() {
            var getContent = document.getElementById("contentContainer") as HTMLDivElement
            if(window.innerWidth > 900){
                if(LocationIndex === 0){
                    getContent.style.top = "0"
                    getContent.style.left = "0"
                }
                else if(LocationIndex === 1){
                    getContent.style.top = "-100vh"
                    getContent.style.left = "0"
                }
                else if(LocationIndex === 2){
                    getContent.style.top = "-200vh"
                    getContent.style.left = "0"
                }
                else if(LocationIndex === 3){
                    getContent.style.top = "-300vh"
                    getContent.style.left = "0"
                }
            }
            else if(window.innerWidth < 900) {
                if(LocationIndex === 0){
                    getContent.style.top = "0"
                    getContent.style.left = "0"
                }
                else if(LocationIndex === 1){
                    getContent.style.top = "0"
                    getContent.style.left = "-100vw"
                }
                else if(LocationIndex === 2){
                    getContent.style.top = "0"
                    getContent.style.left = "-200vw"
                }
                else if(LocationIndex === 3){
                    getContent.style.top = "0"
                    getContent.style.left = "-300vw"
                }
            }
        }
        homepageContentAnimation()
    }, [LocationIndex])

    return(
        <motion.div  exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
            <motion.div className="contentContainer" id="contentContainer">
                <AnimatePresence>
                    <Switch location={location} key={path}>
                        <Route strict path="/home">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
                        </Route>
                        <Route strict path="/home/passion">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex} />
                        </Route>
                        <Route strict path="/home/news">
                            
                        </Route>
                        <Route strict path="/home/contact">
                            
                        </Route>
                    </Switch>
                </AnimatePresence>
            </motion.div>
            
            <Stars locationIndex={LocationIndex}/>
            <SectionManager interfaceAnimation={props.interfaceAnimation} locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
            <Moon locationIndex={LocationIndex}/>
        </motion.div>
    );
}

export default HomepageContainer