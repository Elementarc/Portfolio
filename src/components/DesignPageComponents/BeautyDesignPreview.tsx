import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import "./styleSheets/beautyDesignPreview.scss"
import { useHistory } from 'react-router';
import { useCallback } from 'react';

//Using this state number to cycle through 3 animation phases
var previewState = 1

//Timers that might need cleanup on componentUnmount
var transitionTimer: any
var previewAnimationTimer: any


const BeautyDesignPreview = (props: any) => {
    const history = useHistory()

    const firstPreviewImage = useAnimation()
    const secondPreviewImage = useAnimation()
    const thirdPreviewImage = useAnimation()
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
        return(() =>{
            clearTimeout(previewAnimationTimer)
        })
    }, [props.designQuery, firstPreviewImage, secondPreviewImage, thirdPreviewImage]);
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
        
    function triggerComingSoon(toggleState: boolean){
        var getComingSoonContainer = document.getElementById("comingSoonContainer") as HTMLDivElement

        if(toggleState === true){
            getComingSoonContainer.style.opacity = "1"
            getComingSoonContainer.style.pointerEvents ="visible"
        }
        else{
            getComingSoonContainer.style.opacity = "0"
            getComingSoonContainer.style.pointerEvents ="none"
        }
    }

    //Changin NavIcon Color for better ui/ux
    useEffect(() => {
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement

        if(window.innerWidth > 900){
            getNavIcon.style.fill = "#000000"
        }
        
    }, []);
    //Return JSX Desktop
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0, transition: {delay: 0.5}}} id="DesignPreview2Container" className="DesignPreview2Container" >
            
            <div className="previewContentContainer" id="previewContentContainer">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="headerContent">
                    <h1>BEAUTY {"&"} PRODUCTS </h1>
                    <h2>EXPRESS YOUR STYLE</h2>
                </motion.div>
                
                <div className="previewImagesContainer" id="previewImagesContainer">

                    <motion.div initial={{opacity: 0, x: 0, y:0, scale: 0}} animate={firstPreviewImage} exit={{opacity: 0, scale: 0.4,zIndex: 0, transition: {duration: 0.5, delay: 0, type: 'spring'}}} id="preview1" className="previews preview1">
                        <div className="preview1Background" id="preview1Background"/>
                    </motion.div>
                    
                    <motion.div initial={{opacity: 0, x: 0, y:0, scale: 0}} animate={secondPreviewImage} exit={{opacity: 0, scale: 0.4,zIndex: 0, transition: {duration: 0.5, delay: 0, type: 'spring'}}} id="preview2" className="previews preview2">
                        <div className="preview2Background"/>
                    </motion.div>

                    <motion.div initial={{opacity: 0, x: 0, y:0, scale: 0}} animate={thirdPreviewImage} exit={{opacity: 0, scale: 0.4,zIndex: 0, transition: {duration: 0.5, delay: 0, type: 'spring'}}} id="preview3" className="previews preview3">
                        <div className="preview3Background"/>
                    </motion.div>                

                </div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewContent">
                    <p>Colorful things will always get attention. The first impression always starts with your style!</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewButtonContainer">
                    <button onClick={() => triggerComingSoon(true)} className="designButton" id="designButton">VIEW DESIGN</button>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="designPreviewDarkerBackground"></motion.div>
                <motion.img initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0}}} className="designPreviewBackgroundImage" id="designPreviewBackgroundImage"></motion.img>
                
                <div className="comingSoonContainer" id="comingSoonContainer">
                    <div className="comingSoonBox">
                        <h1>COMING SOON</h1>
                        <p>Design will be available soon! </p>
                        <button onClick={() => triggerComingSoon(false)}>OK</button>
                    </div>
                </div>

                <motion.div animate={{y: 10, opacity: 1, transition: {duration: 3, type: "spring"}}} initial={{y: 100, opacity: 0}} exit={{y: 300, opacity: 0, transition: {duration: 0.3}}} className='designPreviewBottomIllustrationContainer'>
                    <div className="designPreviewBottomIllustration" id="designPreviewBottomIllustration"></div>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.6, transition: {delay: 1}}} exit={{y: 300, opacity: 0, transition: {duration: 0.3}}} className="designPreviewBackgroundIllustration"/>
                <div className="designPreviewBottomGradient"></div>
            </div>
            
        </motion.div>
    )
}

export default BeautyDesignPreview;
