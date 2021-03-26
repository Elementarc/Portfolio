import React, {useEffect, useState} from 'react';
import "../cStyles/sectionManager.scss"
import {Link, useHistory} from "react-router-dom"

//Toggles Animation for sectionNames on Hover. Takes the number from sectionNameId as parameter
function toogleSectionName(toggle: boolean) {
    var getSections = document.getElementsByClassName("sectionName") as HTMLCollection
    var getSectionContent = document.getElementById("sectionContent") as HTMLDivElement

    //Creating an array with for index to be able to loop through with foreach
    var arr = []
    for(var i = 0; i < getSections.length; i++){
        arr.push(i)
    }
    
    if(toggle === false){
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
//Gets triggert when hovered over sectionNames. Takes toggle parameter and number from id


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
    }
}
const SectionManager = () => {
    var url = useHistory()

    useEffect(() =>{
        setTarget(url.location.pathname)
    })

    return (
        <div className="SectionContainer">
            <div id="sectionContent" className="sectionContent" onMouseEnter={() => toogleSectionName(false)} onMouseLeave={() => toogleSectionName(true)}>
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
        </div>
    );
}

export default SectionManager;
