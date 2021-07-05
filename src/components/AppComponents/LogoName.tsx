import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheets/logo.scss"


const LogoName = (props: any) => {
    const [Logo, setLogo] = useState("Presented by Elementarc");

    
    useEffect(() => {
        function resizeLogoRender() {
            if(window.innerWidth <= 900 && Logo === "Presented by Elementarc"){
        
                setLogo("ELEMENTARC")
            }
            else if(window.innerWidth > 900 && Logo === "ELEMENTARC"){
          
                setLogo("Presented by Elementarc")
            }
        }
        window.addEventListener("resize", resizeLogoRender)
        
        return(() =>{
            window.removeEventListener("resize", resizeLogoRender)
        })
      }, [Logo]);
    
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} className="LogoContainer">
            <p>{Logo}</p>
        </motion.div>
    );
}

export default LogoName;
