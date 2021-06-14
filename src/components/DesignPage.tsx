import React from 'react';
import {motion} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import "./styleSheets/designPage.scss"

//components
import HytaleDesign from "./DesignPageComponents/HytaleDesign"
const DesignPage = (props: any) => {
    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <HytaleDesign/>
            
            <motion.div animate={{y: 10, opacity: 1, transition: {duration: 3, type: "spring"}}} initial={{y: 100, opacity: 0}} exit={{y: 300, opacity: 0, transition: {duration: 0.3}}} className='designBottomIllustrationContainer' id="designBottomIllustrationContainer">
                <div className="designBottomIllustration" id="designBottomIllustration"></div>
            </motion.div>
            <div className="bottomGradient"></div>

            <motion.div animate={{opacity: 1, transition: {delay: 1}}} initial={{opacity: 0}} className="designManagerContainer">
                <div className="sectionBackground"></div>
                <DesignSectionIcon className="designSectionIcon"/>
                <span />
                <DesignSectionIcon className="designSectionIconTarget"/>
                <span />
                <DesignSectionIcon className="designSectionIcon"/>
            </motion.div>

        </motion.div>
    );
}

export default DesignPage;
