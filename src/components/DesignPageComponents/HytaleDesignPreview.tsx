import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence, useAnimation} from "framer-motion"
import "./styleSheets/hytaleDesignPreview.scss"
import { useHistory } from 'react-router';
import HytaleBackground from "../../assets/images/Wallpaper.jpg"
import { useCallback } from 'react';
import HytaleDesign from "./designs/hytaleDesign"

//Using this state number to cycle through 3 animation phases
var previewState = 1

var previewAnimationTimer: any
var animationStartTimer: any
var animationExitTimer: any


const HytaleDesignPreview = (props: any) => {
    const history = useHistory()

    const firstPreviewImage = useAnimation()
    const secondPreviewImage = useAnimation()
    const thirdPreviewImage = useAnimation()
    //Animation for Images changes calls itself for loop
    const changeStyle = useCallback(() =>{
        function changeStyle() {
            if(window.innerWidth > 900){
                previewState++
                if(previewState > 3){
                    previewState = 1
                }
    
                if(previewState === 1){
                    firstPreviewImage.start({
                        zIndex: 3,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    secondPreviewImage.start({
                        zIndex: 1,
                        x: -250,
                        y: 0,
                        opacity: 0.5,
                        scale: 0.7,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    thirdPreviewImage.start({
                        zIndex: 2,
                        x: 250,
                        y: 0,
                        opacity: 0.5,
                        scale: 0.7,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    previewState = 2
                }
                else if(previewState === 2){
                    thirdPreviewImage.start({
                        zIndex: 3,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    firstPreviewImage.start({
                        zIndex: 1,
                        x: -250,
                        y: 0,
                        opacity: 0.5,
                        scale: 0.7,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    secondPreviewImage.start({
                        zIndex: 2,
                        x: 250,
                        y: 0,
                        opacity: 0.5,
                        scale: 0.7,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
                    previewState = 3
                }
                else if(previewState === 3){
                    secondPreviewImage.start({
                        zIndex: 3,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    thirdPreviewImage.start({
                        zIndex: 1,
                        x: -250,
                        y: 0,
                        opacity: 0.5,
                        scale: 0.7,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
    
                    firstPreviewImage.start({
                        zIndex: 2,
                        x: 250,
                        y: 0,
                        opacity: 0.5,
                        scale: 0.7,
                        transition: {duration: 1.5, delay: 0.8, type: 'spring'}
                    })
                    previewState = 1
                }
            }
            else{
                previewState++
                if(previewState > 3){
                    previewState = 1
                }
                if(previewState === 1){
                    firstPreviewImage.start({
                        zIndex: 3,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    secondPreviewImage.start({
                        zIndex: 1,
                        x: -130,
                        y: 0,
                        opacity: 0.6,
                        scale: 0.7,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    thirdPreviewImage.start({
                        zIndex: 2,
                        x: 130,
                        y: 0,
                        opacity: 0.6,
                        scale: 0.7,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
                    previewState = 2
                }
                else if(previewState === 2){
                    thirdPreviewImage.start({
                        zIndex: 3,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    firstPreviewImage.start({
                        zIndex: 1,
                        x: -130,
                        y: 0,
                        opacity: 0.6,
                        scale: 0.7,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    secondPreviewImage.start({
                        zIndex: 2,
                        x: 130,
                        y: 0,
                        opacity: 0.6,
                        scale: 0.7,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    previewState = 3
                }
                else if(previewState === 3){
                    secondPreviewImage.start({
                        zIndex: 3,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    thirdPreviewImage.start({
                        zIndex: 1,
                        x: -130,
                        y: 0,
                        opacity: 0.6,
                        scale: 0.7,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
    
                    firstPreviewImage.start({
                        zIndex: 2,
                        x: 130,
                        y: 0,
                        opacity: 0.6,
                        scale: 0.7,
                        transition: {duration: 1.2, delay: 0.5, type: 'spring'}
                    })
                    previewState = 1
                }
            }
    
            previewAnimationTimer = setTimeout(() => {
                changeStyle()
            }, 3000);
        }
        changeStyle()
    },[firstPreviewImage, secondPreviewImage, thirdPreviewImage])

    //Starting Animation for Images
    useEffect(() => {
        
        changeStyle()
        return(() =>{
            clearTimeout(previewAnimationTimer)
        })
    }, [props.designQuery, changeStyle]);
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

    
    //false = unMounts designComponent, true = mounts DesignComponent
    const [DesignState, setDesignState] = useState(false);

    //Animation for PreviewContainer
    const previewContainer = useAnimation()
    //Animation for background Black
    const backgroundContainer = useAnimation()
    
    


    //Changin NavIcon Color for better ui/ux
    useEffect(() => {
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement
        
        if(window.innerWidth > 900){
            getNavIcon.style.fill = "#ffffff"
        }
    }, []);
    //CleanUp for timers
    useEffect(() => {
        return () => {
            clearTimeout(previewAnimationTimer)
            clearTimeout(animationStartTimer)
            clearTimeout(animationExitTimer)
        };
    }, []);


    //Return JSX Desktop
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0, transition: {delay: 0.5}}} id="DesignPreviewContainer" className="DesignPreviewContainer" >
            <motion.div animate={backgroundContainer} className="backgroundBlack" ></motion.div>
            <div className="previewContentContainer" id="previewContentContainer">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="headerContent">
                    <div className="decoImage"></div>
                    <h1>GAMING {"&"} DESIGN </h1>
                    <h2>DESIRE THE FANTASY</h2>
                </motion.div>
                
                <motion.div animate={previewContainer} className="previewImagesContainer" id="previewImagesContainer">
                    <motion.div initial={{opacity: 0, x: 0, y:0, scale: 0}} animate={firstPreviewImage} exit={{opacity: 0, scale: 0.4,zIndex: 0, transition: {duration: 0.5, delay: 0, type: 'spring'}}} id="preview1" className="previews preview1">
                        <div className="preview1Background"/>
                    </motion.div>

                    <motion.div initial={{opacity: 0, x: 0, y:0, scale: 0}} animate={secondPreviewImage} exit={{opacity: 0, scale: 0.4,zIndex: 0, transition: {duration: 0.5, delay: 0, type: 'spring'}}} id="preview2" className="previews preview2">
                        <div className="preview2Background"/>
                    </motion.div>

                    <motion.div initial={{opacity: 0, x: 0, y:0, scale: 0}} animate={thirdPreviewImage} exit={{opacity: 0, scale: 0.4,zIndex: 0, transition: {duration: 0.5, delay: 0, type: 'spring'}}} id="preview3" className="previews preview3">
                        <div className="preview3Background"/>
                    </motion.div>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewContent">
                    <p>A world fulfilled with desires and colors needs atleast a design nothing less than that.</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1,  transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewButtonContainer" id="designPreviewButtonContainer">
                    <button onClick={() => {props.designQuery.set("viewState", "true"); history.push(window.location.pathname.toLowerCase() + "?" + props.designQuery.toString())}} className="enabledDesignButton" id="designButton">VIEW DESIGN</button>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="designPreviewDarkerBackground"></motion.div>
                <motion.img src={HytaleBackground} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0}}} className="designPreviewBackgroundImage" id="designPreviewBackgroundImage"></motion.img>
                
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
