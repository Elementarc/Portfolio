import React, {useEffect} from 'react';
import {motion, AnimatePresence} from "framer-motion"
import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import { useHistory, useParams , Route, Switch, useLocation} from 'react-router-dom';
import { useState } from 'react';
import "./styleSheets/designPage.scss"
//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
import BeautyDesignPreview from "./DesignPageComponents/BeautyDesignPreview"
//prevents triggering changeDesignPreview unless false
var viewIndexCockblock = false
var changeDesignTimer: any



//Array of jsx secitonIcons
var sectionManagerIcons: any[] = []
//Currently available previews
var previews = 2
const DesignPage = (props: any) => {
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

    //Changing state whenever use Switches between designPreview through function: previewSwitchAnimations(direction: string)
    const [Animation, setAnimation] = useState({
        in: {
            y: [0, 0, 0],
            scale: [1, 1, 1],
            transition: {duration: 1, delay: 0},
            opacity: 1,
        },
        out: {
            y: [0, 0, 0],
            scale: [1, 1, 1],
            transition: {duration: 1},
            opacity: 1,
        }
    });
    //Wheel function that changes designPreview
    useEffect(() =>{
        function previewSwitchAnimations(direction: string){
            if(window.innerWidth > 900){

                if(direction === "upwards"){
                    setAnimation({
                        in: {
                            y: [-1350, 0, 0],
                            scale: [0.8, 0.8, 1],
                            transition: {duration: 0.8, delay: 0.5},
                            opacity: 1,
                        },
                        out: {
                            y: [0, 0, 1350],
                            scale: [1, 0.8, 0.8],
                            transition: {duration: 1},
                            opacity: 1,
                        }
                    })
                }
                else{
                    setAnimation({
                        in: {
                            y: [1350, 0, 0],
                            scale: [0.8, 0.8, 1],
                            transition: {duration: 1, delay: 0.5},
                            opacity: 1,
                        },
                        out: {
                            y: [0, 0, -1350],
                            scale: [1, 0.8, 0.8],
                            transition: {duration: 1},
                            opacity: 1,
                        }
                    })
                    
                }
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
                            }, 1800);
                        }
                    }
                }
                //wheelDown
                else{
                    if(viewIndexCockblock === false && props.designQuery.get("viewState") === "false"){
                        if(parseInt(getParams.viewIndex, 10) < 2){
                            previewSwitchAnimations("backwards")
                            history.replace(`/design/${parseInt(getParams.viewIndex, 10) + 1}`)
                            viewIndexCockblock = true
                            changeDesignTimer = setTimeout(() => {
                                viewIndexCockblock = false
                            }, 1800);
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

    
    
    //Creating sectionIcons for each preview we have
    function createSectionIcons(){
        sectionManagerIcons = []
        

        for(var i = 0; i < previews; i++){
            sectionManagerIcons.push(
                <div key={`iconContainer${i}`} className="iconContainer">
                    <DesignSectionIcon key={i} className="designSectionIcon" id={`designSectionIcon${i}`} ></DesignSectionIcon>
                    {i < previews - 1 &&
                        <span key={`span${i}`} />
                    }
                </div>
            )
        }
        
    }
    createSectionIcons()

    //Setting right sectionIcon Target on sectionManager
    useEffect(() => {
        var getParam = parseInt(getParams.viewIndex, 10)
        //removing all styles from icons to then give the right target the right styles
        for(var i = 0; i < sectionManagerIcons.length; i++){
            var getAllIcons = document.getElementById(`designSectionIcon${i}`) as HTMLDivElement
            getAllIcons.classList.remove("designSectionIconTarget")
        }
        var getTargetIcon = document.getElementById(`designSectionIcon${getParam - 1}`) as HTMLDivElement

        getTargetIcon.classList.add("designSectionIconTarget")
        
    }, [getParams.viewIndex]);
    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <div id="transitionBackground" className="transitionBackground"></div>
                
            <div className="designsPreviewGridContainer">
                <AnimatePresence>
                    <Switch location={location} key={getParams.viewIndex}>
                        <Route strict path="/design/1">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                <HytaleDesignPreview designQuery={props.designQuery}/>
                            </motion.div>
                        </Route>

                        <Route strict path="/design/2">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                <BeautyDesignPreview designQuery={props.designQuery}/>
                            </motion.div>
                        </Route>
                    </Switch>
                </AnimatePresence>  
            </div>

            <motion.div animate={{opacity: 1, transition: {delay: 1}}} initial={{opacity: 0}} className="designManagerContainer" id="designManagerContainer">
                <div className="sectionBackground">
                    {sectionManagerIcons}
                </div>
            </motion.div>

        </motion.div>
    );
}

export default DesignPage;
