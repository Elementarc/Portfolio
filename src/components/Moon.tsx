import React, {useState, useEffect} from 'react';
//component
import {motion} from "framer-motion"

import "./styleSheets/moon.scss"
import {useLocation } from 'react-router';

const Moon = (props: any) => {
    const [AnimationProps, setAnimationProps] = useState({
        initial: {
        x: 0,
        y: -150,
        opacity: 0,
        },
        in: {
            transition: {delay: 2, duration: 1.2},
            x: 0,
            y: 0,
            opacity: 1,
        },
        out: {
            transition: {duration: 0.5},
            opacity: 0,
            y: 0,
        },
    });
    
    var location = useLocation().pathname
    //changes moon animation props everytime the url changes
    useEffect(() => {
        if(location === "/home"){
            setAnimationProps({
                initial: {
                    x: 0,
                    y: -150,
                    opacity: 0,
                },
                in: {
                    transition: {delay: 0, duration: 1.2},
                    x: 0,
                    y: 0,
                    opacity: 1,
                },
                out: {
                    transition: {duration: 0.5},
                    opacity: 0,
                    y: 0,
                },
            });
        }
        else if(location === "/home/strength"){
            setAnimationProps({
                initial: {
                    x: 0,
                    y: 0,
                    opacity: 0,
                },
                in: {
                    transition: {delay: 0, duration: 1.2},
                    x: 15,
                    y: -20,
                    opacity: 1,
                },
                out: {
                    transition: {duration: 0.5},
                    opacity: 0,
                    y: 0,
                },
            });
        }
        else if(location === "/home/routine"){
            setAnimationProps({
                initial: {
                    x: 0,
                    y: 0,
                    opacity: 0,
                },
                in: {
                    transition: {delay: 0, duration: 1.2},
                    x: 30,
                    y: -40,
                    opacity: 1,
                },
                out: {
                    transition: {duration: 0.5},
                    opacity: 0,
                    y: 0,
                },
            });
        }
        else if(location === "/home/daily"){
            setAnimationProps({
                initial: {
                    x: 0,
                    y: 0,
                    opacity: 0,
                },
                in: {
                    transition: {delay: 0, duration: 1.2},
                    x: 45,
                    y: -60,
                    opacity: 1,
                },
                out: {
                    transition: {duration: 0.2},
                    opacity: 0,
                    y: -500,
                },
            });
        }
        
    },[location]);
    
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={AnimationProps} id="moon"  className="moonContainer">
            <div className="moonLight"></div>
            <div className="moonLightV2"></div>
        </motion.div>        
    );
}

export default Moon;
