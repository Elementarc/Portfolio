import React from 'react';
import "./styleSheets/blackBar.scss"
import {motion} from "framer-motion"
//Props for animation

const Blackbar = (props: any) => {
    return (
        <motion.div  animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} className="topBar"></motion.div>
    );
}

export default Blackbar;
