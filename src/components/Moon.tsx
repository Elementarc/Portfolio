import React from 'react';
//component
import {motion} from "framer-motion"

import "./styleSheets/moon.scss"

const Moon = (props: any) => {
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={props.animation} id="moon" className="moonContainer">
            <div className="moonLight"></div>
            <div className="moonLightV2"></div>
        </motion.div>
    );
}

export default Moon;
