import React, {useState, useEffect} from "react"
//needs icon as Prop
import SelectIcon from "../components/SelectIcon"
import Particles from "react-particles-js"
import particlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"
import '../assets/css/homepage.css';

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
            <div className="homePageBackground" style={{}}>
                <Particles className="particles" params={particlesConfig}></Particles>
            </div>
            
            <div className="homepageContentContainer">
                <div className="topSectionContainer">
                    <div className="homepageTopDecoration"></div>
                    <div className="moonContainer">
                        <div className="moonLight"> </div>
                        <div className="moonLightV2"> </div>
                    <div/>
                </div>
                    
                <div onClick={toggleNav} className="openNavIconContainer"><SelectIcon icon="MenuIcon"/></div>
                </div>
                <div className="middleSectionContainer">
                    <h1>{"DESIGN & MORE"}</h1>
                    <h2>THE WORLD OF DESIGN</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                    <button>GET STARTED</button>
                </div>
                <div className="sectionContainer">
                    
                    <div className="sections sectionsTarget">
                        <div className="sectionShadowTarget"></div>
                    </div>

                    <span />

                    <div className="sections">
                        <div></div>
                    </div>

                    <span />

                    <div className="sections">
                        <div></div>
                    </div>

                    <span />

                    <div className="sections">
                        <div></div>
                    </div>
                </div>

                <div className="bottomSectionContainer">
                    <div className="slideShow">
                        <div className="slide1"></div>
                        <div className="slide2"></div>
                        <div className="slide3"></div>
                    </div>
                </div>
                <Nav toggleNav={toggleNav}/>
            </div>
                        
            
                
                    
          
   
            
            

            
            
        </div>
    );
}

export default HomepageContainer