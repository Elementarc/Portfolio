import React, {useCallback, useEffect} from 'react';
//component
import {motion, useMotionValue} from "framer-motion"

import "./styleSheets/moon.scss"
import {useLocation } from 'react-router';

const Moon = (props: any) => {
    const location = useLocation()
    //Values to be changed after url changes
    var x = useMotionValue(0)
    var y = useMotionValue(-200)
    var opacity = useMotionValue(0)
    const changeStyle = useCallback((init) =>{
        //Changes moon style properties for specific url. Takes init as parameter to include an initial animation whenever page first opens
        function changeStyle(init: boolean) {
            if(init === true){
                if(location.pathname === "/home"){
                    if(y.get() === -200 && x.get() === 0){
                        setTimeout(() => {
                            x.set(0)
                            y.set(0)
                            opacity.set(1)
                        }, 2000);
                    }
                }
                else if(location.pathname === "/home/strength"){
                    setTimeout(() => {
                        x.set(15)
                        y.set(-20)
                        opacity.set(1)
                    }, 2000);
                    
                    
                }
                else if(location.pathname === "/home/routine"){
                    setTimeout(() => {
                        x.set(30)
                        y.set(-40)
                        opacity.set(1)
                    }, 2000);
                }
                else if(location.pathname === "/home/daily"){
                    setTimeout(() => {
                        x.set(45)
                        y.set(-60)
                        opacity.set(1)
                    }, 2000);
                }
            }
            else {
                if(location.pathname === "/home"){
                    x.set(0)
                    y.set(0)
                }
                else if(location.pathname === "/home/strength"){
                    x.set(15)
                    y.set(-20)
                }
                else if(location.pathname === "/home/routine"){
                    x.set(30)
                    y.set(-40)
                }
                else if(location.pathname === "/home/daily"){
                    x.set(45)
                    y.set(-60)
                } 
            }
            
        }
        changeStyle(init)
    }, [location.pathname, x, y, opacity])
    
    //Calls changeStyle function on every URL change
    useEffect(() => {
        if(y.get() === -200 && x.get() === 0){
            changeStyle(true)
        }
        else{
            changeStyle(false)
        }
    },[location.pathname, x, y, opacity, changeStyle]);
    
    //JSX
    return (
        <motion.div style={{x: x, y: y, opacity: opacity}} exit={{opacity: 0, y: -500}} id="moon"  className="moonContainer">
            <div className="moonLight"></div>
            <div className="moonLightV2"></div>
        </motion.div>        
    );
}

export default Moon;
