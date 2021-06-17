import React from 'react';
import {motion} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import "./styleSheets/designPage.scss"

//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
const DesignPage = (props: any) => {
    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <HytaleDesignPreview designParameters ={props.designParameters}/>
            

            <motion.div animate={{opacity: 1, transition: {delay: 1}}} initial={{opacity: 0}} className="designManagerContainer" id="designManagerContainer">
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
