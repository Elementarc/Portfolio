import React, {useState, useEffect} from 'react';
import "./styleSheets/logo.scss"
const LogoName = () => {
    var windowWidth = window.innerWidth
    const [Logo, setLogo] = useState("Created by Arctyp");

    useEffect(() =>{
        if(windowWidth <= 900){
            setLogo("ARCTYP")
        }
    }, [])
    

    return (
        <div className="LogoContainer">
            <p>{Logo}</p>
        </div>
    );
}

export default LogoName;
