import React, {useCallback ,useEffect, useMemo} from 'react';
import "./styleSheets/sectionManager.scss"
import {Link, useLocation} from "react-router-dom"
import {motion} from "framer-motion"


var timer: any
const SectionManager = (props: any) => {
    const location = useLocation()
    //Toggles Animation for sectionNames. Does not get triggert when device width is below 900px Its a Callback
    const SectionName = useCallback((state: boolean) =>{
        function toggleSectionName(toggle: boolean) {
            let getSections = document.getElementsByClassName("sectionName") as HTMLCollection
            let getSectionContent = document.getElementById("sectionContent") as HTMLDivElement
            //Animation only happens if device width is > 900
            if(window.innerWidth >= 900){
                //Using this if statement to make sure this is not getting triggered when changing to another page because forEach takes a while
                if(location.pathname.includes("/home") === true){
                    //Creating an array with for index to be able to loop through with foreach
                    let arr = []
                    for(let i = 0; i < getSections.length; i++){
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
                        arr.forEach( n =>{
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
            }
            else{
                //console.log("animation will not get triggert since device width is smaller than 900")
            }
        } 
        toggleSectionName(state)
    }, [location.pathname])
    //setting style for right section-button after checking url.
    useEffect(() =>{
        //sets style for section: takes url as parameter to check which section button needs to light up, and also sets the location index for wheelListener function
        function setTarget(url: string) {
            let getSectionTarget1 = document.getElementById("sections1") as HTMLDivElement
            let getSectionTarget2 = document.getElementById("sections2") as HTMLDivElement
            let getSectionTarget3 = document.getElementById("sections3") as HTMLDivElement
            let getSectionTarget4 = document.getElementById("sections4") as HTMLDivElement

            let getShadowTarget1 = document.getElementById("sectionShadowTarget1") as HTMLDivElement
            let getShadowTarget2 = document.getElementById("sectionShadowTarget2") as HTMLDivElement
            let getShadowTarget3 = document.getElementById("sectionShadowTarget3") as HTMLDivElement
            let getShadowTarget4 = document.getElementById("sectionShadowTarget4") as HTMLDivElement
            
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
        setTarget(location.pathname)
        //Toggles sectionNames on pageStart and closes it
        SectionName(true)
        clearTimeout(timer)
        timer = setTimeout(() => {
            SectionName(false)
        }, 3400);
    },[location.pathname, SectionName])

    //Adding eventlistener on mount and removing on unmount
    var properties = useMemo(() =>{
        var properties = {
            locationIndex: props.locationIndex,
            setLocationIndex: props.setLocationIndex,
        }
        return properties
    }, [props.locationIndex, props.setLocationIndex])
    
    useEffect(() => {
        //Checks if scroll up or down to then add 1 or subtract 1 from locationIndex and replace url with right path
        function wheelListner(e: any) {
            if(location.pathname.includes("/home") === true){
                if(window.innerWidth >= 900 && window.innerHeight >= 950){
                    //Toggles sectionNames on scroll and closes it after 3seconds no scrolling
                    SectionName(true)
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        SectionName(false)
                    }, 2000);
                    
                    //wheel UP
                    if(e.deltaY < 0){
                        //Setting the locationIndex so Partent component can switch to the right URL
                        if(properties.locationIndex > 0){
                            properties.setLocationIndex(properties.locationIndex - 1)
                        }
                        
                        
                        
                    }
                    //wheel DOWN
                    else{
                        if(properties.locationIndex < 3){
                            properties.setLocationIndex(properties.locationIndex + 1)
                        }
                    }
                }
                else{
                    //console.log("device smalelr than 900px")
                }
            }
            else{
                //console.log("we are not a home anymore!")
            }
        }
        //Using keydownListener function to disable wheel event to properly zoom in and out without changing home section/urls
        function keydownListener(e: any) {
            if(e.which === 17){
                window.removeEventListener("wheel", wheelListner)
            }
        }
        //Using keyupListener function to enable wheel event back to properly switch between sections section/urls
        function keyupListener(e: any) {
            if(e.which === 17){
                window.addEventListener("wheel", wheelListner)
            }
        }
        //Eventlistener that uses the function wheellistner
        window.addEventListener("wheel", wheelListner)
        
        //Eventlistener to disable or enable wheel event with their functions
        window.addEventListener("keydown", keydownListener)
        window.addEventListener("keyup", keyupListener)
        //Cleanup to disable all eventlistener for no memory leaks
        return(() =>{
            window.removeEventListener("wheel", wheelListner)
            window.removeEventListener("keydown", keydownListener)
            window.removeEventListener("keyup", keyupListener)
        })
    }, [properties,location.pathname, SectionName])

    return (
        <motion.div animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} className="SectionContainer">
            <div id="sectionContent" className="sectionContent" onMouseEnter={() => {SectionName(true); clearTimeout(timer)}} onMouseLeave={() => SectionName(false)}>
                        <Link onClick={() => props.setLocationIndex(0)} id="sections1" className="sections1" to="/home">
                            <div id="sectionShadowTarget1" className="sectionShadow"></div>
                            <div className="section">
                                <div id="sectionName1" className="sectionName">Homepage</div>
                            </div>
                            
                        </Link>
                        
                        <Link onClick={() => props.setLocationIndex(1)} id="sections2" to="/home/strength">
                            <div id="sectionShadowTarget2" className="sectionShadow"></div>
                            <div  className="section">
                                <div id="sectionName2" className="sectionName">Strength</div>
                            </div>
                        </Link>
                        
                        <Link onClick={() => props.setLocationIndex(2)} id="sections3" to="/home/routine">
                            <div id="sectionShadowTarget3" className="sectionShadow"></div>
                            <div  className="section">
                                <div id="sectionName3" className="sectionName">Routine</div>
                            </div>
                        </Link>
                        
                        <Link onClick={() => props.setLocationIndex(3)} id="sections4" to="/home/daily">
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
