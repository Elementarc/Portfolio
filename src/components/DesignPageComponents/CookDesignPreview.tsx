import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import "./styleSheets/cookDesignPreview.scss"
import { useHistory } from 'react-router';
import { useCallback } from 'react';

var previewState = 2
const CookDesignPreview = (props: any) => {
    const history = useHistory()

    const firstPreviewImage = useAnimation()
    const secondPreviewImage = useAnimation()
    const thirdPreviewImage = useAnimation()
    //Animates Images
    useEffect(() => {
        var timer: any
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
        //Animation for Images changes State at the end of the function to rerender the component
        function changeStyle() {
            if(history.location.pathname.toLowerCase() === "/design/3"){
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
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
                        })

                        secondPreviewImage.start({
                            zIndex: 1,
                            x: -250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
                        })

                        thirdPreviewImage.start({
                            zIndex: 2,
                            x: 250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
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
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
                        })

                        firstPreviewImage.start({
                            zIndex: 1,
                            x: -250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
                        })

                        secondPreviewImage.start({
                            zIndex: 2,
                            x: 250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
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
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
                        })

                        thirdPreviewImage.start({
                            zIndex: 1,
                            x: -250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
                        })

                        firstPreviewImage.start({
                            zIndex: 2,
                            x: 250,
                            y: 0,
                            opacity: 0.5,
                            scale: 0.7,
                            transition: {duration: 1.5, delay: 0, type: 'spring'}
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
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })

                        secondPreviewImage.start({
                            zIndex: 1,
                            x: -130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })

                        thirdPreviewImage.start({
                            zIndex: 2,
                            x: 130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
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
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })

                        firstPreviewImage.start({
                            zIndex: 1,
                            x: -130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })

                        secondPreviewImage.start({
                            zIndex: 2,
                            x: 130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
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
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })

                        thirdPreviewImage.start({
                            zIndex: 1,
                            x: -130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })

                        firstPreviewImage.start({
                            zIndex: 2,
                            x: 130,
                            y: 0,
                            opacity: 0.6,
                            scale: 0.7,
                            transition: {duration: 1.2, delay: 0, type: 'spring'}
                        })
                        previewState = 1
                    }
                }
            }

            
        }

        timer = setInterval(() => {
            changeStyle()
        }, 4000);
        return(() =>{
            clearInterval(timer)
        })
    }, [firstPreviewImage, secondPreviewImage, thirdPreviewImage, history]);
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

    function triggerComingSoon(toggleState: boolean){
        var getComingSoonContainer = document.getElementById("comingSoonCookContainer") as HTMLDivElement

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
            getNavIcon.style.fill = "#ffffff"
        }
        
    }, []);
    //Return JSX Desktop
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0, transition: {delay: 0.5}}} id="DesignPreview3Container" className="DesignPreview3Container" >
            
            <div className="previewContentContainer" id="previewContentContainer">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="headerContent">
                    <h1>FOOD {"&"} RECIPES </h1>
                    <h2>LET'S EAT HEALTHY</h2>
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
                    <p>Food, pasta and much more! We are not only selling food for survival, we are also selling it for pleasure. So, take a bite.</p>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.8}}} exit={{opacity: 0}} className="designPreviewButtonContainer">
                    <button onClick={() => triggerComingSoon(true)} className="designButton" id="designButton">VIEW DESIGN</button>
                </motion.div>

                
                <div className="comingSoonContainer" id="comingSoonCookContainer">
                    <div className="comingSoonBox">
                        <h1>COMING SOON</h1>
                        <p>Design will be available soon! </p>
                        <button onClick={() => triggerComingSoon(false)}>OK</button>
                    </div>
                </div>
            </div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="designPreviewDarkerBackground"></motion.div>
            <motion.img initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0}}} className="designPreviewBackgroundImage" id="designPreviewBackgroundImage"></motion.img>
                
        </motion.div>
    )
}

export default CookDesignPreview;
