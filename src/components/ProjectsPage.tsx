import React from 'react';
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
//css
import "./styleSheets/projectPage.scss"

const ProjectsPage = () => {
    

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}} className="ProjectContainer">
            
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
                    <p>We're a huge fan of 2D games and one of our dreams would be to release our own pixel art game, but that can wait for the time being. Meanwhile, how about some 2D Assets?</p>
                </motion.div>
                <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                    <button> 
                        <div>PIXEL ART</div>
                    </button>
                </motion.div>
            </motion.div>
        
            <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1,y: 0, transition:{duration: 1, delay: 2}}} className="middleContent">
            
                <div  className="middleContentContainer">
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1>{"DESIGN & DEPLOY"}</h1>
                        <h2>WEB-DEVELOPMENT</h2>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>At the moment we are working on designing and deploying Websites! Checkout some of our Designs!</p>
                    </motion.div>
                    <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        <button id="getStartedButton"> 
                            <Link to="/design">DESIGN</Link>
                        </button>
                    </motion.div>
                </div>
                
                <div className="topIllustration"></div>
                <div className="bottomIllustration"></div>

            </motion.div>

        <div className="bottomContent">

        </div>

        </motion.div>
    );
}

export default ProjectsPage;
