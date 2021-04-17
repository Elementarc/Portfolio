import React from 'react';
import {motion} from "framer-motion"

import "./styleSheetPage/designPage.scss"

//components
import HytaleDesign from "../components/HytaleDesign"
const DesignPage = () => {
    return (
        <motion.div animate={{opacity: 1, transition: {duration: 2.5, type: 'spring'}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 1, delay: 0.15, type: 'spring'}}} className="DesignPageContainer">
            <HytaleDesign/>
            
            <motion.div animate={{opacity: 1, transition:{delay: 0.5, duration: 1}}} initial={{opacity: 0}} className="pageButtonContainer">
                <button className="pageButton">SEE DESIGN</button>
            </motion.div>
            <motion.div animate={{y: 10, opacity: 1, transition: {duration: 3, type: "spring"}}} initial={{y: 100, opacity: 0}} className='pageBottomDesign'></motion.div>
        </motion.div>
    );
}

export default DesignPage;
