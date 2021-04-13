import React from 'react';
import "./styleSheetPage/design.scss"
import {motion} from "framer-motion"
//components
import HytaleDesign from "../components/HytaleDesign"
const Design = () => {
    return (
        <motion.div animate={{opacity: 1, transition: {duration: 2.5, type: 'spring'}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 1, delay: 0.15, type: 'spring'}}} className="DesignPageContainer">
            <HytaleDesign/>
        </motion.div>
    );
}

export default Design;
