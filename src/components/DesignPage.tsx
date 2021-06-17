import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import "./styleSheets/designPage.scss"

//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
import { useHistory, useLocation, useParams } from 'react-router-dom';

const DesignPage = (props: any) => {
    //getting designPageIndex to render right designPreview
    const history = useHistory()
    

    

    useEffect(() =>{
        props.designParameters.set("viewIndex", "1")
        props.designParameters.set("viewState", "false")
        history.push(window.location.pathname + "?" + props.designParameters.toString())
    },[])



    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <div id="transitionBackground" className="transitionBackground"></div>
            
            {parseInt(props.designParameters.get("viewIndex"), 10) === 1 &&
                <HytaleDesignPreview designParameters={props.designParameters}/>
            }
            {parseInt(props.designParameters.get("viewIndex"), 10) === 2 &&
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
