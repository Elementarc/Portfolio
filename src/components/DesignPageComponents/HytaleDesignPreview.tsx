import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from "framer-motion"
import "./styleSheets/hytaleDesignPreview.scss"
import { useHistory } from 'react-router';
import HytaleBackground from "../../assets/images/Wallpaper.jpg"
import { useCallback } from 'react';
import HytaleDesign from "./designs/hytaleDesign"
//Using this state number to cycle through 3 animation phases
var previewState: number = 1
//AnimationProps for PreviewImages
var preview1Styles = {
    init: {
        zIndex: 0,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        transition: {duration: 1, delay: 0, type: 'spring'}
    },
    in: {
        zIndex: 3,
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
    },
    out: {
        zIndex: 0,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.4,
        transition: {duration: 0.5, delay: 0, type: 'spring'}
    },
}
var preview2Styles = {
    init: {
        zIndex: 0,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        transition: {duration: 1, delay: 0, type: 'spring'}
    },
    in: {
        zIndex: 2,
        x: -250,
        y: 0,
        opacity: 0.5,
        scale: 0.7,
        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
    },
    out: {
        zIndex: 0,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.4,
        transition: {duration: 0.5, delay: 0, type: 'spring'}
    },
}
var preview3Styles = {
    init: {
        zIndex: 0,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        transition: {duration: 1, delay: 0, type: 'spring'}
    },
    in: {
        zIndex: 2,
        x: 250,
        y: 0,
        opacity: 0.5,
        scale: 0.7,
        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
    },
    out: {
        zIndex: 0,
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.4,
        transition: {duration: 0.5, delay: 0, type: 'spring'}
    },
}

var previewTimer: any
var transitionTimer: any
const HytaleDesignPreview = (props: any) => {
    //rerendering component for previewchanges everytime changeStyle() gets called
    const [State, setState] = useState(false);
    //false = unMounts designComponent, true = mounts DesignComponent
    const [DesignState, setDesignState] = useState(false);
    const history = useHistory()
    
    //Mouseeffect when moving
    var parallax = useCallback((e: any) =>{
        console.log()
        function parallax() {
            if(window.innerWidth > 900 && history.location.pathname.toLowerCase() === "/design/1"){
                var hytaleBackground = document.getElementById("hytaleBackground") as HTMLDivElement
                var designBottomIllustration = document.getElementById("designBottomIllustration") as HTMLDivElement
                var designButton = document.getElementById("designButton") as HTMLDivElement
                var previewContent = document.getElementById("previewContainer") as HTMLDivElement
    
                const xSlow = ((e.clientX) / 50 * 0.3) - (window.innerWidth / 100 * 0.3)
                const ySlow = ((e.clientY) / 50 * 0.3) - (window.innerHeight / 100 * 0.3)
    
                const xFast = ((e.clientX) / 50 * 0.7) - (window.innerWidth / 100 * 0.7)
                const yFast = ((e.clientY) / 50 * 0.7) - (window.innerHeight / 100 * 0.7)
                
                designBottomIllustration.style.transform = `scale(1.1) translateX(${xFast}px) translateY(${yFast}px)`
                hytaleBackground.style.transform = `scale(1.1) translateX(${xSlow}px) translateY(${ySlow}px)`
                designButton.style.transform = `translateX(${xSlow}px) translateY(${ySlow}px)`
                previewContent.style.transform = `translateX(${xSlow}px) translateY(${ySlow}px)`
            }
        }
        parallax()
    }, [history])
    
    var changeStyle = useCallback(() =>{
        //Animation for Images changes State at the end of the function to rerender the component
        function changeStyle() {
            if(window.innerWidth > 900){
                previewState++
                if(previewState > 3){
                    previewState = 1
                }

                if(previewState === 1){
                    //First Box Preview1
                    preview1Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview2Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: -250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview3Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: 250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
                else if(previewState === 2){
                    preview2Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview3Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: -250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview1Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
                else if(previewState === 3){
                    preview3Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview1Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: -250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview2Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: 250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
            }
            else{
                previewState++
                if(previewState > 3){
                    previewState = 1
                }
                if(previewState === 1){
                    //First Box Preview1
                    preview1Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview2Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: -130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview3Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: 130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
                else if(previewState === 2){
                    preview2Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview3Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: -130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview1Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
                else if(previewState === 3){
                    preview3Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 3,
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview1Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: -130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                    preview2Styles = {
                        init: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0,
                            transition: {duration: 1, delay: 0, type: 'spring'}
                        },
                        in: {
                            zIndex: 2,
                            x: 130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                        },
                        out: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
            }
            
        }
        changeStyle()
    },[State])
    
    //Checks url query to find out if design should be opened or not
    useEffect(() => {
        //animating open/closing designView
        function toggleHytaleDesign(state: boolean){
            var getPreviewContainer = document.getElementById("previewContainer") as HTMLDivElement
            var getDesignSectionManger = document.getElementById("designManagerContainer") as HTMLDivElement
            var getpreviewContentContainer = document.getElementById("previewContentContainer") as HTMLDivElement
            var getHytaleDesignContainer = document.getElementById("hytaleDesignContainer") as HTMLDivElement
            var getHytaleBackground = document.getElementById("hytaleBackground") as HTMLDivElement
            var getTransitionBackground = document.getElementById("transitionBackground") as HTMLDivElement

            if(state === true){
                window.scrollTo(0, 0)
                //cleanup
                window.removeEventListener("mousemove", parallax)
                clearTimeout(previewTimer)
                //DesignManager
                getDesignSectionManger.style.display ="none"
                //HytaleBackground
                getHytaleBackground.style.transition = "0.5s ease-in-out"
                getHytaleBackground.style.opacity = "0"
                //Animation for previewContainer when button clicked
                getPreviewContainer.style.transition = "0.3s ease-in-out"
                getPreviewContainer.style.zIndex = "3"
                getPreviewContainer.style.transform = "scale(0.6)"
                
                //logic for structure of html for opening design
                transitionTimer = setTimeout(() => {
                    var getHytale = document.getElementById("hytale") as HTMLDivElement
                    
                    getPreviewContainer.style.transition = "0.5s ease-in-out"
                    if(window.innerWidth > 900){
                        getPreviewContainer.style.transform = "scale(10)"
                    }
                    else{
                        
                        getPreviewContainer.style.transform = "scale(4)"
                    }
                    
                    transitionTimer = setTimeout(() => {
                        getHytaleDesignContainer.style.minHeight ="unset"
                        if(window.innerWidth > 900){
                            getHytaleDesignContainer.style.maxHeight ="1350px"
                            getTransitionBackground.style.opacity = "1"
                            
                        }
                        else{
                            getHytaleDesignContainer.style.maxHeight ="unset"
                            
                        }
                        getpreviewContentContainer.style.display = "none"
                        transitionTimer = setTimeout(() => {
                            getHytale.style.position ="relative"

                        }, 100);
                    }, 200);
                }, 200);
            }
            //Resets all back to default
            else{
                getTransitionBackground.style.opacity = "0"
                //hytalebackground
                getHytaleBackground.style.transition = ""
                getHytaleBackground.style.opacity = "1"
                //DesignManager
                getDesignSectionManger.style.display =""
                getpreviewContentContainer.style.display = "flex"
                
                getHytaleDesignContainer.style.minHeight =""
                getHytaleDesignContainer.style.maxHeight =""
                if(DesignState === true){
                    var getHytale = document.getElementById("hytale") as HTMLDivElement
                    getHytale.style.position ="absolute"
                }
                transitionTimer = setTimeout(() => {
                    getPreviewContainer.style.transition = "0.4s ease-in-out"
                    getPreviewContainer.style.transform = "scale(1)"
                    
                }, 1);
                
                transitionTimer = setTimeout(() => {
                    
                    getPreviewContainer.style.transform =""
                    getPreviewContainer.style.transition = ""
                    getPreviewContainer.style.zIndex = ""
                    window.addEventListener("mousemove", parallax)
                    changeStyle()
                }, 800);
            }
        }
        //checks url query if view should be shown or not viewState = false = hidden
        if(props.designQuery.get("viewState") === 'false'){
            
            
            if(DesignState === true){
                clearTimeout(transitionTimer)
                clearTimeout(previewTimer)
                toggleHytaleDesign(false)
                //Renders HytaleDesign
                setDesignState(false)
                
            }
        }
        else if(props.designQuery.get("viewState") === 'true'){
            clearTimeout(transitionTimer)
            clearTimeout(previewTimer)
            toggleHytaleDesign(true)
            setDesignState(true)
        }
    }, [DesignState, parallax, changeStyle, props.designQuery]);

    //cleanup
    useEffect(() => {
        window.addEventListener("mousemove", parallax)
        
        return () => {
            clearTimeout(previewTimer)
            clearTimeout(transitionTimer)
            window.removeEventListener("mousemove", parallax)
        };
    }, [parallax]);


    //Animates Images
    useEffect(() => {
        
        //Function gets called every 3.5seconds 
        previewTimer = setTimeout(() => {
            changeStyle()
            setState(!State)
        }, 3500);

        return(() =>{
            clearTimeout(previewTimer)
        })
    }, [State, changeStyle]);
    
    //Return JSX Desktop
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0, transition: {delay: 0.5}}} id="hytaleDesignContainer" className="hytaleDesignContainer" >
            
            <div className="previewContentContainer" id="previewContentContainer">

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="hytaleHeader">
                    <div className="decoImage"></div>
                    <h1>GAMING {"&"} DESIGN </h1>
                    <h2>DESIRE THE FANTASY</h2>
                </motion.div>
                
                <div className="previewContainer" id="previewContainer">
                    <motion.div animate="in" exit="out" initial="init" variants={preview1Styles} id="preview1" className="previews preview1">
                        <div className="preview1Background"/>
                    </motion.div>

                    <motion.div animate="in" exit="out" initial="init" variants={preview2Styles} id="preview2" className="previews preview2">
                        <div className="preview2Background"/>
                    </motion.div>

                    <motion.div animate="in" exit="out" initial="init" variants={preview3Styles} id="preview3" className="previews preview3">
                        <div className="preview3Background"/>
                    </motion.div>
                </div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="hytaleContent">
                    <p>A world fulfilled with desires and colors needs atleast a design nothing less than that.</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPageButtonContainer">
                    <button onClick={() => {props.designQuery.set("viewState", "true"); history.push(window.location.pathname.toLowerCase() + "?" + props.designQuery.toString()) }} className="designButton" id="designButton">VIEW DESIGN</button>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="darkerBackground"></motion.div>
                <motion.img src={HytaleBackground} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0}}} className="designBackground" id="hytaleBackground"></motion.img>
                
                <motion.div animate={{y: 10, opacity: 1, transition: {duration: 3, type: "spring"}}} initial={{y: 100, opacity: 0}} exit={{y: 300, opacity: 0, transition: {duration: 0.3}}} className='designBottomIllustrationContainer' id="designBottomIllustrationContainer">
                    <div className="designBottomIllustration" id="designBottomIllustration"></div>
                </motion.div>
                <div className="bottomGradient"></div>
            </div>
            
            <AnimatePresence>
                {DesignState === true &&
                    <HytaleDesign/>
                }
            </AnimatePresence>

            
        </motion.div>
    )
}

export default HytaleDesignPreview;
