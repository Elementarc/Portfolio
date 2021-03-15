import React from 'react';
import {Link} from "react-router-dom"

//Applying Class: Target to Section on Click. Function Takes the number of the section ID as parameter.
function setSectionsTarget(id: number){
    //Getting number of sections to loop through
    var getSections = document.getElementsByClassName("sections") as HTMLCollection
    var setSectionTarget = document.getElementById(`sections${id}`) as HTMLDivElement
    var setSectionShadowTarget = document.getElementById(`sectionShadowTarget${id}`) as HTMLDivElement

    var sectionNum = 1
    for(var i = 0; i < getSections.length; i++){
        var getSection = document.getElementById(`sections${sectionNum}`) as HTMLDivElement
        var getSectionShadowTarget = document.getElementById(`sectionShadowTarget${sectionNum}`) as HTMLDivElement 

        getSectionShadowTarget.classList.remove("sectionShadowTarget")
        getSection.classList.remove("sectionsTarget")
        ++ sectionNum
    }

    setSectionTarget.classList.add("sectionsTarget")
    setSectionShadowTarget.classList.add("sectionShadowTarget")

}
//Toggles Animation for sectionNames on Hover. Takes the number from sectionNameId as parameter
function toogleSectionName(id: number, toggle: boolean) {
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
                var getSectionName = document.getElementById(`sectionName${id + i}`) as HTMLDivElement
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
                var getSectionName = document.getElementById(`sectionName${id + n }`) as HTMLDivElement
                getSectionName.style.opacity = "0"
                getSectionName.style.transform = "scale(0)"
                getSectionName.style.pointerEvents = "none"
                getSectionContent.style.width = "100%"
            }, n * 100);
        })
    }
}
//Gets triggert when hovered over sectionNames. Takes toggle parameter and number from id
function sectionNameHover(id: number, toggle: boolean) {
    var getSectionName = document.getElementById(`sectionName${id}`) as HTMLDivElement
    if(toggle === true){
        getSectionName.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
    }
    else{
        getSectionName.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }
}

const SectionManager = () => {
    return (
        <div className="SectionContainer">
            <div onMouseEnter={() => toogleSectionName(1, false)} onMouseLeave={() => toogleSectionName(1, true)} id="sectionContent" className="sectionContent">
                        <Link to="/home">
                            <div id="sections1" className="sections sectionsTarget" onClick={ () => setSectionsTarget(1)}>
                                <div id="sectionName1" className="sectionName" onMouseEnter={() => sectionNameHover(1, true)} onMouseLeave={() => sectionNameHover(1, false)}>Homepage</div>   
                                <div id="sectionShadowTarget1" className="sectionShadow sectionShadowTarget"></div>
                            </div>
                        </Link>
                        
                        
                        <span />

                        <Link to="/home/strength">
                            <div id="sections2" className="sections" onClick={ () => setSectionsTarget(2)}>
                                <div id="sectionName2" className="sectionName" onMouseEnter={() => sectionNameHover(2, true)} onMouseLeave={() => sectionNameHover(2, false)}>Strength</div>
                                <div id="sectionShadowTarget2"></div>
                            </div>
                        </Link>
                        

                        <span />

                        <Link to="/home/routine">
                            <div id="sections3" className="sections" onClick={ () => setSectionsTarget(3)}>
                                <div id="sectionName3" className="sectionName" onMouseEnter={() => sectionNameHover(3, true)} onMouseLeave={() => sectionNameHover(3, false)} >Routine</div>
                                <div id="sectionShadowTarget3"></div>
                            </div>
                        </Link>
                        

                        <span />

                        <Link to="/home/daily">
                            <div id="sections4" className="sections" onClick={ () => setSectionsTarget(4)}>
                                <div id="sectionName4" className="sectionName" onMouseEnter={() => sectionNameHover(4, true)} onMouseLeave={() => sectionNameHover(4, false)} >Daily</div>
                                <div id="sectionShadowTarget4"></div>
                            </div>
                        </Link>
                        
                    </div>
        </div>
    );
}

export default SectionManager;
