import React, {useEffect} from 'react';
import {motion} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import "./styleSheets/designPage.scss"

//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';

//prevents triggering changeDesignPreview unless false
var viewIndexCockblock = false
var changeDesignTimer: any
const DesignPage = (props: any) => {
    //getting designPageIndex to render right designPreview
    const history = useHistory()
    const getParams: any = useParams()

    //Sets viewIndex and viewState on load of designPage to then render right designPreview Component
    useEffect(() =>{
        if(props.designParameters.get("viewState") === null){
            props.designParameters.set("viewState", "false")
            history.push(window.location.pathname + "?" + props.designParameters.toString())
        }
    },[history, props.designParameters])

    //cleanup
    useEffect(() =>{
        
        return(() =>{
            clearTimeout(changeDesignTimer)
        })
    },[])


    //Wheel function that changes designPreview
    useEffect(() =>{
        function changeDesignPreview(e: any){
            //wheelUp
            if(e.deltaY < 0){
                if(viewIndexCockblock === false && props.designParameters.get("viewState") === "false"){
                    history.replace(`/design/${parseInt(getParams.viewIndex, 10) + 1}`)
                    viewIndexCockblock = true
                    changeDesignTimer = setTimeout(() => {
                        viewIndexCockblock = false
                    }, 1000);
                }
            }
            //wheelDown
            else{
                if(viewIndexCockblock === false && props.designParameters.get("viewState") === "false"){
                    history.replace(`/design/${parseInt(getParams.viewIndex, 10) - 1}`)
                    viewIndexCockblock = true
                    changeDesignTimer = setTimeout(() => {
                        viewIndexCockblock = false
                    }, 1000);
                }
            }
            
        }
        window.addEventListener("wheel", changeDesignPreview)
        return(() =>{
            window.removeEventListener("wheel", changeDesignPreview)
        })
    },[props, history])

    



    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <div id="transitionBackground" className="transitionBackground"></div>
            
            {getParams.viewIndex === "1" &&
                <div>
                    <HytaleDesignPreview designParameters={props.designParameters} getParams={getParams}/>
                </div>
            }
            {getParams.viewIndex === "2" &&
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
