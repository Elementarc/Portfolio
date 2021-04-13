import React from 'react';
import {motion} from "framer-motion"

//css
import "./styleSheets/hytaleDesign.scss"

const DesignHytale = () => {
    return (
        <motion.div className="BackgroundSlide1">
            <motion.div  animate={{opacity: 1, transition: {delay: 0.8, duration: 0.5}}} initial={{opacity: 0}}>
                <button className="hytaleDesign">SEE DESIGN</button>
            </motion.div>
            <motion.div animate={{y: 0, transition: {delay: 0.5, duration: 1, type: 'spring'}}} exit="out" initial={{y: 200}} className="bottomDeco"></motion.div>
        </motion.div>
    );
}

export default DesignHytale;
