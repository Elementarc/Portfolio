import React from 'react';

import "../../assets/css/homepageInterface.css"
//Components
import Nav from "./Interface/Nav"
import InterfaceTopSectionHomepage from "./Interface/InterfaceTopSectionHomepage"
import InterfaceSectionManagerHomepage from "./Interface/InterfaceSectionManagerHomepage"

//Animation for navigation. Takes true / false as parameter. Is used by toggleNav() function
function animationNav(toggle){
    var getNavBlur = document.getElementById("navigationBlur")
    var getNav = document.getElementById("homepageNav")
    if(toggle === true)
    {
        getNav.style.marginRight = "0"
        getNav.style.opacity = "1"
        getNavBlur.style.opacity = "1"
        getNavBlur.style.pointerEvents = "all"
    }
    else{
        getNav.style.marginRight = "-25rem"
        getNav.style.opacity = "0"
        getNavBlur.style.opacity = "0"
        getNavBlur.style.pointerEvents = "none"
    }
    
}
//Toggles Navigation. Using the function: animationNav() to animate the toggle toggle
var navState = false
function toggleNav(){
        
    if(navState === false){
        animationNav(true)
        navState = true
    }
    else{
        animationNav(false)
        navState = false
    }
}

const InterfaceHomepage = () => {
    return (
        <div className="homepageInterface">
            <Nav toggleNav={toggleNav}/>
            <InterfaceTopSectionHomepage toggleNav={toggleNav}/>
            <InterfaceSectionManagerHomepage/>
        </div>
    );
}

export default InterfaceHomepage;
