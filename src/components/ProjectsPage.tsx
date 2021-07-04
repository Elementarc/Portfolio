import React, {useEffect} from 'react';
import {motion} from "framer-motion"
import {Link, useHistory} from "react-router-dom"
//css
import "./styleSheets/projectPage.scss"
import Wind from "../assets/videos/smoky.mp4"
function scrollToTop(){
    var getProjectContainer = document.getElementById("ProjectContainer") as HTMLDivElement
    if(window.innerWidth < 900){
        window.scrollTo(0, 0)
    }
    else{
        getProjectContainer.scrollTo(0, 0)
    }
}


const ProjectsPage = (props: any) => {
    const history = useHistory()
    //Changes navColor based on ContentScrollscrollY
    useEffect(() =>{
        var getProjectContainer = document.getElementById("ProjectContainer") as HTMLDivElement
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement

        function changeNavWhenScroll(){
            
            if(window.innerWidth > 900 && history.location.pathname.toLowerCase().includes("/projects") === true){
                if(getProjectContainer.scrollTop > 0){
                    getNavIcon.style.fill = `#000000`
                    
                    if(getProjectContainer.scrollTop >= 800){
                        getNavIcon.style.fill = `#ffffff`
                    }
                    if(getProjectContainer.scrollTop >= 1550){
                        getNavIcon.style.fill = `#000000`
                    }
                }
            }

        }
        getProjectContainer.addEventListener("scroll", changeNavWhenScroll)

        return(() =>{
            getProjectContainer.removeEventListener("scroll", changeNavWhenScroll)
        })
    },[history])
    //Changin NavIcon Color for better ui/ux
    useEffect(() => {
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement

        if(window.innerWidth > 900){
            getNavIcon.style.fill = "#000000"
        }
    }, []);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.4}}} className="ProjectContainer" id="ProjectContainer">
           
            <div className="allContentContainer" id="allContentContainer">
                <motion.div initial={{top: "100vh"}} animate={{ top: 0, transition: {duration: 2}}} className="smokeContainer">
                    <motion.video initial={{opacity: 0}} animate={{opacity: 0.4, transition: {duration: 1, delay: 0.5}}} muted autoPlay loop className="smokeVideo" src={Wind}></motion.video>
                </motion.div>
                <motion.div className="content">
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1 >{"PIXEL ART"}</h1>
                        <br className="lineBreak" />
                        <h2>THE SECOND DIMENSION</h2>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 1, delay:0.8}}}>
                            <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} className="underlineIcon"></motion.span>
                        </motion.span>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>We're a huge fan of 2D and one of our future dreams would be to release our own pixelart game, but that can wait for the time being. Meanwhile, how about some 2D assets?</p>
                    </motion.div>
                    <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        <button onClick={() => props.appMessage(true, "PIXEL ART", "We are working on this feature.", "COOL")}> 
                            <div>PIXEL ART</div>
                            <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.5}}} initial={{opacity: 0}} className="slime"></motion.div>
                        </button>
                    </motion.div>
                </motion.div>
            
                <motion.div  className="middleContent">
                    <div  className="middleContentContainer">
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                            <h1>{"DESIGN & DEPLOY"}</h1>
                            <h2 >WEB-DEVELOPMENT</h2>
                        </motion.div>
                        <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                            <p>At the moment we are working on designing and deploying Websites! Checkout some of our Designs!</p>
                        </motion.div>
                        <motion.div className="buttonContainer" animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                            <Link className="linkDesign" to={`/design/${Math.floor(Math.random() * 2 + 1)}`} id="getStartedButton"> 
                                DESIGN
                            </Link>
                        </motion.div>
                        
                    </div>
                    
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="topIllustration"></motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="bottomIllustration"></motion.div>

                </motion.div>

                
                <div  className="bottomContentContainer">
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1>{"STARTING TOGETHER"}</h1>
                        <h2 >LET'S CREATE A PROJECT</h2>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>You got a something in mind but not sure where to start? We can help you out :)</p>
                    </motion.div>
                    <motion.div className="buttonContainer" animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        <Link className="linkDesign" to="/home/connect" id="getStartedButton"> 
                            CONNECT
                        </Link>
                    </motion.div>
                    
                    <div className="scrollUpContainer">
                        <div onClick={scrollToTop} className="scrollUpIcon"></div>
                        <button onClick={scrollToTop}>SCROLL UP</button>
                    </div>
                </div>
            </div>
            
        </motion.div>
    );
}

export default ProjectsPage;
