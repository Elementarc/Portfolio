import React, {useEffect} from 'react';
import Particles from "react-tsparticles"
import ParticlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
import {motion} from "framer-motion"

import "./styleSheets/stars.scss"
import {useLocation} from 'react-router';

var backgroundProps = {
    initial: {
        x: 0,
        y: 0,
        opacity: 0,
    },
    in: {
        x: 0,
        y: 0,
        transition: {delay: 0.2, duration: 0.5},
        opacity: 1,
        
    },
    out: {
        x: 0,
        y: 0,
        transition: {delay: 0.2, duration: 0.5},
        opacity: 0,
    },
}

var num: number = 0
//inserts num to the css prop to make it animate like an elevator
function particlesAnimation(direction: string) {
    var getParticles = document.getElementById("Stars") as HTMLDivElement
    if(direction === "forward"){
        getParticles.style.top = `${-num}%`;
    }
    else if(direction === "backwards"){
        getParticles.style.top = `${-num}%`;
    }
}
const Stars = (props: any) => {
    const location = useLocation().pathname
    //Creating a number for each section to than use it for particlesAnimation
    useEffect(() =>{
        var numBefore = num
        if(location === "/home"){
            num = 100
        }
        else if(location === "/home/strength"){
            num = 200
        }
        else if(location ==="/home/routine"){
            num = 300
        }
        else if(location ==="/home/daily"){
            num = 400
        }

        if(num > numBefore){
            particlesAnimation("forward")
        }
        else if(num < numBefore){
            particlesAnimation("backwards")
        }
    }, [location])
    
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={backgroundProps}>
            <Particles className="Stars" id="Stars" options={ParticlesConfig}></Particles>
        </motion.div>
    );
}

export default Stars;
