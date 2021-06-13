import React, {useEffect} from 'react';
import "./styleSheets/sectionManager.scss"
import {Link, useHistory} from "react-router-dom"
import {ReactComponent as HomePagination} from "../../assets/svgs/homeSectionIcon.svg"
import {motion} from "framer-motion"


//Variable to make wheel eventlistener not change on every wheel scroll. 1 second delay before switching url again.
var animationStop = false
var timer: any
const SectionManager = (props: any) => {
    const history = useHistory()
    function hoverEffects(hover: boolean, linkIndex: number){
        if(window.innerWidth > 900){
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

    //Adds listeners and removes them. So wheel changes url on wheelup / wheeldown
    useEffect(() => {
        //Checks if scroll up or down to then add 1 or subtract 1 from locationIndex and replace url with right path
        function wheelListner(e: any) {
            if(history.location.pathname.includes("/home") === true){
                if(window.innerWidth > 1300 && window.innerHeight >= 950){
                    if(animationStop === false){
                        //wheel UP
                        if(e.deltaY < 0){
                            //Setting the locationIndex so Partent component can switch to the right URL
                            if(props.locationIndex > 0){
                                props.setLocationIndex(props.locationIndex - 1)
                                animationStop = true
                                timer = setTimeout(() => {
                                    animationStop = false
                                }, 700);
                            }
                        }
                        //wheel DOWN
                        else{
                            if(props.locationIndex < 3){
                                props.setLocationIndex(props.locationIndex + 1)
                                animationStop = true
                                timer = setTimeout(() => {
                                    animationStop = false
                                }, 700);
                            }
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
    }, [props, history.location.pathname])

    //clearing timer animationStop Timer
    useEffect(() => {
        return () => {
            clearTimeout(timer)
        };
    }, []);
    //Setting target Styles for sectionManager on Url change
    useEffect(() => {
        function setTarget() {
            var getIcon = document.querySelectorAll(".icon")
            var getIconShadow = document.querySelectorAll(".iconShadow")
            var getSectionName = document.querySelectorAll(".sectionName")

            if(props.locationIndex === 0){
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
            else if(props.locationIndex === 1){

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
            else if(props.locationIndex === 2){
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
            else if(props.locationIndex === 3){
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
    }, [props.locationIndex]);
    
    return (
        <motion.div  animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} className="SectionContainer">
            <Link onMouseEnter={() => hoverEffects(true, 0)} onMouseLeave={() => hoverEffects(false, 0)} onClick={() => props.setLocationIndex(0)} to="/home">
                <div className="iconShadow" />
                <p  className="sectionName" id="sectionName0">Homepage</p>

                <HomePagination className="icon" id="icon0" />
            </Link>
            <span />
            <Link onMouseEnter={() => hoverEffects(true, 1)} onMouseLeave={() => hoverEffects(false, 1)} onClick={() => props.setLocationIndex(1)}  to="/home/passion">
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName1">Passion</p>
                <HomePagination  className="icon" id="icon1"/>
            </Link>
            <span />
            <Link onMouseEnter={() => hoverEffects(true, 2)} onMouseLeave={() => hoverEffects(false, 2)} onClick={() => props.setLocationIndex(2)} to="/home/news">
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName2">News</p>
                <HomePagination className="icon" id="icon2"/>
            </Link>
            <span />
            <Link onMouseEnter={() => hoverEffects(true, 3)} onMouseLeave={() => hoverEffects(false, 3)} onClick={() => props.setLocationIndex(3)} to="/home/contact">
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName3">Connect</p>
                <HomePagination className="icon" id="icon3"/>
                
            </Link>
            <div className="sectionBackground"></div>
            <div className="sectionBottomGradiant"></div>
        </motion.div>
    );
}

export default SectionManager;
