import React from "react"
//Css
import '../assets/css/homepage.css';
//Import component
import Nav from "../components/Nav"
import SelectIcon from "../components/SelectIcon" //SelectIcon has icon prop that takes the name of the svg. It needs to get imported to the selectIcon component
import Particles from "react-particles-js"
import particlesConfig from "../assets/ParticlesConfig/particlesjs-config.json"

var currentNavState = false
var buttonState = false
//Animation for navigation. Takes true / false as parameter.
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
function toggleNav(){
        
    if(currentNavState === false){
        animationNav(true)
        currentNavState = true
    }
    else{
        animationNav(false)
        currentNavState = false
    }
}
//Applying Class: Target to Section on Click. Function Takes the number of the sectionId as parameter.
function setSectionsTarget(id){
    //Getting number of sections to loop through
    var getSections = document.getElementsByClassName("sections")
    var setSectionTarget = document.getElementById(`sections${id}`)
    var setSectionShadowTarget = document.getElementById(`sectionShadowTarget${id}`)

    var sectionNum = 1
    for(var i = 0; i < getSections.length; i++){
        var getSection = document.getElementById(`sections${sectionNum}`)
        var getSectionShadowTarget = document.getElementById(`sectionShadowTarget${sectionNum}`)

        getSectionShadowTarget.classList.remove("sectionShadowTarget")
        getSection.classList.remove("sectionsTarget")
        ++ sectionNum
    }

    setSectionTarget.classList.add("sectionsTarget")
    setSectionShadowTarget.classList.add("sectionShadowTarget")

}
//Toggles Animation for hovering over GetStarted button. 
function hoverButton(){
    var getButtonStyle = document.getElementById("buttonStyleBox")
    if(buttonState === false){
        getButtonStyle.style.width ="100%"
        buttonState = true
    }
    else{
        getButtonStyle.style.width ="0%"
        buttonState = false
    }
}


const HomepageContainer = (props) => {  
    
    
    return(
        <div className="homepageContainer" id="home">
            <div id="homePageBackground" className="homePageBackground">
                <Particles id="particles" className="particles" params={particlesConfig}></Particles>
            </div>

            <div className="homepageContentContainer">
                <div className="topSectionContainer">
                    <div className="homepageTopDecoration"></div>
                    <div id="moon" className="moonContainer">
                        <div className="moonLight"> </div>
                        <div className="moonLightV2"> </div>
                    <div/>
                </div>
                    
                <div onClick={toggleNav} className="openNavIconContainer"><SelectIcon icon="MenuIcon"/></div>
                </div>
                <div className="middleSectionContainer">
                    <h1>{"SIMPLE & CLEAN"}</h1>
                    <h2>THE WORLD OF DESIGN</h2>
                    <p>There are diffrent ways to talk to a customer and design is an important one. Let's create something unique. </p>
                    <button onMouseEnter={() => hoverButton()} onMouseLeave={() => hoverButton()} id="getStartedButton"> 
                        <div>GET STARTED</div>
                        <div id="buttonStyleBox" className="buttonStyleBox"></div>
                    </button>
                        
                </div>
                <div className="sectionContainer">
                    <div className="sectionContent">
                        <div id="sections1" className="sections sectionsTarget" onClick={ () => setSectionsTarget(1)}>
                            <div className="sectionName" >Homepage</div>   
                            <div id="sectionShadowTarget1" className="sectionShadow sectionShadowTarget"></div>
                            
                        </div>
                        
                        <span />

                        <div id="sections2" className="sections" onClick={ () => setSectionsTarget(2)}>
                            <div className="sectionName" >Strength</div>
                            <div id="sectionShadowTarget2"></div>
                        </div>

                        <span />

                        <div id="sections3" className="sections" onClick={ () => setSectionsTarget(3)}>
                            <div className="sectionName" >Routine</div>
                            <div id="sectionShadowTarget3"></div>
                        </div>

                        <span />

                        <div id="sections4" className="sections" onClick={ () => setSectionsTarget(4)}>
                            <div className="sectionName" >Daily</div>
                            <div id="sectionShadowTarget4"></div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <Nav toggleNav={toggleNav}/>  
        </div>
    );
}

export default HomepageContainer