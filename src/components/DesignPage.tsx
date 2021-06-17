import React, {useEffect} from 'react';
import {motion, AnimatePresence} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import "./styleSheets/designPage.scss"
//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
import { useHistory, useParams , Route, Switch, useLocation} from 'react-router-dom';
import { useState } from 'react';

//prevents triggering changeDesignPreview unless false
var viewIndexCockblock = false
var changeDesignTimer: any

const DesignPage = (props: any) => {
    //Animation between routes
    const [Animation, setAnimation] = useState({
        init: {
            y: 0,
            scale: 0,
            opacity: 0,
        },
        in: {
            y: 0,
            scale: 1,
            transition: {duration: 0},
            opacity: 1,
        },
        out: {
            y: 0,
            scale: 0,
            transition: {duration: 0},
            opacity: 0,
        }
    });
    const history = useHistory()
    const getParams: any = useParams()
    const location = useLocation()
    //Sets viewIndex and viewState on load of designPage to then render right designPreview Component
    useEffect(() =>{
        if(props.designQuery.get("viewState") === null){
            props.designQuery.set("viewState", "false")
            history.push(window.location.pathname + "?" + props.designQuery.toString())
        }
    },[history, props.designQuery])

    //cleanup
    useEffect(() =>{
        
        return(() =>{
            clearTimeout(changeDesignTimer)
        })
    },[])


    //Wheel function that changes designPreview
    useEffect(() =>{
        function previewSwitchAnimations(direction: string){

            if(direction === "upwards"){
                setAnimation({
                    init: {
                        y: -1200,
                        scale: 0.2,
                        opacity: 0,
                    },
                    in: {
                        y: 0,
                        scale: 1,
                        transition: {duration: 1},
                        opacity: 1,
                    },
                    out: {
                        y: 800,
                        scale: 0.2,
                        transition: {duration: 1},
                        opacity: 0,
                    }
                })
            }
            else{
                setAnimation({
                    init: {
                        y: 800,
                        scale: 0.2,
                        opacity: 0,
                    },
                    in: {
                        y: 0,
                        scale: 1,
                        transition: {duration: 1},
                        opacity: 1,
                    },
                    out: {
                        y: -1200,
                        scale: 0.2,
                        transition: {duration: 1},
                        opacity: 0,
                    }
                })
                
            }
        }
        function changeDesignPreview(e: any){
            //wheelUp
            if(window.innerWidth > 1300 && window.innerHeight >= 950){
                if(e.deltaY < 0){
                    if(viewIndexCockblock === false && props.designQuery.get("viewState") === "false"){
                        if(parseInt(getParams.viewIndex, 10) > 1){
                            previewSwitchAnimations("upwards")
                            history.replace(`/design/${parseInt(getParams.viewIndex, 10) -1}`)
                            viewIndexCockblock = true
                            changeDesignTimer = setTimeout(() => {
                                viewIndexCockblock = false
                            }, 1000);
                        }
                    }
                }
                //wheelDown
                else{
                    if(viewIndexCockblock === false && props.designQuery.get("viewState") === "false"){
                        if(parseInt(getParams.viewIndex, 10) < 5){
                            previewSwitchAnimations("backwards")
                            history.replace(`/design/${parseInt(getParams.viewIndex, 10) + 1}`)
                            viewIndexCockblock = true
                            changeDesignTimer = setTimeout(() => {
                                viewIndexCockblock = false
                            }, 1000);
                        }
                    }
                }
            }
        }
        //Using keydownListener function to disable wheel event to properly zoom in and out without changing home section/urls
        function keydownListener(e: any) {
            if(e.which === 17){
                window.removeEventListener("wheel", changeDesignPreview)
            }
        }
        //Using keyupListener function to enable wheel event back to properly switch between sections section/urls
        function keyupListener(e: any) {
            if(e.which === 17){
                window.addEventListener("wheel", changeDesignPreview)
            }
        }

        window.addEventListener("keydown", keydownListener)
        window.addEventListener("keyup", keyupListener)

        window.addEventListener("wheel", changeDesignPreview)
        return(() =>{
            window.removeEventListener("wheel", changeDesignPreview)
            window.removeEventListener("keydown", keydownListener)
            window.removeEventListener("keyup", keyupListener)
        })
    },[props, history, getParams.viewIndex])

    



    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <div id="transitionBackground" className="transitionBackground"></div>
                
            <div className="designsPreviewGridContainer">
                <AnimatePresence>
                    <Switch location={location} key={getParams.viewIndex}>

                        <Route strict path="/design/1">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                <HytaleDesignPreview designQuery={props.designQuery} getParams={getParams}/>
                            </motion.div>
                        </Route>

                        <Route strict path="/design/2">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                
                            </motion.div>
                        </Route>
                    </Switch>
                </AnimatePresence>  
            </div>

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
