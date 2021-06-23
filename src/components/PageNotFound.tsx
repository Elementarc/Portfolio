import React from 'react';
import {motion} from "framer-motion"
import "./styleSheets/pageNotFound.scss"

function hoverButton(buttonState: boolean){
    var getButtonStyle = document.getElementById("buttonStyleBox") as HTMLButtonElement
    if(buttonState === true){
        getButtonStyle.style.width ="100%"
        buttonState = false
    }
    else{
        getButtonStyle.style.width ="0%"
        buttonState = true
    }
}

const PageNotFound = (props: any) => {
    
    return (
        <div className="pageNotFoundContainer">
            <motion.div className="contentNotFound">
                <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                    <h1>{"ERROR 404"}</h1>
                    <br className="lineBreak" />
                    <h2>404 COULD'NT FIND THE PAGE</h2>
                    <motion.span initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 1, delay:0.8}}}>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} className="underlineIcon"></motion.span>
                    </motion.span>
                </motion.div>
                <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                    <p>We couldn't find the page you were looking for! Hopefully we can help you by providing you a way back to safety! :)</p>
                </motion.div>
                <motion.div onMouseEnter={() => hoverButton(true)} onMouseLeave={() => hoverButton(false)} animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                    <a href="/home" id="getStartedButton"> 
                        <div>GET BACK TO SAFETY</div>
                        <div id="buttonStyleBox" className="buttonStyleBox"></div>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default PageNotFound;
