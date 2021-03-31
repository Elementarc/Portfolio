import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheets/logo.scss"

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
const LogoName = (props: any) => {
    const [Logo, setLogo] = useState("Created by Arctyp");

    useEffect(() =>{
        var windowWidth = window.innerWidth

        if(windowWidth <= 900){
            setLogo("ARCTYP")
        }
    }, [])
    

    return (
        <motion.div animate="in" exit="out" initial="initial" variants={interfaceAnimation} className="LogoContainer">
            <p>{Logo}</p>
        </motion.div>
    );
}

export default LogoName;
