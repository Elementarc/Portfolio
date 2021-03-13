import React from 'react';
//Applying Class: Target to Section on Click. Function Takes the number of the section ID as parameter.
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
//Toggles Animation for sectionNames on Hover. Takes the number from sectionNameId as parameter
function toogleSectionName(id, toggle) {
    var getSections = document.getElementsByClassName("sectionName")
    var getSectionContent = document.getElementById("sectionContent")

    //Creating an array with for index to be able to loop through with foreach
    var arr = []
    for(var i = 0; i < getSections.length; i++){
        arr.push(i)
    }
    
    if(toggle === false){
        arr.forEach( i => {
            setTimeout(() => {
                var getSectionName = document.getElementById(`sectionName${id + i}`)
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
                var getSectionName = document.getElementById(`sectionName${id + n }`)
                getSectionName.style.opacity = "0"
                getSectionName.style.transform = "scale(0)"
                getSectionName.style.pointerEvents = "hidden"
                getSectionContent.style.width = "100%"
            }, n * 100);
        })
    }
}
//Gets triggert when hovered over sectionNames. Takes toggle parameter and number from id
function sectionNameHover(id, toggle) {
    var getSectionName = document.getElementById(`sectionName${id}`)
    if(toggle === true){
        getSectionName.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
    }
    else{
        getSectionName.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }
}

const HomepageSectionManager = () => {
    return (
        <div className="sectionContainer">
                    <div onMouseEnter={() => toogleSectionName(1, false)} onMouseLeave={() => toogleSectionName(1, true)} id="sectionContent" className="sectionContent">
                        <div id="sections1" className="sections sectionsTarget" onClick={ () => setSectionsTarget(1)}>
                            <div id="sectionName1" className="sectionName" onMouseEnter={() => sectionNameHover(1, true)} onMouseLeave={() => sectionNameHover(1, false)}>Homepage</div>   
                            <div id="sectionShadowTarget1" className="sectionShadow sectionShadowTarget"></div>
                            
                        </div>
                        
                        <span />

                        <div id="sections2" className="sections" onClick={ () => setSectionsTarget(2)}>
                            <div id="sectionName2" className="sectionName" onMouseEnter={() => sectionNameHover(2, true)} onMouseLeave={() => sectionNameHover(2, false)}>Strength</div>
                            <div id="sectionShadowTarget2"></div>
                        </div>

                        <span />

                        <div id="sections3" className="sections" onClick={ () => setSectionsTarget(3)}>
                            <div id="sectionName3" className="sectionName" onMouseEnter={() => sectionNameHover(3, true)} onMouseLeave={() => sectionNameHover(3, false)} >Routine</div>
                            <div id="sectionShadowTarget3"></div>
                        </div>

                        <span />

                        <div id="sections4" className="sections" onClick={ () => setSectionsTarget(4)}>
                            <div id="sectionName4" className="sectionName" onMouseEnter={() => sectionNameHover(4, true)} onMouseLeave={() => sectionNameHover(4, false)} >Daily</div>
                            <div id="sectionShadowTarget4"></div>
                        </div>
                    </div>
                </div>
    );
}

export default HomepageSectionManager;
