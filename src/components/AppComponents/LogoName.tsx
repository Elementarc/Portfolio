import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheets/logo.scss"


const LogoName = (props: any) => {
    const [Logo, setLogo] = useState("Presented by Elementarc");

    useEffect(() =>{
        var windowWidth = window.innerWidth

        if(windowWidth <= 900){
            setLogo("ELEMENTARC")
        }
    }, [])
    

    return (
        <motion.div animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} className="LogoContainer">
            <p>{Logo}</p>
        </motion.div>
    );
}

export default LogoName;
