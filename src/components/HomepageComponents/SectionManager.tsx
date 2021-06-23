import React, {useEffect} from 'react';
import "./styleSheets/sectionManager.scss"
import {ReactComponent as HomePagination} from "../../assets/svgs/homeSectionIcon.svg"
import {motion} from "framer-motion"



const SectionManager = (props: any) => {
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
            <div className="sectionManagerLink" onMouseEnter={() => hoverEffects(true, 0)} onMouseLeave={() => hoverEffects(false, 0)} onClick={() => {props.setLocationIndex(0); props.setUrlBasedOnLocationIndex(0)}}>
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName0">Homepage</p>

                <HomePagination className="icon" id="icon0" />
            </div>

            <span />
            <div className="sectionManagerLink" onMouseEnter={() => hoverEffects(true, 1)} onMouseLeave={() => hoverEffects(false, 1)} onClick={() => {props.setLocationIndex(1); props.setUrlBasedOnLocationIndex(1)}} >
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName1">Passion</p>
                <HomePagination  className="icon" id="icon1"/>
            </div>
            <span />
            <div className="sectionManagerLink" onMouseEnter={() => hoverEffects(true, 2)} onMouseLeave={() => hoverEffects(false, 2)} onClick={() => {props.setLocationIndex(2); props.setUrlBasedOnLocationIndex(2)}}>
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName2">News</p>
                <HomePagination className="icon" id="icon2"/>
            </div>
            <span />
            <div className="sectionManagerLink" onMouseEnter={() => hoverEffects(true, 3)} onMouseLeave={() => hoverEffects(false, 3)} onClick={() => {props.setLocationIndex(3); props.setUrlBasedOnLocationIndex(3)}}>
                <div className="iconShadow" />
                <p className="sectionName" id="sectionName3">Connect</p>
                <HomePagination className="icon" id="icon3"/>
                
            </div>
            <div className="sectionBackground"></div>
            <div className="sectionBottomGradiant"></div>
        </motion.div>
    );
}

export default SectionManager;
