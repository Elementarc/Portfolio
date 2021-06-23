import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from "framer-motion"
import "./styleSheets/hytaleDesignPreview.scss"
import { useHistory } from 'react-router';
import HytaleBackground from "../../assets/images/Wallpaper.jpg"
import { useCallback } from 'react';
import HytaleDesign from "./designs/hytaleDesign"
//Using this state number to cycle through 3 animation phases
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
var previewState = 1

var transitionTimer: any
var previewAnimationTimer: any
const HytaleDesignPreview = (props: any) => {
    const history = useHistory()
    const [State, setState] = useState(false);

    //Animates Images
    useEffect(() => {
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
        //Function gets called every 3.5seconds 
        previewAnimationTimer = setTimeout(() => {
            changeStyle()
            setState(!State)
        }, 3500);

        return(() =>{
            clearTimeout(previewAnimationTimer)
        })
    }, [State, props.designQuery]);
    //Mouseeffect when moving
    var parallax = useCallback((e: any) =>{
        function parallax() {
            if(window.innerWidth > 900 && history.location.pathname.toLowerCase() === "/design/1"){
                var hytaleBackground = document.getElementById("designPreviewBackgroundImage") as HTMLDivElement
                var designBottomIllustration = document.getElementById("designPreviewBottomIllustration") as HTMLDivElement
                var designButton = document.getElementById("designButton") as HTMLDivElement
                var previewImagesContainer = document.getElementById("previewImagesContainer") as HTMLDivElement
    
                const xSlow = ((e.clientX) / 50 * 0.3) - (window.innerWidth / 100 * 0.3)
                const ySlow = ((e.clientY) / 50 * 0.3) - (window.innerHeight / 100 * 0.3)
    
                const xFast = ((e.clientX) / 50 * 0.7) - (window.innerWidth / 100 * 0.7)
                const yFast = ((e.clientY) / 50 * 0.7) - (window.innerHeight / 100 * 0.7)
                
                designBottomIllustration.style.transform = `scale(1.1) translateX(${xFast}px) translateY(${yFast}px)`
                hytaleBackground.style.transform = `scale(1.1) translateX(${xSlow}px) translateY(${ySlow}px)`
                designButton.style.transform = `translateX(${xSlow}px) translateY(${ySlow}px)`
                previewImagesContainer.style.transform = `translateX(${xSlow}px) translateY(${ySlow}px)`
            }
        }
        parallax()
    }, [history])
    //cleanup for parallax
    useEffect(() => {
        window.addEventListener("mousemove", parallax)
        return () => {
            window.removeEventListener("mousemove", parallax)
        };
    }, [parallax]);

    //CleanUp for timers
    useEffect(() => {
        return () => {
            clearTimeout(previewAnimationTimer)
            clearTimeout(transitionTimer)
        };
    }, []);
    
    //Changin NavIcon Color for better ui/ux
    useEffect(() => {
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement
        
        if(window.innerWidth > 900){
            getNavIcon.style.fill = "#ffffff"
        }
        
    }, []);
    
    
    //false = unMounts designComponent, true = mounts DesignComponent
    const [DesignState, setDesignState] = useState(false);
    //Checks url query to find out if design should be opened or not
    useEffect(() => {
        //animating open/closing designView
        function toggleHytaleDesign(state: boolean){
            var getDesignPreviewContainer = document.getElementById("DesignPreviewContainer") as HTMLDivElement
            var getPreviewContentContainer = document.getElementById("previewContentContainer") as HTMLDivElement

            var getPreviewImagesContainer = document.getElementById("previewImagesContainer") as HTMLDivElement
            var getDesignSectionManger = document.getElementById("designManagerContainer") as HTMLDivElement
            var getHytaleBackground = document.getElementById("designPreviewBackgroundImage") as HTMLDivElement
            var getTransitionBackground = document.getElementById("transitionBackground") as HTMLDivElement

            //Animations for opening design
            if(state === true){
                window.scrollTo(0, 0)
                //cleanup
                window.removeEventListener("mousemove", parallax)
                
                //DesignManager
                getDesignSectionManger.style.display ="none"
                //HytaleBackground
                getHytaleBackground.style.transition = "0.5s ease-in-out"
                getHytaleBackground.style.opacity = "0"
                //Animation for previewContainer when button clicked
                getPreviewImagesContainer.style.transition = "0.3s ease-in-out"
                getPreviewImagesContainer.style.zIndex = "3"
                getPreviewImagesContainer.style.transform = "scale(0.6)"
                
                //logic for structure of html for opening design
                transitionTimer = setTimeout(() => {
                    var getHytale = document.getElementById("hytale") as HTMLDivElement
                    
                    getPreviewImagesContainer.style.transition = "0.5s ease-in-out"
                    if(window.innerWidth > 900){
                        getPreviewImagesContainer.style.transform = "scale(10)"
                    }
                    else{
                        
                        getPreviewImagesContainer.style.transform = "scale(4)"
                        getPreviewImagesContainer.style.opacity ="0"
                    }
                    
                    transitionTimer = setTimeout(() => {
                        getDesignPreviewContainer.style.minHeight ="unset"
                        if(window.innerWidth > 900){
                            getDesignPreviewContainer.style.maxHeight ="1350px"
                            getTransitionBackground.style.opacity = "1"
                            
                        }
                        else{
                            getDesignPreviewContainer.style.maxHeight ="unset"
                            
                        }
                        getPreviewContentContainer.style.display = "none"
                        transitionTimer = setTimeout(() => {
                            getHytale.style.position ="relative"

                        }, 100);
                    }, 200);
                }, 200);
            }
            //Resets all back to default
            else{
                getPreviewImagesContainer.style.opacity ="1"
                getTransitionBackground.style.opacity = "0"
                //hytalebackground
                getHytaleBackground.style.transition = ""
                getHytaleBackground.style.opacity = "1"
                //DesignManager
                getDesignSectionManger.style.display =""
                getPreviewContentContainer.style.display = "flex"

                getDesignPreviewContainer.style.minHeight =""
                getDesignPreviewContainer.style.maxHeight =""
                if(DesignState === true){
                    var getHytale = document.getElementById("hytale") as HTMLDivElement
                    getHytale.style.position ="absolute"
                }
                transitionTimer = setTimeout(() => {
                    getPreviewImagesContainer.style.transition = "0.4s ease-in-out"
                    getPreviewImagesContainer.style.transform = "scale(1)"
                    
                }, 1);
                
                transitionTimer = setTimeout(() => {
                    window.addEventListener("mousemove", parallax)
                    getPreviewImagesContainer.style.transform =""
                    getPreviewImagesContainer.style.transition = ""
                    getPreviewImagesContainer.style.zIndex = ""
                }, 800);
            }
        }
        //checks url query if view should be shown or not viewState = false = hidden
        if(props.designQuery.get("viewState") === 'false'){
            if(DesignState === true){
                //Renders HytaleDesign
                setDesignState(false)
                toggleHytaleDesign(false)
            }
        }
        else if(props.designQuery.get("viewState") === 'true'){
            toggleHytaleDesign(true)
            setDesignState(true)
        }

        
    }, [DesignState, parallax, props.designQuery]);

    //Return JSX Desktop
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0, transition: {delay: 0.5}}} id="DesignPreviewContainer" className="DesignPreviewContainer" >
            
            <div className="previewContentContainer" id="previewContentContainer">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="headerContent">
                    <div className="decoImage"></div>
                    <h1>GAMING {"&"} DESIGN </h1>
                    <h2>DESIRE THE FANTASY</h2>
                </motion.div>
                
                <div className="previewImagesContainer" id="previewImagesContainer">
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

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewContent">
                    <p>A world fulfilled with desires and colors needs atleast a design nothing less than that.</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewButtonContainer">
                    <button onClick={() => {props.designQuery.set("viewState", "true"); history.push(window.location.pathname.toLowerCase() + "?" + props.designQuery.toString()) }} className="designButton" id="designButton">VIEW DESIGN</button>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="designPreviewDarkerBackground"></motion.div>
                <motion.img src={HytaleBackground} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.2}}} className="designPreviewBackgroundImage" id="designPreviewBackgroundImage"></motion.img>
                
                <motion.div animate={{y: 10, opacity: 1, transition: {duration: 3, type: "spring"}}} initial={{y: 100, opacity: 0}} exit={{y: 300, opacity: 0, transition: {duration: 0.3}}} className='designPreviewBottomIllustrationContainer'>
                    <div className="designPreviewBottomIllustration" id="designPreviewBottomIllustration"></div>
                </motion.div>
                <div className="designPreviewBottomGradient"></div>
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
