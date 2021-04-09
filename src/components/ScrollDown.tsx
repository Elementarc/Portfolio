import React, {useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheets/scrollDown.scss"

//icons
import {ReactComponent as ScrollDownIcon} from "../assets/icons/DownArrowIcon.svg"

//Props for animation
var interfaceAnimation = {
    initial: {
        opacity: 0,
    },
    in: {
        transition: {delay: 2, duration: 1},
        opacity: 1,
    },
    out: {
        transition: {delay: 0, duration: 0},
        opacity: 0,
    },
}
const ScrollDown = () => {
    function scrolldownContainer() {
        var getScrolldownContainer = document.getElementById("ScrolldownContainer") as HTMLDivElement
        var scrollY: number = window.scrollY

        if(scrollY > 1){
            getScrolldownContainer.style.opacity = "0"
        }
        else{
            getScrolldownContainer.style.opacity = "1"
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", scrolldownContainer)
        return () => {
            window.removeEventListener("scroll", scrolldownContainer)
        };
    }, []);
    
    return (
        <motion.div initial="initial" exit="out" animate="in" variants={interfaceAnimation} id="ScrolldownContainer" className="ScrolldownContainer">
            <ScrollDownIcon/>
        </motion.div>
    );
}

export default ScrollDown;