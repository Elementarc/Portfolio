import React from 'react';
import "./styleSheets/topBar.scss"
import {motion} from "framer-motion"
const Blackbar = (props: any) => {
    return (
        <motion.div  animate="in" exit="out" initial="initial" variants={props.animation} className="topBar"></motion.div>
    );
}

export default Blackbar;
