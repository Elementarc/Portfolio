import React from 'react';
import {motion} from "framer-motion"
import {ReactComponent as HytaleHomeIcon} from "../../../assets/icons/hytaleDesign/HomeIcon.svg"
import "./styleSheets/hytaleDesign.scss"
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

const hytaleDesign = (props: any) => {

    return (
        <motion.div initial={{opacity: 0, scale: 3}} animate={{opacity: 1, scale: 1, transition: {duration: 0.2, delay: 0.2}}} exit={{opacity: 0, transition: {duration: 0.2}}} className="hytaleDesignContainer" id="hytale">

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}  className="designBackgroundImage">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}  className="backgroundBlur"></motion.div>
            </motion.div>

            <div className="designContent">
                <motion.h1 initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}}>COMING SOON</motion.h1>
                <motion.h2 initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}}>A NEW DAWN HAS ARRIVED</motion.h2>
                <motion.button initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.9}}} className="SignUpBtn">SIGN-UP</motion.button>


                <motion.div initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 1.3}}} className="informationContainer">
                    <div className="infoContent">
                        <h2>NEW ADVENTURE</h2>
                        <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how. But I must explain to you how all.</p>
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
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account</p>
                        <div>EXPLORE</div>
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
    );
}

export default hytaleDesign;
