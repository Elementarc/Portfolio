//components
import React from 'react';
import {motion, useMotionValue} from "framer-motion"
import ScrollDown from "./ScrollDown"

//css
import "./styleSheets/homeContent.scss"
import { useLocation } from 'react-router';
//Toggles Animation for hovering over GetStarted button.
var buttonState = true
function hoverButton(){
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

const HomeContent = (props: any) => {
    const location = useLocation()
    //Tracking X value for mobile
    var x = useMotionValue(0)
    var opacity = useMotionValue(1)
    //Moves Homecontent along the X axis while pan
    function onPan(event: any, info: any) {
        var getItem = document.getElementById("homeContent") as HTMLDivElement
        getItem.style.transition = ""
        if(info.offset.x < 0){
            opacity.set(1 - (-info.offset.x / 300))
        }
        else{
            opacity.set(1 - (info.offset.x / 400))
        }
        x.set(info.offset.x / 4)
    }
    //If Enough pan velocity is reached it will automaticly change the url to the right index
    function onPanEnd(event: any, info: any) {
        var getItem = document.getElementById("homeContent") as HTMLDivElement
        getItem.style.transition = "0.6s"
        x.set(0)
        opacity.set(1)
        //Checks if gesture is to the left or right
        if(info.velocity.x < -100){
            //Forward
            //Changes locationIndex to the right Index
            if(props.locationIndex === 3){
                props.setLocationIndex(3)
            }
            else{
                props.setLocationIndex(props.locationIndex + 1)
                opacity.set(0)
            }
            
        }
        else if(info.velocity.x > 100){
            //Backwards
            //Changes locationIndex to the right Index
            if(props.locationIndex === 0){
                props.setLocationIndex(0)
            }
            else{
                props.setLocationIndex(props.locationIndex - 1)
                opacity.set(0)
            }
        }
    }

    //DESKTOP JSX
    if(window.innerWidth > 1000){
        //ROUTES
        if(location.pathname === "/home"){
            return (
                <motion.div animate={{y: 0,opacity: 1, transition: {delay: 0.25, duration: 1.2}}} initial={{y: -50, opacity: 0}} exit={{opacity: 0, transition: {duration: 0.4, delay: 0.15}}} id="homeContent" className="homeContent">
                    <motion.div className="content">
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                            <h1>{"SIMPLE & CLEAN"}</h1>
                            <h2>THE WORLD OF DESIGN</h2>
                        </motion.div>
                        <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                            <p>There are diffrent ways to talk to a customer and design is an important one. Let's create something unique. </p>
                        </motion.div>
                        <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                            <button onMouseEnter={hoverButton} onMouseLeave={hoverButton} id="getStartedButton"> 
                                <div>GET STARTED</div>
                                <div id="buttonStyleBox" className="buttonStyleBox"></div>
                            </button>
                        </motion.div>
                    </motion.div>
                    <ScrollDown/>
                </motion.div>
            );
        }
        else if(location.pathname === "/home/strength"){
            return(
                <motion.div animate={{y: 0,opacity: 1, transition: {delay: 0.25, duration: 1.2}}} initial={{y: -50, opacity: 0}} exit={{opacity: 0, transition: {duration: 0.4, delay: 0.15}}} id="homeStrengthContent" className="homeStrengthContent">
                    <div className="content">
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                            <h1>{"STRENGTH & PASSION"}</h1>
                            <h2>COMFORT UTILITIES</h2>
                        </motion.div>
                        <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                            <p>Tools will make things easier and a good decision can mean the world! We want to make sure everything works smoothly.</p>
                        </motion.div>
                        <ScrollDown/>
                    </div>
                </motion.div>
            )
        }
        else return null
    }
    //MOBILE JSX
    else {
        if(location.pathname === "/home"){
            return (
                <motion.div style={{x: x, opacity: opacity}} onPan={onPan} onPanEnd={onPanEnd} animate={{y: 0, opacity: 1, transition: {delay: 0.25, duration: 1.2}}} initial={{y: -20, opacity: 0}} exit={{opacity: 0, transition: {duration: 0.4, delay: 0}}} id="homeContent" className="homeContent">
                    <div className="content">
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                            <h1>{"SIMPLE & CLEAN"}</h1>
                            <h2>THE WORLD OF DESIGN</h2>
                        </motion.div>
                        <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                            <p>There are diffrent ways to talk to a customer and design is an important one. Let's create something unique. </p>
                        </motion.div>
                        <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                            <button onMouseEnter={hoverButton} onMouseLeave={hoverButton} id="getStartedButton"> 
                                <div>GET STARTED</div>
                                <div id="buttonStyleBox" className="buttonStyleBox"></div>
                            </button>
                        </motion.div>
                        <ScrollDown/>
                    </div>
                </motion.div>
            );
        }
        else if(location.pathname === "/home/strength"){
            return(
                <motion.div style={{x: x, opacity: opacity}} onPan={onPan} onPanEnd={onPanEnd} animate={{y: 0,opacity: 1, transition: {delay: 0.5, duration: 1.2}}} initial={{y: -20, opacity: 0}} exit={{opacity: 0, transition: {duration: 0.4, delay: 0}}} id="homeContent" className="homeStrengthContent">
                    <div className="content">
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                            <h1>{"STRENGTH & PASSION"}</h1>
                            <h2>COMFORT UTILITIES</h2>
                        </motion.div>
                        <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                            <p>Tools will make things easier and a good decision can mean the world! We want to make sure everything works smoothly.</p>
                        </motion.div>
                        <ScrollDown/>
                    </div>
                </motion.div>
            )
        }
        else return null
    }
}

export default HomeContent;



