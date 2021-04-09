import React from 'react';
import {Link} from "react-router-dom"
import {AnimatePresence, motion} from "framer-motion"
import "./styleSheetPage/design.scss"

const Design = () => {
    return (
        <div className="DesignPageContainer">
            <motion.div animate={{opacity: 1, transition: {delay: 0.2, duration: 0.8}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} className="Slide1">

            </motion.div>
        </div>
    );
}

export default Design;
