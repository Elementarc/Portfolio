import React from 'react';
import "./styleSheets/topBar.scss"
import {motion} from "framer-motion"
//Props for animation
var interfaceAnimation = {
    initial: {
        opacity: 0,
    },
    in: {
        transition: {delay: 2, duration: 1},
        opacity: 1,
    },
    out: {
        transition: {duration: 0.2},
        opacity: 0,
    },
}
const Blackbar = (props: any) => {
    return (
        <motion.div  animate="in" exit="out" initial="initial" variants={interfaceAnimation} className="topBar"></motion.div>
    );
}

export default Blackbar;
