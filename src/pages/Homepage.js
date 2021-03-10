import React, {useState} from "react"
import SelectIcon from "../components/SelectIcon"
import Particles from "react-particles-js"
import particlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
//Import component
import Nav from "../components/Nav"
//Animation for navigation
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


const HomepageContainer = (props) => {  
    //toggle Nav
    const [currentState, setState] = useState(false)
    //stateHandler for navigation
    function toggleNav(){
        
        if(currentState === false){
            animationNav(true)
            setState(true)
        }
        else{
            animationNav(false)
            setState(false)
        }
    }

    return(
        <div className="homepageContainer" id="home">
            <div className="homePageBackground">
                <Particles params={particlesConfig}></Particles>
            </div>
            
            <div className="homepageContentContainer">
                <div className="topSectionContainer">
                    <div className="homepageTopDecoration"></div>
                    <div onClick={toggleNav} className="openNavIconContainer"><SelectIcon icon="MenuIcon"/></div>
                </div>
                    <div className="middleSectionContainer"></div>
                <Nav toggleNav={toggleNav}/>
            </div>
                        
            
                
                    
          
   
            
            

            
            
        </div>
    );
}

export default HomepageContainer