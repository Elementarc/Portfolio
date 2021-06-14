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

//Variable to make wheel eventlistener not change on every wheel scroll. 1 second delay before switching url again.
var animationStop = false
var timer: any
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
        else if(path === "/home/connect"){
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
            history.replace("/home/connect")
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
    //Setting Homepagecontainer min-height to adjust height for content. (Needs to be like this long story)
    useEffect(() =>{
        var getHomepage = document.getElementById("home") as HTMLDivElement
        
        if(window.innerWidth <= 900){
            if(LocationIndex === 0){
                setTimeout(() => {
                    getHomepage.style.height = "1405px"
                }, 500);
            }
            else if(LocationIndex === 1){
                //Not done yet
            }
            else if(LocationIndex === 2){
                //Not done yet
            }
            else if(LocationIndex === 3){
                setTimeout(() => {
                    getHomepage.style.height = "1150px"
                }, 500);
            }
        }
    },[LocationIndex])
    //Adds listeners and removes them. So wheel changes url on wheelup / wheeldown
    useEffect(() => {
        //Checks if scroll up or down to then add 1 or subtract 1 from locationIndex and replace url with right path
        function wheelListner(e: any) {
            if(history.location.pathname.includes("/home") === true){
                if(window.innerWidth > 1300 && window.innerHeight >= 950){
                    if(animationStop === false){
                        //wheel UP
                        if(e.deltaY < 0){
                            //Setting the locationIndex so Partent component can switch to the right URL
                            if(LocationIndex! > 0){
                                setLocationIndex(LocationIndex! - 1)
                                animationStop = true
                                timer = setTimeout(() => {
                                    animationStop = false
                                }, 700);
                            }
                        }
                        //wheel DOWN
                        else{
                            if(LocationIndex! < 3){
                                setLocationIndex(LocationIndex! + 1)
                                animationStop = true
                                timer = setTimeout(() => {
                                    animationStop = false
                                }, 700);
                            }
                        }
                    }
                }
            }
        }
        //Using keydownListener function to disable wheel event to properly zoom in and out without changing home section/urls
        function keydownListener(e: any) {
            if(e.which === 17){
                window.removeEventListener("wheel", wheelListner)
            }
        }
        //Using keyupListener function to enable wheel event back to properly switch between sections section/urls
        function keyupListener(e: any) {
            if(e.which === 17){
                window.addEventListener("wheel", wheelListner)
            }
        }
        //Eventlistener that uses the function wheellistner
        window.addEventListener("wheel", wheelListner)
        //Eventlistener to disable or enable wheel event with their functions
        window.addEventListener("keydown", keydownListener)
        window.addEventListener("keyup", keyupListener)
        //Cleanup to disable all eventlistener for no memory leaks
        return(() =>{
            window.removeEventListener("wheel", wheelListner)
            window.removeEventListener("keydown", keydownListener)
            window.removeEventListener("keyup", keyupListener)
        })
    }, [LocationIndex, history.location.pathname])
    //clearing timer animationStop Timer
    useEffect(() => {
        return () => {
            clearTimeout(timer)
        };
    }, []);

    return(
        <motion.div  exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="homepageContainer" id="home">
            <motion.div className="contentContainer" id="contentContainer">
                <AnimatePresence>
                    <Switch location={location} key={path}>
                        <Route strict path="/home">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
                        </Route>
                        <Route strict path="/home/passion">
                            
                        </Route>
                        <Route strict path="/home/news">
                            
                        </Route>
                        <Route strict path="/home/contact">
                            <HomeContent locationIndex={LocationIndex} setLocationIndex={setLocationIndex}/>
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