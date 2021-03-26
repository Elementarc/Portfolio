import React from 'react';
import "./styleSheets/scrollDown.scss"
import SelectIcon from "./SelectIcon"


const ScrollDown = () => {
    function scrolldownContainer(scrollY: number) {
        var getScrolldownContainer = document.getElementById("ScrolldownContainer") as HTMLDivElement
        
        if(scrollY > 1){
            getScrolldownContainer.style.opacity = "0"
        }
        else{
            getScrolldownContainer.style.opacity = "1"
        }
    }
    
    
    window.addEventListener("scroll", () =>{
        var scrollY: number = window.scrollY

        scrolldownContainer(scrollY)
    })
    
    return (
        <div id="ScrolldownContainer" className="ScrolldownContainer">
            <SelectIcon icon="DownArrowIcon"></SelectIcon>
        </div>
    );
}

export default ScrollDown;
