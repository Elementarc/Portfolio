import React, {useState, useEffect} from 'react';

const LogoName = () => {
    var windowWidth = window.innerWidth
    const [Logo, setLogo] = useState("Created by Arctyp");

    useEffect(() =>{
        if(windowWidth <= 1400){
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
