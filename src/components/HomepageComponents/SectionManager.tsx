import React, {useEffect, useMemo} from 'react';
import "./styleSheets/sectionManager.scss"
import {Link, useHistory, useLocation} from "react-router-dom"
import {ReactComponent as HomePagination} from "../../assets/svgs/homePagination.svg"
import {motion} from "framer-motion"




const SectionManager = (props: any) => {
    const location = useLocation()
    const history = useHistory()

    function hoverEffects(hover: boolean, linkIndex: number){
        if(window.innerWidth > 1000){
            var getIcon = document.querySelectorAll(".icon")
            var getSectionName = document.querySelectorAll(".sectionName")

            if(hover === true){
                getIcon[linkIndex].classList.add("svgIconHover")
                getSectionName[linkIndex].classList.add("sectionNameHover")
            }
            else{
                getSectionName[linkIndex].classList.remove("sectionNameHover")
                getIcon[linkIndex].classList.remove("svgIconHover")
            }
        }
    }

    //Saving props into cache to not always re compute it on every rerender
    var properties = useMemo(() =>{
        var properties = {
            locationIndex: props.locationIndex,
            setLocationIndex: props.setLocationIndex,
        }
        return properties
    }, [props.locationIndex, props.setLocationIndex])
    //Adds listeners and removes them. So wheel changes url on wheelup / wheeldown
    useEffect(() => {
        //Checks if scroll up or down to then add 1 or subtract 1 from locationIndex and replace url with right path
        function wheelListner(e: any) {
            if(history.location.pathname.includes("/home") === true){
                if(window.innerWidth >= 900 && window.innerHeight >= 950){
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
    }, [properties,history.location.pathname])

    //Setting target Styles for sectionManager on Url change
    useEffect(() => {
        function setTarget() {
            var getIcon = document.querySelectorAll(".icon")
            var getIconShadow = document.querySelectorAll(".iconShadow")
            var getSectionName = document.querySelectorAll(".sectionName")

            if(location.pathname.toLowerCase() === "/home"){
                getIcon[0].classList.add("svgIconTarget")
                getIconShadow[0].classList.add("iconShadowTarget")
                getSectionName[0].classList.add("sectionNameTarget")
                //New Class for sectionName To only add opacity 1 because media query for mobile is: p{opacity: 0}
                getSectionName[0].classList.add("pTarget")

                getIcon[1].classList.remove("svgIconTarget")
                getIconShadow[1].classList.remove("iconShadowTarget")
                getSectionName[1].classList.remove("sectionNameTarget")
                getSectionName[1].classList.remove("pTarget")

                getIcon[2].classList.remove("svgIconTarget")
                getIconShadow[2].classList.remove("iconShadowTarget")
                getSectionName[2].classList.remove("sectionNameTarget")
                getSectionName[2].classList.remove("pTarget")

                getIcon[3].classList.remove("svgIconTarget")
                getIconShadow[3].classList.remove("iconShadowTarget")
                getSectionName[3].classList.remove("sectionNameTarget")
                getSectionName[3].classList.remove("pTarget")
            }
            else if(location.pathname.toLowerCase() === "/home/strength"){

                getIcon[1].classList.add("svgIconTarget")
                getIconShadow[1].classList.add("iconShadowTarget")
                getSectionName[1].classList.add("sectionNameTarget")
                getSectionName[1].classList.add("pTarget")

                getIcon[0].classList.remove("svgIconTarget")
                getIconShadow[0].classList.remove("iconShadowTarget")
                getSectionName[0].classList.remove("sectionNameTarget")
                getSectionName[0].classList.remove("pTarget")

                getIcon[2].classList.remove("svgIconTarget")
                getIconShadow[2].classList.remove("iconShadowTarget")
                getSectionName[2].classList.remove("sectionNameTarget")
                getSectionName[2].classList.remove("pTarget")

                getIcon[3].classList.remove("svgIconTarget")
                getIconShadow[3].classList.remove("iconShadowTarget")
                getSectionName[3].classList.remove("sectionNameTarget")
                getSectionName[3].classList.remove("pTarget")
            }
            else if(location.pathname.toLowerCase() === "/home/routine"){
                getIcon[2].classList.add("svgIconTarget")
                getIconShadow[2].classList.add("iconShadowTarget")
                getSectionName[2].classList.add("sectionNameTarget")
                getSectionName[2].classList.add("pTarget")

                getIcon[1].classList.remove("svgIconTarget")
                getIconShadow[1].classList.remove("iconShadowTarget")
                getSectionName[1].classList.remove("sectionNameTarget")
                getSectionName[1].classList.remove("pTarget")

                getIcon[0].classList.remove("svgIconTarget")
                getIconShadow[0].classList.remove("iconShadowTarget")
                getSectionName[0].classList.remove("sectionNameTarget")
                getSectionName[0].classList.remove("pTarget")

                getIcon[3].classList.remove("svgIconTarget")
                getIconShadow[3].classList.remove("iconShadowTarget")
                getSectionName[3].classList.remove("sectionNameTarget")
                getSectionName[3].classList.remove("pTarget")
            }
            else if(location.pathname.toLowerCase() === "/home/daily"){
                getIcon[3].classList.add("svgIconTarget")
                getIconShadow[3].classList.add("iconShadowTarget")
                getSectionName[3].classList.add("sectionNameTarget")
                getSectionName[3].classList.add("pTarget")

                getIcon[1].classList.remove("svgIconTarget")
                getIconShadow[1].classList.remove("iconShadowTarget")
                getSectionName[1].classList.remove("sectionNameTarget")
                getSectionName[1].classList.remove("pTarget")

                getIcon[2].classList.remove("svgIconTarget")
                getIconShadow[2].classList.remove("iconShadowTarget")
                getSectionName[2].classList.remove("sectionNameTarget")
                getSectionName[2].classList.remove("pTarget")

                getIcon[0].classList.remove("svgIconTarget")
                getIconShadow[0].classList.remove("iconShadowTarget")
                getSectionName[0].classList.remove("sectionNameTarget")
                getSectionName[0].classList.remove("pTarget")
            }
        }
        setTarget()
    }, [location.pathname]);
    return (
        <motion.div  animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} className="SectionContainer">
            <Link onMouseEnter={() => hoverEffects(true, 0)} onMouseLeave={() => hoverEffects(false, 0)} onClick={() => properties.setLocationIndex(0)} to="/home">
                <div className="iconShadow" />
                <p  className="sectionName" id="sectionName0">Homepage</p>

                <HomePagination className="icon" id="icon0" />
            </Link>
            <span />
            <Link onMouseEnter={() => hoverEffects(true, 1)} onMouseLeave={() => hoverEffects(false, 1)} onClick={() => properties.setLocationIndex(1)}  to="/home/strength">
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName1">Strength</p>
                <HomePagination  className="icon" id="icon1"/>
            </Link>
            <span />
            <Link onMouseEnter={() => hoverEffects(true, 2)} onMouseLeave={() => hoverEffects(false, 2)} onClick={() => properties.setLocationIndex(2)} to="/home/routine">
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName2">Routine</p>
                <HomePagination className="icon" id="icon2"/>
            </Link>
            <span />
            <Link onMouseEnter={() => hoverEffects(true, 3)} onMouseLeave={() => hoverEffects(false, 3)} onClick={() => properties.setLocationIndex(3)} to="/home/daily">
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName3">Daily</p>
                <HomePagination className="icon" id="icon3"/>
                
            </Link>
        </motion.div>
    );
}

export default SectionManager;
