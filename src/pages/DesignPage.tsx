import React from 'react';
import {motion} from "framer-motion"
import {Route, Switch, useHistory, useLocation} from "react-router-dom"
import "./styleSheetPage/designPage.scss"

//components
import HytaleDesign from "../components/DesignPageComponents/HytaleDesign"
const DesignPage = () => {
    return (
        <motion.div animate={{opacity: 1, transition: {duration: 2.5, type: 'spring'}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 1, delay: 0.15, type: 'spring'}}} className="DesignPageContainer">
            <HytaleDesign/>
            <motion.div animate={{opacity: 1, transition:{delay: 0.5, duration: 1}}} exit={{opacity: 0, transition: {duration: 0.4}}} initial={{opacity: 0}} className="designPageButtonContainer">
                <button className="designButton" id="designButton">VIEW DESIGN</button>
            </motion.div>
            <motion.div animate={{y: 10, opacity: 1, transition: {duration: 3, type: "spring"}}} initial={{y: 100, opacity: 0}} exit={{y: 300, opacity: 0, transition: {duration: 0.3}}} className='designBottomIllustrationContainer' id="designBottomIllustrationContainer">
                <div className="designBottomIllustration" id="designBottomIllustration"></div>
            </motion.div>
        </motion.div>
    );
}

export default DesignPage;
