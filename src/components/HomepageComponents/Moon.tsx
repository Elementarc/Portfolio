import React, {useCallback, useEffect} from 'react';
//component
import {motion, useMotionValue} from "framer-motion"

import "./styleSheets/moon.scss"
import {useLocation } from 'react-router';

var moonTimer: any
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
                if(props.locationIndex === 0){
                    if(y.get() === -200 && x.get() === 0){
                        setTimeout(() => {
                            x.set(0)
                            y.set(0)
                            opacity.set(1)
                        }, 2000);
                    }
                }
                else if(props.locationIndex === 1){
                    setTimeout(() => {
                        x.set(15)
                        y.set(-20)
                        opacity.set(1)
                    }, 2000);
                    
                    
                }
                else if(props.locationIndex === 2){
                    setTimeout(() => {
                        x.set(30)
                        y.set(-40)
                        opacity.set(1)
                    }, 2000);
                }
                else if(props.locationIndex === 3){
                    setTimeout(() => {
                        x.set(45)
                        y.set(-60)
                        opacity.set(1)
                    }, 2000);
                }
            }
            else {
                if(props.locationIndex === 0){
                    x.set(0)
                    y.set(0)
                }
                else if(props.locationIndex === 1){
                    x.set(15)
                    y.set(-20)
                }
                else if(props.locationIndex === 2){
                    x.set(30)
                    y.set(-40)
                }
                else if(props.locationIndex === 3){
                    x.set(45)
                    y.set(-60)
                } 
            }
            
        }
        changeStyle(init)
    }, [x, y, opacity, props.locationIndex])
    
    //Calls changeStyle function on every URL change
    useEffect(() => {
        if(y.get() === -200 && x.get() === 0){
            changeStyle(true)
        }
        else{
            changeStyle(false)
        }
    },[location.pathname, x, y, opacity, changeStyle]);
    
    useEffect(() => {
        function moonOpacity() {
            var getMoon = document.getElementById("moonContainer") as HTMLDivElement
            if(location.pathname.toLowerCase() === "/home/news"){
                moonTimer = setTimeout(() => {
                    getMoon.style.opacity = "0"
                }, 2000);
            }
            else{
                getMoon.style.opacity = "1"
            }
        }
        moonOpacity()
        
        return(() =>{
            clearTimeout(moonTimer)
        })
    }, [location.pathname]);
    //JSX
    return (
        <div id ="moonContainer" style={{transition: "0.3s ease-in-out"}}>
            <motion.div style={{x: x, y: y, opacity: opacity}} exit={{opacity: 0, y: -500}} id="moon"  className="moonContainer">
                <div className="moonLight"></div>
                <div className="moonLightV2"></div>
            </motion.div>   
        </div>

    );
}

export default Moon;
