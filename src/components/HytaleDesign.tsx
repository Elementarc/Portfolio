import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheets/hytaleDesign.scss"

var previewState: number = 1

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
    exit: {
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
    exit: {
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
    exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
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
                        exit: {
                            zIndex: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.4,
                            transition: {duration: 0.5, delay: 0, type: 'spring'}
                        },
                    }
                }
                console.log(previewState)
                setState(!State)
            }
            else{
                console.log("Devices smaller than 1000px")
            }
        }
        //Function gets called every 3.5seconds 
        setTimeout(() => {
            changeStyle()
        }, 3500);
    }, [State]);
    
    //Return JSX
    if(window.innerWidth > 1000){
        return (
            <div className="hytaleDesignBackground">
                <div className="previewContainer">
                    <motion.div animate="in" exit="exit" initial="init" variants={preview1Styles} id="preview1" className="previews preview1">
                        <div className="preview1Background"/>
                    </motion.div>

                    <motion.div animate="in" exit="exit" initial="init" variants={preview2Styles} id="preview2" className="previews preview2">
                        <div className="preview2Background"/>
                    </motion.div>

                    <motion.div animate="in" exit="exit" initial="init" variants={preview3Styles} id="preview3" className="previews preview3">
                        <div className="preview3Background"/>
                    </motion.div>
                </div>
            </div>
        )
    }
    return(
        <div className="hytaleDesignBackground">
            <div className="previewContainer">
                <div id="preview1" className="previews preview1">
                    <div className="preview1Background"/>
                </div>

                <div id="preview2" className="previews preview2">
                    <div className="preview2Background"/>
                </div>

                <div id="preview3" className="previews preview3">
                    <div className="preview3Background"/>
                </div>
            </div>
        </div>
    )   
    
}

export default HytaleDesign;
