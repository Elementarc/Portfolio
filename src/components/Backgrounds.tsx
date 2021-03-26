import React from 'react';
import Particles from "react-tsparticles"
import ParticlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
import "./styleSheets/background.scss"
const Backgrounds = () => {
    
    return (
        <Particles className="Background" options={ParticlesConfig}>

        </Particles>
    );
}

export default Backgrounds;
