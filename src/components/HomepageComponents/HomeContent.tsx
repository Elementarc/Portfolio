//components
import React from 'react';
import {motion, useMotionValue} from "framer-motion"
import {Link, useHistory} from "react-router-dom"

import {ReactComponent as ContactBox} from "../../assets/svgs/contactBox.svg"
import owl from "../../assets/images/Owl.jpg"
import art from "../../assets/images/blood.jpg"
import forest from "../../assets/images/forest.jpg"
//css
import "./styleSheets/homeContent.scss"
import { useLocation } from 'react-router';
//Toggles Animation for hovering over GetStarted button.
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

var desktopAnimationProps = {
    init: {
        y: -50,
        opacity: 0,
    },
    in:{
        y: 0,
        opacity: 1, 
        transition: {delay: 0.25, duration: 1.2},
    },
    out: {
        opacity: 0, 
        transition: {duration: 0.4, delay: 0.15}
    }
}
var mobileAnimationProps = {
    init: {
        y: -20,
        opacity: 0,
    },
    in:{
        y: 0, 
        opacity: 1, 
        transition: {delay: 0.25, duration: 1.2}
    },
    out: {
        opacity: 0, 
        transition: {duration: 0.4, delay: 0}
    }
}

const HomeContent = (props: any) => {
    window.onload = () => {window.scrollTo(0, 1)}
    const history = useHistory()
    const path = useLocation().pathname.toLowerCase()
    //Tracking X value for mobile drag animation
    var x = useMotionValue(0)
    var opacity = useMotionValue(1)
    //Moves Homecontent along the X axis while pan
    function onPan(event: any, info: any) {
        if(window.innerWidth < 900){
            var getItem = document.getElementById("homeContent") as HTMLDivElement
            getItem.style.transition = ""
            //reduces content opacity when moving finger left or right for better ux
            if(info.offset.x < 0){
                opacity.set(1 - (-info.offset.x / 300))
            }
            else{
                opacity.set(1 - (info.offset.x / 400))
            }
            x.set(info.offset.x / 4)
        }
    }
    //If Enough pan velocity is reached it will automaticly change the url to the right index
    function onPanEnd(event: any, info: any) {
        if(window.innerWidth < 900){
            var getItem = document.getElementById("homeContent") as HTMLDivElement
            getItem.style.transition = "0.6s"
            x.set(0)
            opacity.set(1)
            
            //Checks if gesture is to the left or right
            if(info.velocity.x < -150){
                //Forward
                //Changes locationIndex to the right Index
                if(props.locationIndex < 3){
                    props.setLocationIndex(props.locationIndex + 1)
                    props.setUrlBasedOnLocationIndex(props.locationIndex + 1)
                    opacity.set(0)
                }
            }
            else if(info.velocity.x > 150){
                //Backwards
                //Changes locationIndex to the right Index
                if(props.locationIndex > 0){
                    props.setLocationIndex(props.locationIndex - 1)
                    props.setUrlBasedOnLocationIndex(props.locationIndex - 1)
                    opacity.set(0)
                }
            }
        }
    }
    
    //ROUTES
    if(path === "/home"){
        return (
            <motion.div style={{x: x, opacity: opacity}} onPan={onPan} onPanEnd={onPanEnd} animate="in" exit="out" initial="init" variants={window.innerWidth > 900 ? desktopAnimationProps : mobileAnimationProps} id="homeContent" className="homeContent">
                <motion.div className="content">
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1>{"SIMPLE & CLEAN"}</h1>
                        <br className="lineBreak" />
                        <h2>THE WORLD OF CREATIVITY</h2>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 1, delay:0.8}}}>
                            <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} className="underlineIcon"></motion.span>
                        </motion.span>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>There are different ways to talk to a customer and design is an important one. Let's create something unique. </p>
                    </motion.div>
                    <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        <button onMouseEnter={() => hoverButton(true)} onClick={() => {props.setLocationIndex(3); history.replace("/home/connect")}} onMouseLeave={() => hoverButton(false)} id="getStartedButton"> 
                            <div>GET STARTED</div>
                            <div id="buttonStyleBox" className="buttonStyleBox"></div>
                        </button>
                    </motion.div>
                </motion.div>
                <motion.div  className="homepageMenuContainer">
                    <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition:{duration: 0.9, delay: 2}}} exit={{y: 200, opacity: 0, transition: {duration: 1}}} className="homepageMenu">
                        <div className="item item1">
                            <span className="bottomBorder"/>
                            <img loading="eager" alt="owl" src={owl} className="item1Background"></img>

                            <div className="item1Content">
                                <h1>Design</h1>
                                <p> Experience a world full of different designs! Maybe  there even is more</p>
                                <Link to={`/design`}>SEE DESIGNS</Link>
                            </div>
                        </div>
                        <div className="item item2">
                            <div className="imageBlur"/>
                            <span className="bottomBorder"/>
                            
                            <img src={art} alt="blood" loading="eager" className="item2Background"></img>
                            <div className="item2Content">
                                <h1>Pixel-Art</h1>
                                <p>!We now do Pixel art</p>
                                <Link to="/design">SEE ART-WORK</Link>
                            </div>
                        </div>
                        <div className="item item3">
                            <div className="imageBlur"/>
                            <span className="bottomBorder"/>
                            
                            <img src={forest} alt="forest" loading="eager" className="item3Background"></img>

                            <div className="item3Content">
                                <h1>Project</h1>
                                <p>Here you can see the projects we are currently working on</p>
                                <Link to="/projects">SEE PROJECTS</Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                
                <motion.div initial={{y: 100, opacity: 0}} animate={{opacity: 1, y: 0, transition:{duration: 1.5, delay: 0.5, type: 'spring'}}} className="bottomBackground"/>
            </motion.div>
        );
    }
    else if(path === "/home/news"){
        return (
            <motion.div style={{x: x, opacity: opacity}} onPan={onPan} onPanEnd={onPanEnd} animate="in" exit="out" initial="init" variants={window.innerWidth > 900 ? desktopAnimationProps : mobileAnimationProps} id="homeContent" className="homeNews">
                <motion.div className="content">
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1>{"21 June, 2021"}</h1>
                        {window.innerWidth > 900 &&
                            <br />
                        }
                        <h2>NEW HYTALE DESIGN</h2>
                        <motion.span initial={{opacity: 0}} animate={{opacity: 1,transition: {duration: 1, delay:0.8}}}>
                            <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} className="underlineIcon"></motion.span>
                        </motion.span>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>We made a new fan-design for an up coming game called Hytale. You might like it.</p>
                    </motion.div>
                    <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        <button onMouseEnter={() => hoverButton(true)} onClick={() => {history.push("/design/1?viewState=false")}} onMouseLeave={() => hoverButton(false)} id="getStartedButton"> 
                            <div>CHECK IT OUT</div>
                            <div id="buttonStyleBox" className="buttonStyleBox"></div>
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6,delay: 2}}} exit={{y: 150, transition: {duration: 1}}} className="backgroundImageContainer">
                    <div className="backgroundImage"></div>
                </motion.div>
            </motion.div>
        );
    }
    else if(path === "/home/connect"){
        return(
            <motion.div style={{x: x, opacity: opacity}} onPan={onPan} onPanEnd={onPanEnd} animate="in" exit="out" initial="init" variants={window.innerWidth > 900 ? desktopAnimationProps : mobileAnimationProps} id="homeContent" className="homeConnect">
                <motion.div className="content">
                    
                    <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} >
                        <h1>{"CONNECT & WORK"}</h1>
                        <h2>THE STEP TO GET STARTED</h2>
                    </motion.div>
                    <motion.div animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.9}}} initial={{opacity: 0, y: -20}} >
                        <p>Less and less people dare to take steps that are needed to become successful. Be different! Ready to start something big?</p>
                    </motion.div>
                    <motion.div animate={{opacity: 1, transition: {duration: 0.8, delay: 1.3}}} initial={{opacity: 0}} >
                        
                        <button onClick={() => history.push("/contact/form")} onMouseEnter={() => hoverButton(true)} onMouseLeave={() => hoverButton(false)} id="getStartedButton"> 
                            <div>CONTACT</div>
                            <div id="buttonStyleBox" className="buttonStyleBox"></div>
                        </button>
                        
                    </motion.div>

                    <motion.p animate={{opacity: 1, transition: {duration: 0.5, delay: 1.8}}} initial={{opacity: 0}} className="or">OR</motion.p>

                    <div className="contactContainer">

                        <Link to = "/projects" className="firstLink">
                            <motion.div animate={{scale: 1,opacity: 1, transition: {delay: 2, duration: 0.7, type: "spring"}}} initial={{scale: 0.2, opacity: 0}} className="box box1">
                                <div className="work">PROJECTS</div>
                                <ContactBox id="contactBoxSVG" className="contactBoxSVG"/>
                            </motion.div>
                        </Link>

                        <a href="https://discord.gg/e3EeFZnRvQ" target="_blank" rel="noreferrer" className="secondLink">
                            <motion.div animate={{scale: 1,opacity: 1, transition: {delay: 2.2, duration: 0.7, type: "spring"}}} initial={{scale: 0.2, opacity: 0}} className="box box2">
                                <div className="discord"></div>
                                <ContactBox className="contactBoxSVG"/>
                            </motion.div>
                        </a>
                        
                        <a href="https://github.com/Arctyp" target="_blank" rel="noreferrer" className="thirdLink">
                            <motion.div animate={{scale: 1,opacity: 1, transition: {delay: 2.4, duration: 0.7, type: "spring"}}} initial={{scale: 0.2, opacity: 0}} className="box box3">
                                <div className="github"></div>
                                <ContactBox className="contactBoxSVG"/>
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        )
    }
    else return null
}

export default HomeContent;



