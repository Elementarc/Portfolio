import React, {useEffect} from 'react';
import "./styleSheets/sectionManager.scss"
import {Link, useLocation, useHistory} from "react-router-dom"
import {motion} from "framer-motion"


var locationIndex = 0
//Toggles Animation for sectionNames on Hover. Does not get triggert when device width is below 600px
function toogleSectionName(toggle: boolean) {
    var getSections = document.getElementsByClassName("sectionName") as HTMLCollection
    var getSectionContent = document.getElementById("sectionContent") as HTMLDivElement

    //Animation only happens if device width is > 900
    if(window.innerWidth >= 900){
        //Creating an array with for index to be able to loop through with foreach
        var arr = []
        for(var i = 0; i < getSections.length; i++){
            arr.push(i)
        }

        if(toggle === true){
            arr.forEach( i => {
                setTimeout(() => {
                    var getSectionName = document.getElementById(`sectionName${1 + i}`) as HTMLDivElement
                    getSectionName.style.opacity = "1"
                    getSectionName.style.transform = "scale(1)"
                    getSectionName.style.pointerEvents = "visible"
                    getSectionContent.style.width = "180px"
                }, i * 100)
            })
            
        }
        else{
            arr.forEach(n =>{
                setTimeout(() => {
                    var getSectionName = document.getElementById(`sectionName${1 + n }`) as HTMLDivElement
                    getSectionName.style.opacity = "0"
                    getSectionName.style.transform = "scale(0)"
                    getSectionName.style.pointerEvents = "none"
                    getSectionContent.style.width = "100%"
                }, n * 100);
            })
        }
    }
    else{
        //console.log("animation will not get triggert since device width is smaller than 900")
    }
    
}
//sets style for section: takes url as parameter to check which section button needs to light up and also sets the location index for wheelListener function
function setTarget(url: string) {
    var getSectionTarget1 = document.getElementById("sections1") as HTMLDivElement
    var getSectionTarget2 = document.getElementById("sections2") as HTMLDivElement
    var getSectionTarget3 = document.getElementById("sections3") as HTMLDivElement
    var getSectionTarget4 = document.getElementById("sections4") as HTMLDivElement

    var getShadowTarget1 = document.getElementById("sectionShadowTarget1") as HTMLDivElement
    var getShadowTarget2 = document.getElementById("sectionShadowTarget2") as HTMLDivElement
    var getShadowTarget3 = document.getElementById("sectionShadowTarget3") as HTMLDivElement
    var getShadowTarget4 = document.getElementById("sectionShadowTarget4") as HTMLDivElement
    
    if(url === "/home"){
        getSectionTarget1.classList.add("sectionsTarget")
        getShadowTarget1.classList.add("sectionShadowTarget")

        getSectionTarget2.classList.remove("sectionsTarget")
        getSectionTarget3.classList.remove("sectionsTarget")
        getSectionTarget4.classList.remove("sectionsTarget")

        getShadowTarget2.classList.remove("sectionShadowTarget")
        getShadowTarget3.classList.remove("sectionShadowTarget")
        getShadowTarget4.classList.remove("sectionShadowTarget")
        locationIndex = 0
    }
    else if(url === "/home/strength"){
        getSectionTarget2.classList.add("sectionsTarget")
        getShadowTarget2.classList.add("sectionShadowTarget")

        getSectionTarget1.classList.remove("sectionsTarget")
        getSectionTarget3.classList.remove("sectionsTarget")
        getSectionTarget4.classList.remove("sectionsTarget")

        getShadowTarget1.classList.remove("sectionShadowTarget")
        getShadowTarget3.classList.remove("sectionShadowTarget")
        getShadowTarget4.classList.remove("sectionShadowTarget")
        locationIndex = 1
    }
    else if(url === "/home/routine"){
        getSectionTarget3.classList.add("sectionsTarget")
        getShadowTarget3.classList.add("sectionShadowTarget")

        getSectionTarget1.classList.remove("sectionsTarget")
        getSectionTarget2.classList.remove("sectionsTarget")
        getSectionTarget4.classList.remove("sectionsTarget")

        getShadowTarget1.classList.remove("sectionShadowTarget")
        getShadowTarget2.classList.remove("sectionShadowTarget")
        getShadowTarget4.classList.remove("sectionShadowTarget")
        locationIndex = 2
    }
    else if(url === "/home/daily"){
        getSectionTarget4.classList.add("sectionsTarget")
        getShadowTarget4.classList.add("sectionShadowTarget")

        getSectionTarget1.classList.remove("sectionsTarget")
        getSectionTarget2.classList.remove("sectionsTarget")
        getSectionTarget3.classList.remove("sectionsTarget")

        getShadowTarget1.classList.remove("sectionShadowTarget")
        getShadowTarget2.classList.remove("sectionShadowTarget")
        getShadowTarget3.classList.remove("sectionShadowTarget")
        locationIndex = 3
    }
}
//Props for animation
var interfaceAnimation = {
    initial: {
        opacity: 0,
    },
    in: {
        transition: {delay: 2, duration: 1},
        opacity: 1,
    },
    out: {
        transition: {duration: 0.2},
        opacity: 0,
    },
}

const SectionManager = (props: any) => {
    const location = useLocation()
    var path = useHistory()
    useEffect(() =>{
        //setting style for right section-button after checking url
        setTarget(location.pathname)

        //Disables sectionnames after 3 seconds no wheel inputs for better ui
        var timeout = setTimeout(() => {
            toogleSectionName(false)
        }, 3000);
        //Checks if scroll up/down to then adds 1 to locationIndex and replace
        function wheelListner(e: any) {
            //wheel UP
            if(e.deltaY < 0){
                toogleSectionName(true)
                
                locationIndex--
                if(locationIndex > 2){
                    locationIndex = 2
                }

                if(locationIndex === 0){
                    path.replace("/home")
                }
                else if(locationIndex === 1){
                    path.replace("/home/strength")
                }
                else if(locationIndex === 2){
                    path.replace("/home/routine")
                }
                else if(locationIndex === 3){
                    path.replace("/home/daily")
                }
                
                clearTimeout(timeout)
            }
            //wheel DOWN
            else{
                toogleSectionName(true)

                locationIndex++
                if(locationIndex < 1){
                    locationIndex= 1
                }

                if(locationIndex === 0){
                    path.replace("/home")
                }
                else if(locationIndex === 1){
                    path.replace("/home/strength")
                }
                else if(locationIndex === 2){
                    path.replace("/home/routine")
                }
                else if(locationIndex === 3){
                    path.replace("/home/daily")
                }
                clearTimeout(timeout)
            }
        }

        //Eventlistener that uses the function wheellistner
        window.addEventListener("wheel", wheelListner)
        return(() =>{
            window.removeEventListener("wheel", wheelListner)
        })
    })
    return (
        <motion.div animate="in" exit="out" initial="initial" variants={interfaceAnimation} className="SectionContainer">
            <div id="sectionContent" className="sectionContent" onMouseEnter={() => toogleSectionName(true)} onMouseLeave={() => toogleSectionName(false)}>
                        <Link id="sections1" className="sections1" to="/home">
                            <div id="sectionShadowTarget1" className="sectionShadow"></div>
                            <div className="section">
                                <div id="sectionName1" className="sectionName">Homepage</div>
                            </div>
                            
                        </Link>
                        
                        <Link id="sections2" to="/home/strength">
                            <div id="sectionShadowTarget2" className="sectionShadow"></div>
                            <div  className="section">
                                <div id="sectionName2" className="sectionName">Strength</div>
                            </div>
                        </Link>
                        
                        <Link id="sections3" to="/home/routine">
                            <div id="sectionShadowTarget3" className="sectionShadow"></div>
                            <div  className="section">
                                <div id="sectionName3" className="sectionName">Routine</div>
                            </div>
                        </Link>
                        
                        <Link id="sections4" to="/home/daily">
                            <div id="sectionShadowTarget4" className="sectionShadow"></div>
                            <div  className="section">
                                <div id="sectionName4" className="sectionName">Daily</div>
                            </div>
                        </Link>
                    </div>
        </motion.div>
    );
}

export default SectionManager;
