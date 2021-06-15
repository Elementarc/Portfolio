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
const hytaleDesign = () => {

    return (
        <motion.div initial={{opacity: 0, scale: 3}} animate={{opacity: 1, scale: 1, transition: {duration: 0.2, delay: 0.2}}} exit={{opacity: 0, transition: {duration: 0.2}}} className="hytale">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}  className="background"></motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}  className="backgroundBlur"></motion.div>

            <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0, transition: {duration: 0.7, delay: 1}}} className="hytaleNavContainer">
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
                        THE GAME
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
