import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheets/hytaleDesign.scss"

//Using this state number to cycle through 3 animation phases
var previewState: number = 1
//Desktop animationProps
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
        transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
        x: -200,
        y: -130,
        opacity: 0.6,
        scale: 0.6,
        transition: {duration: 2, delay: 0.5, type: 'spring'}
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
        zIndex: 1,
        x: -70,
        y: -220,
        opacity: 0.6,
        scale: 0.3,
        transition: {duration: 1.5, delay: 0.5, type: 'spring'}
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
//Mobile animationProps
var preview1StylesMobile = {
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
        transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
var preview2StylesMobile = {
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
        x: -150,
        y: -120,
        opacity: 0.6,
        scale: 0.5,
        transition: {duration: 2, delay: 0.5, type: 'spring'}
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
var preview3StylesMobile = {
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
        x: 150,
        y: -120,
        opacity: 0.6,
        scale: 0.5,
        transition: {duration: 2, delay: 0.5, type: 'spring'}
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
const HytaleDesign = () => {
    const [State, setState] = useState(false);

    useEffect(() => {
        function parallax(e: any) {
            if(window.innerWidth > 1000){
                var hytaleBackground = document.getElementById("hytaleBackground") as HTMLDivElement

                var designBottomIllustration = document.getElementById("designBottomIllustration") as HTMLDivElement
                var designButton = document.getElementById("designButton") as HTMLDivElement

                const xBackground = ((e.clientX) / 50 * 0.4) - (window.innerWidth / 100 * 0.4)
                const yBackground = ((e.clientY) / 50 * 0.4) - (window.innerHeight / 100 * 0.4)

                const xIllustration = ((e.clientX) / 50) - (window.innerWidth / 100)
                const yIllustration = ((e.clientY) / 50) - (window.innerHeight / 100)
                
                const xButton = ((e.clientX) / 50 * 0.3) - (window.innerWidth / 100 * 0.3)
                const yButton = ((e.clientY) / 50 * 0.3) - (window.innerHeight / 100 * 0.3)
                designBottomIllustration.style.transform = `scale(1.1) translateX(${xIllustration}px) translateY(${yIllustration}px)`
                hytaleBackground.style.transform = `scale(1.1) translateX(${xBackground}px) translateY(${yBackground}px)`
                designButton.style.transform = `translateX(${xButton}px) translateY(${yButton}px)`
            }
            else{
                //console.log("parallax not working because window is < 1000px")
            }
        }
        window.addEventListener("mousemove", parallax)
        return () => {
            window.removeEventListener("mousemove", parallax)
        };
    }, []);
    //Animates Images
    useEffect(() => {
        //Animation for Images changes State at the end of the function to rerender the component
        function changeStyle() {
            if(window.innerWidth > 1000){
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
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                            x: -200,
                            y: -130,
                            opacity: 0.6,
                            scale: 0.6,
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                            zIndex: 1,
                            x: -70,
                            y: -220,
                            opacity: 0.6,
                            scale: 0.3,
                            transition: {duration: 1.5, delay: 0.5, type: 'spring'}
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
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                            x: -200,
                            y: -130,
                            opacity: 0.6,
                            scale: 0.6,
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                            zIndex: 1,
                            x: -70,
                            y: -220,
                            opacity: 0.6,
                            scale: 0.3,
                            transition: {duration: 1.5, delay: 0.5, type: 'spring'}
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
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                            x: -200,
                            y: -130,
                            opacity: 0.6,
                            scale: 0.6,
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                            zIndex: 1,
                            x: -70,
                            y: -220,
                            opacity: 0.6,
                            scale: 0.3,
                            transition: {duration: 1.5, delay: 0.5, type: 'spring'}
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
                setState(!State)
            }
            else{
                previewState++
                if(previewState > 3){
                    previewState = 1
                }
                console.log("mobile")
                if(previewState === 1){
                    //First Box Preview1
                    preview1StylesMobile = {
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
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                    preview2StylesMobile = {
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
                            x: -150,
                            y: -120,
                            opacity: 0.6,
                            scale: 0.5,
                            transition: {duration: 2, delay: 0.5, type: 'spring'}
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
                    preview3StylesMobile = {
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
                            x: 150,
                            y: -120,
                            opacity: 0.6,
                            scale: 0.5,
                            transition: {duration: 2, delay: 0.5, type: 'spring'}
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
                    preview2StylesMobile = {
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
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                    preview3StylesMobile = {
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
                            x: -150,
                            y: -120,
                            opacity: 0.6,
                            scale: 0.5,
                            transition: {duration: 2, delay: 0.5, type: 'spring'}
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
                    preview1StylesMobile = {
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
                            x: 150,
                            y: -120,
                            opacity: 0.6,
                            scale: 0.5,
                            transition: {duration: 2, delay: 0.5, type: 'spring'}
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
                    preview3StylesMobile = {
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
                            transition: {duration: 2.4, delay: 0.5, type: 'spring'}
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
                    preview1StylesMobile = {
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
                            x: -150,
                            y: -120,
                            opacity: 0.6,
                            scale: 0.5,
                            transition: {duration: 2, delay: 0.5, type: 'spring'}
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
                    preview2StylesMobile = {
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
                            x: 150,
                            y: -120,
                            opacity: 0.6,
                            scale: 0.5,
                            transition: {duration: 2, delay: 0.5, type: 'spring'}
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
                setState(!State)
            }
        }
        //Function gets called every 3.5seconds 
        var timer = setTimeout(() => {
            changeStyle()
        }, 3500);
        return (() =>{
            clearTimeout(timer)
        })
    }, [State]);
    
    //Return JSX Desktop
    if(window.innerWidth > 1000){
        return (
            <div className="hytaleDesignContainer">
                <div className="previewContainer">
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
                <div className="designBackground" id="hytaleBackground"></div>
            </div>
        )
    }
    //Return JSX Mobile
    else{
        return(
            <div className="hytaleDesignContainer">
                <div className="designSectionContainer">
                    <div className="designSection1">
                        <div className="designSection1Shadow"></div>
                    </div>
                </div>

                <div className="previewContainer">
                    <motion.div animate="in" exit="out" initial="init" variants={preview1StylesMobile} id="preview1" className="previews preview1">
                        <div className="preview1Background"/>
                    </motion.div>

                    <motion.div animate="in" exit="out" initial="init" variants={preview2StylesMobile} id="preview2" className="previews preview2">
                        <div className="preview2Background"/>
                    </motion.div>

                    <motion.div animate="in" exit="out" initial="init" variants={preview3StylesMobile} id="preview3" className="previews preview3">
                        <div className="preview3Background"/>
                    </motion.div>
                </div>
                <div className="designBackground" id="hytaleBackground"></div>
                
                <div className="bottomBlur"></div>
                
            </div>
        )    
    }

}

export default HytaleDesign;
