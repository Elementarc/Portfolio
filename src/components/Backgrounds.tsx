import React from 'react';
import Particles from "react-tsparticles"
import ParticlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
import {motion} from "framer-motion"

import "./styleSheets/background.scss"

//Props for animation
var backgroundAnimation = {
    initial: {
        opacity: 0,
        top: 0,
    },
    in: {
        transition: {delay: 0.2, duration: 0.3},
        opacity: 1,
        
    },
    out: {
        opacity: 0,
    },
}
const Backgrounds = (props: any) => {
    
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={backgroundAnimation}>
            <Particles className="Background" options={ParticlesConfig}></Particles>
        </motion.div>
        
    );
}

export default Backgrounds;
