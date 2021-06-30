import React, {useEffect} from 'react';
import {motion, AnimatePresence} from "framer-motion"
import { useHistory, useParams , Route, Switch, useLocation} from 'react-router-dom';
import { useState } from 'react';
import "./styleSheets/designPage.scss"

import {ReactComponent as DesignSectionIcon} from "../assets/svgs/designSectionIcon.svg"
import {ReactComponent as SectionManagerIcon} from "../assets/svgs/sectionManagerDirectionBtn.svg"
//components
import HytaleDesignPreview from "./DesignPageComponents/HytaleDesignPreview"
import BeautyDesignPreview from "./DesignPageComponents/BeautyDesignPreview"
import CookDesignPreview from "./DesignPageComponents/CookDesignPreview"
import PageNotFound from './PageNotFound';
//prevents triggering changeDesignPreview unless false
var changeDesignTimer: any
var viewIndexCockblock = false





//Array of jsx secitonIcons
var sectionManagerIcons: any[] = []
//Currently available previews!!!
var previews = 3


const DesignPage = (props: any) => {
    const history = useHistory()
    const getParams: any = useParams()
    const location = useLocation()
    
    //Sets viewState on load of designPage
    useEffect(() =>{
        if(props.designQuery.get("viewState") === null){
            props.designQuery.set("viewState", "false")
            history.replace(`${history.location.pathname.toLowerCase()}?${props.designQuery.toString()}`)
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
        //function that animates switching between routes
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
         //Function to change PreviewDesign Upwards or downwards
         function changePreviewDesign(direction: string) {
            if(direction === "up"){
                if(viewIndexCockblock === false && props.designQuery.get("viewState") === "false" && history.location.pathname.toLowerCase().includes("/design/") === true){
                    if(parseInt(getParams.viewIndex, 10) > 1){
                        viewIndexCockblock = true
    
                        previewSwitchAnimations("upwards")
                        history.push(`/design/${parseInt(getParams.viewIndex, 10) -1}?viewState=false`)
                        
                        changeDesignTimer = setTimeout(() => {
                            viewIndexCockblock = false
                        }, 1800);
                    }
                }
            }
            else{
                if(viewIndexCockblock === false && props.designQuery.get("viewState") === "false"){
                    if(parseInt(getParams.viewIndex, 10) < previews){
                        viewIndexCockblock = true

                        previewSwitchAnimations("backwards")
                        history.push(`/design/${parseInt(getParams.viewIndex, 10) + 1}?viewState=false`)

                        changeDesignTimer = setTimeout(() => {
                            viewIndexCockblock = false
                        }, 1800);
                    }
                }
            }
            
        }
        //Changes previewDesign when btnUp pressed
        function changeDesignPreviewBtnUp(){
            changePreviewDesign("up")
        }
        //Changes previewDesign when btndown pressed
        function changeDesignPreviewBtnDown(){
            changePreviewDesign("down")
        }
        var getUpBtn = document.getElementById("sectionBtnUp") as HTMLDivElement
        var getDownBtn = document.getElementById("sectionBtnDown") as HTMLDivElement
        getUpBtn.addEventListener("mousedown", changeDesignPreviewBtnUp)
        getDownBtn.addEventListener("mousedown", changeDesignPreviewBtnDown)

       
        //Changes previewDesign when wheel is used pressed
        function changeDesignPreviewWheel(e: any){
            //wheelUp
            if(window.innerWidth > 1300 && window.innerHeight >= 950){
                if(e.deltaY < 0){
                    changePreviewDesign("up")
                }
                //wheelDown
                else{
                    changePreviewDesign("down")
                }
            }
        }
        //Using keydownListener function to disable wheel event to properly zoom in and out without changing home section/urls
        function keydownListener(e: any) {
            if(e.which === 17){
                window.removeEventListener("wheel", changeDesignPreviewWheel)
            }
        }
        //Using keyupListener function to enable wheel event back to properly switch between sections section/urls
        function keyupListener(e: any) {
            if(e.which === 17){
                window.addEventListener("wheel", changeDesignPreviewWheel)
            }
        }

        window.addEventListener("keydown", keydownListener)
        window.addEventListener("keyup", keyupListener)

        window.addEventListener("wheel", changeDesignPreviewWheel)
        return(() =>{
            window.removeEventListener("wheel", changeDesignPreviewWheel)
            window.removeEventListener("keydown", keydownListener)
            window.removeEventListener("keyup", keyupListener)

            getUpBtn.removeEventListener("mousedown", changeDesignPreviewBtnUp)
            getDownBtn.removeEventListener("mousedown", changeDesignPreviewBtnDown)
        })
    },[props, history, getParams.viewIndex])
    
    //Creating sectionIcons for each preview we have
    function createSectionIcons(){
        sectionManagerIcons = []
        

        for(var i = 0; i < previews; i++){
            sectionManagerIcons.push(
                <div key={`iconContainer${i}`} className="iconContainer" id={`iconContainer${i}`}>
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
        if(getParam <= previews && getParam > 0){
            //removing all styles from icons to then give the right target the right styles
            for(var i = 0; i < sectionManagerIcons.length; i++){
                var getAllIcons = document.getElementById(`designSectionIcon${i}`) as HTMLDivElement
                getAllIcons.classList.remove("designSectionIconTarget")
            }
            var getTargetIcon = document.getElementById(`designSectionIcon${getParam - 1}`) as HTMLDivElement

            getTargetIcon.classList.add("designSectionIconTarget")
        }
        else{
            //console.log("We do not have that preview")
        }
    }, [getParams.viewIndex]);

    return (
        <motion.div animate={{opacity: 1, transition: {delay: 0.1, duration: 0.5}}} initial={{opacity: 0}} exit={{opacity: 0, transition: {duration: 0.5}}} id="DesignPageContainer" className="DesignPageContainer">
            <div id="transitionBackground" className="transitionBackground"></div>
                
            <motion.div  className="designsPreviewGridContainer">
                <AnimatePresence>
                    <Switch location={location} key={getParams.viewIndex}>
                        <Route exact path="/design/1">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                <HytaleDesignPreview designQuery={props.designQuery}/>
                            </motion.div>
                        </Route>

                        <Route exact path="/design/2">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                <BeautyDesignPreview designQuery={props.designQuery}/>
                            </motion.div>
                        </Route>

                        <Route exact path="/design/3">
                            <motion.div className="designsAnimationContainer" id="designsAnimationContainer" exit={"out"} initial={"init"} animate={"in"} variants={Animation}>
                                
                            </motion.div>
                        </Route>

                        <Route>
                            <PageNotFound/>
                        </Route>
                    </Switch>
                </AnimatePresence>  
            </motion.div>

            <motion.div animate={{opacity: 1, transition: {delay: 1}}} initial={{opacity: 0}} className="designManagerContainer" id="designManagerContainer">
                <div className="sectionBackground">
                    <div className="sectionBtnUpContainer">
                        <SectionManagerIcon className="sectionBtnUp" id="sectionBtnUp"/>
                    </div>

                    <div className="sectionManagerContainer">
                        <div className="sectionScroll" id="sectionScroll">
                            {sectionManagerIcons}
                        </div>
                    </div>

                    <div className="sectionBtnDownContainer">
                        <SectionManagerIcon className="sectionBtnDown" id="sectionBtnDown"/>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    );
}

export default DesignPage;
