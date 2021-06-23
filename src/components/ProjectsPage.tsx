import React, {useEffect} from 'react';
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
//css
import "./styleSheets/projectPage.scss"

function scrollToTop(){
    var getAllContainer = document.getElementById("allContentContainer") as HTMLDivElement

    if(window.innerWidth > 900){
        getAllContainer.scrollTo(0, 0)

    }
    else{
        window.scrollTo(0, 0)
    }
}
function ComingSoon(state: boolean){
    var getComingSoonContainer = document.getElementById("comingSoonContainer") as HTMLDivElement

    if(state === true){
        getComingSoonContainer.style.opacity = "1"
        getComingSoonContainer.style.pointerEvents = "all"
        document.body.style.overflow = "hidden"
    }
    else{
        getComingSoonContainer.style.opacity = "0"
        getComingSoonContainer.style.pointerEvents = "none"
        document.body.style.overflow = "unset"
    }

}
const ProjectsPage = () => {
    //Changes navColor based on ContentScrollscrollY
    useEffect(() =>{
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement
        var getAllContainer = document.getElementById("allContentContainer") as HTMLDivElement

        function changeNavWhenScroll(){
            console.log()
            
            if(window.innerWidth > 900){
                if(getAllContainer.scrollTop > 0){
                    getNavIcon.style.fill = `#000000`
                    
                    if(getAllContainer.scrollTop >= 800){
                        getNavIcon.style.fill = `#ffffff`
                    }
                    if(getAllContainer.scrollTop >= 1550){
                        getNavIcon.style.fill = `#000000`
                    }
                }
            }

        }
        getAllContainer.addEventListener("scroll", changeNavWhenScroll)

        return(() =>{
            getAllContainer.removeEventListener("scroll", changeNavWhenScroll)
        })
    },[])
    //Changin NavIcon Color for better ui/ux
    useEffect(() => {
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement

        if(window.innerWidth > 900){
            getNavIcon.style.fill = "#000000"
        }
    }, []);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.4}}} className="ProjectContainer" id="ProjectContainer">
            
            <div className="comingSoonContainer" id="comingSoonContainer">
                <div className="comingSoonBackground"></div>
                <div className="comingSoon">
                    <h1>ON IT'S WAY</h1>
                    <p>We're currently working on this feature.</p>
                    <button onClick={() => ComingSoon(false)}>OK</button>
                </div>
            </div>

            <div className="allContentContainer" id="allContentContainer">
                <motion.div className="content">
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1>{"PIXEL ART"}</h1>
                        <br className="lineBreak" />
                        <h2>THE 2D DIMENSION</h2>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 1, delay:0.8}}}>
                            <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} className="underlineIcon"></motion.span>
                        </motion.span>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>We're a huge fan of 2D and one of our future-dreams would be to release our own pixel art game, but that can wait for the time being. Meanwhile, how about some 2D assets?</p>
                    </motion.div>
                    <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        <button onClick={() => {ComingSoon(true)}}> 
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
                            <Link className="linkDesign" to="/design" id="getStartedButton"> 
                                DESIGN
                            </Link>
                        </motion.div>
                        
                    </div>
                    
                    <div className="topIllustration"></div>
                    <div className="bottomIllustration"></div>

                </motion.div>

                
            <div className="bottomContent">
                    <div  className="bottomContentContainer">

                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                            <h1>{"STARTING TOGETHER"}</h1>
                            <h2 >LET'S CREATE A PROJECT</h2>
                        </motion.div>
                        <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                            <p>You got a something in mind but need a little help? How about we start it together.</p>
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
        </div>
        </motion.div>
    );
}

export default ProjectsPage;
