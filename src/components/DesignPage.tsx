import React from 'react';
import {motion} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import "./styleSheets/designPage.scss"

//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
import { useParams } from 'react-router-dom';
const DesignPage = (props: any) => {
    var getDesignIndex: any = useParams()
    console.log(getDesignIndex)
    
    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <div id="transitionBackground" className="transitionBackground"></div>
            {getDesignIndex.viewIndex === "1" &&
                <HytaleDesignPreview designParameters={props.designParameters}/>
            }
            {getDesignIndex.viewIndex === "2" &&
                <div>test2</div>
            }

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
