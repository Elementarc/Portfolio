import React, {useEffect} from 'react';
import {motion} from "framer-motion"
import "./styleSheetPage/design.scss"

const Design = () => {
    //Making scrolling not possible on this page
    useEffect(() => {
        let getApp = document.getElementById("App") as HTMLDivElement

        getApp.style.overflow = "hidden"
    });
    
    return (
        <div className="DesignPageContainer">
            
        </div>
    );
}

export default Design;
