import React from 'react';
import "./styleSheetPage/design.scss"
import {AnimatePresence, motion} from "framer-motion"
//components
import DesignHytale from "../components/DesignHytale"
const Design = () => {
    
    return (
        <motion.div animate={{opacity: 1, x: 0, transition: {duration: 0.7, type: 'spring'}}} initial={{opacity: 0, x: -1000}} exit={{opacity: 0, x: -1000, transition: {duration: 0.5, type: 'spring'}}} className="DesignPageContainer">
            <motion.div className="BackgroundSlide1"></motion.div>
        </motion.div>
    );
}

export default Design;
