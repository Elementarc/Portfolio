import React from 'react';
import Particles from "react-tsparticles"
import ParticlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
import {motion} from "framer-motion"

import "./styleSheets/background.scss"
const Backgrounds = (props: any) => {
    
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={props.animation} layout={'position'}>
            <Particles className="Background" options={ParticlesConfig}></Particles>
        </motion.div>
        
    );
}

export default Backgrounds;
