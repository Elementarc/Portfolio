import React from 'react';
import {motion, AnimatePresence, useAnimation} from "framer-motion"
import {ReactComponent as HytaleHomeIcon} from "../../../assets/icons/hytaleDesign/HomeIcon.svg"
import "./styleSheets/hytaleDesign.scss"
import { useEffect } from 'react';
//Using this variable to switch between pages on hytaleDesign
var hytaleDesignTrack = 0
//Function to give homeIcon color when hovered
function hytaleHomeIconHover(state: boolean){
    var getHytaleHomeIcon = document.getElementById("hytaleHomeIcon") as HTMLDivElement

    if(state === true){
        getHytaleHomeIcon.setAttribute("fill", "rgb(250, 220, 121)")

    }
    else{
        getHytaleHomeIcon.setAttribute("fill", "rgb(255, 255, 255)")
    }

    if(hytaleDesignTrack === 0){
        getHytaleHomeIcon.setAttribute("fill", "rgb(250, 220, 121)")
    }
}

const HytaleDesign = (props: any) => {
    const hytaleAnimation = useAnimation()
    useEffect(() =>{
        //Start
        var animationTimer: any
        if(props.designQuery.get("viewState") === "true"){
            animationTimer = setTimeout(() => {
                hytaleAnimation.start({
                    opacity: 1,
                    pointerEvents: 'all',
                }) 
            }, 500);
        }
        //Exit
        else if(props.designQuery.get("viewState") === "false"){

            //Desktop
            if(window.innerWidth > 900){
                animationTimer = setTimeout(() => {
                    hytaleAnimation.start({
                        opacity: 0,
                        pointerEvents: 'none',
                        transition: {duration: 0}
                    })
                }, 500);
            }
            //Mobile
            else{
                var getHytale = document.getElementById("hytale") as HTMLDivElement

                getHytale.scrollTo(0, 0)
                animationTimer = setTimeout(() => {
                    hytaleAnimation.start({
                        opacity: 0,
                        pointerEvents: 'none',
                        transition: {duration: 0}
                    })
                }, 0);
            }
            
            
        }
        return(() =>{
            clearTimeout(animationTimer)
        })
    },[props.designQuery, hytaleAnimation])
    return (
        <AnimatePresence>
            <motion.div animate={hytaleAnimation} className="hytaleDesignContainer" id="hytale">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}  className="designBackgroundImage">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}  className="backgroundBlur"></motion.div>
                </motion.div>

                <div className="designContent">
                    <motion.h1 initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}}>COMING SOON</motion.h1>
                    <motion.h2 initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}}>A NEW DAWN HAS ARRIVED</motion.h2>
                    <div className="buttonContainer">
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5}}} className="linesContainer">
                            <span className="lineR"/>
                            <span className="lineL"/>
                        </motion.div>
                        <motion.button initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.9}}} className="SignUpBtn">SIGN-UP</motion.button>
                    </div>


                    <motion.div initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 1.3}}} className="informationContainer">
                        <div className="infoContent">
                            <h2>NEW ADVENTURE</h2>
                            <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure. New demons were born.</p>
                            <h3>LEARN MORE</h3>
                        </div>

                        <div className="youtubeWindowContainer">
                            <div className="youtubeWindow">
                                <div className="innerBorder"/>
                                <div className="playButton"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <div className="greyBar"></div>

                
                <div className="panelsContainer">

                    <div className="panel panel1">
                        <div className="panelBlur"></div>
                        <div className="panelBackground panel1Background"></div>
                        <div className="panel1Content">
                            <h1>NEW ENEMIES</h1>
                            <p>Fight new and stronger enemies with special loot and more! Are you ready for a new challange? </p>
                            <button>EXPLORE</button>
                        </div>
                    </div>

                    <div className="panel panel2">
                        <div className="panelBackground panel2Background"></div>
                        <div className="panelBlur"></div>
                        <div className="panel2Content">
                            <h1>UNIQUE MOUNTS</h1>
                            <p>But I must explain mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account</p>
                        </div>
                    </div>

                    <div className="panel panel3">
                        <div className="panelBlur"></div>
                        <div className="panelBackground panel3Background"></div>
                        <div className="panel3Content">
                            <h1>ENHANCED CLASS SYSTEM</h1>
                            <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account</p>
                        </div>
                    </div>

                    <div className="panel panel4">
                        <div className="panelBlur"></div>
                        <div className="panelBackground panel4Background"></div>
                        <div className="panel4Content">
                            <h1>RARE PETS</h1>
                            <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account</p>
                        </div>
                    </div>

                    <div className="panel panel5">
                        <div className="panelBlur"></div>
                        <div className="panelBackground panel5Background"></div>
                        <div className="panel5Content">
                            <h1>DANGEROUS ZONES</h1>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was.</p>
                        </div>
                    </div>

                </div>
                
                <div className="browseMoreContainer">
                    <button>BROWSE MORE</button>
                    <div className="blackBar"></div>
                </div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.7, delay: 1}}} className="hytaleNavContainer">
                    <ul>
                        <div className="homeIcon" onMouseEnter={() =>hytaleHomeIconHover(true)} onMouseLeave={() =>hytaleHomeIconHover(false)}>
                            <HytaleHomeIcon id="hytaleHomeIcon" className="hytaleHomeIcon hytaleNavItem"/>
                            <div className="sTarget"></div>
                        </div>

                        <span/>

                        <li className="hytaleNavItem">
                            FEATURE
                            <div className="hytaleNavShadow" />
                        </li>

                        <span/>
                        <li className="hytaleNavItem">
                            NEWS
                            <div className="hytaleNavShadow" />
                        </li>

                        <span/>
                        <li className="hytaleNavItem">
                            MODES
                            <div className="hytaleNavShadow"/>
                        </li>

                        <span/>
                        <li className="hytaleNavItem">
                            SHOP
                            <div className="hytaleNavShadow"/>
                        </li>
                        

                        <div className="signIn">
                            SIGN IN
                        </div>
                    </ul>
                </motion.div>
            

            </motion.div>
        </AnimatePresence>
    );
}

export default HytaleDesign;
