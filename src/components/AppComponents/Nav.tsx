
import React, {useEffect, useState} from "react"
import {Link, useHistory, useLocation} from "react-router-dom"
import {AnimatePresence, useAnimation} from "framer-motion"

//icons
import {ReactComponent as HomeIcon} from "../../assets/icons/HomeIcon.svg"
import {ReactComponent as DesignIcon} from "../../assets/icons/DesignIcon.svg"
import {ReactComponent as PixelArtIcon} from "../../assets/icons/PixelArtIcon.svg"
import {ReactComponent as ContactIcon} from "../../assets/icons/ContactIcon.svg"
import {ReactComponent as ProjectsIcon} from "../../assets/icons/ProjectIcon.svg"
import {ReactComponent as MenuIcon} from "../../assets/icons/MenuIcon.svg"
import {ReactComponent as CopyrightIcon} from "../../assets/icons/copyright_black_24dp.svg"
import {ReactComponent as EmailIcon} from "../../assets/icons/mail_outline_black_24dp.svg"
import {ReactComponent as PositionIcon} from "../../assets/icons/explore_black_24dp.svg"
import {ReactComponent as WorldIcon} from "../../assets/icons/public_black_24dp.svg"
import {ReactComponent as DecoIcon} from "../../assets/svgs/underlineIcon.svg" 
import {ReactComponent as Logo} from "../../assets/transparentLogo.svg"
//Import components

import {motion} from "framer-motion"
//CSS
import "./styleSheets/nav.scss"

//cheking url to give navItem the target class
function giveNavStyleTarget(url: string) {
    var getNavItemHome = document.getElementById("navHome") as HTMLDivElement
    var getNavItemHomeIcon = document.getElementById("HomeIcon") as HTMLDivElement

    var getNavItemDesign = document.getElementById("navDesign") as HTMLDivElement
    var getNavItemDesignIcon = document.getElementById("DesignIcon") as HTMLDivElement

    var getNavItemProjects = document.getElementById("navProjects") as HTMLDivElement
    var getNavItemProjectsIcon = document.getElementById("ProjectsIcon") as HTMLDivElement

    var getNavItemPixelart = document.getElementById("navPixelArt") as HTMLDivElement
    var getNavItemPixelArtIcon = document.getElementById("PixelArtIcon") as HTMLDivElement

    var getNavItemContact = document.getElementById("navContact") as HTMLDivElement
    var getNavItemContactIcon = document.getElementById("ContactIcon") as HTMLDivElement
    
    if(url.includes("/home") === true){
        //adding style to targeted nav depending on url
        getNavItemHome.classList.add("targetNavItem")
        getNavItemHomeIcon.classList.add("targetNavIcon")
        //removing style from all others
        getNavItemDesign.classList.remove("targetNavItem")
        getNavItemDesignIcon.classList.remove("targetNavIcon")
        getNavItemProjects.classList.remove("targetNavItem")
        getNavItemProjectsIcon.classList.remove("targetNavIcon")
        getNavItemPixelart.classList.remove("targetNavItem")
        getNavItemPixelArtIcon.classList.remove("targetNavIcon")
        getNavItemContact.classList.remove("targetNavItem")
        getNavItemContactIcon.classList.remove("targetNavIcon")
    }
    else if(url.includes("/design") === true){
        //adding style to targeted nav depending on url
        getNavItemDesign.classList.add("targetNavItem")
        getNavItemDesignIcon.classList.add("targetNavIcon")
        //removing style from all others
        getNavItemHome.classList.remove("targetNavItem")
        getNavItemHomeIcon.classList.remove("targetNavIcon")
        getNavItemProjects.classList.remove("targetNavItem")
        getNavItemProjectsIcon.classList.remove("targetNavIcon")
        getNavItemPixelart.classList.remove("targetNavItem")
        getNavItemPixelArtIcon.classList.remove("targetNavIcon")
        getNavItemContact.classList.remove("targetNavItem")
        getNavItemContactIcon.classList.remove("targetNavIcon")
    }
    else if(url.includes("/projects") === true){
        //adding style to targeted nav depending on url
        getNavItemProjects.classList.add("targetNavItem")
        getNavItemProjectsIcon.classList.add("targetNavIcon")
        //removing style from all others
        getNavItemHome.classList.remove("targetNavItem")
        getNavItemHomeIcon.classList.remove("targetNavIcon")
        getNavItemDesign.classList.remove("targetNavItem")
        getNavItemDesignIcon.classList.remove("targetNavIcon")
        getNavItemPixelart.classList.remove("targetNavItem")
        getNavItemPixelArtIcon.classList.remove("targetNavIcon")
        getNavItemContact.classList.remove("targetNavItem")
        getNavItemContactIcon.classList.remove("targetNavIcon")
    }
    else if(url.includes("/pixelart") === true){
        //adding style to targeted nav depending on url
        getNavItemPixelart.classList.add("targetNavItem")
        getNavItemPixelArtIcon.classList.add("targetNavIcon")
        //removing style from all others
        getNavItemHome.classList.remove("targetNavItem")
        getNavItemHomeIcon.classList.remove("targetNavIcon")
        getNavItemDesign.classList.remove("targetNavItem")
        getNavItemDesignIcon.classList.remove("targetNavIcon")
        getNavItemProjects.classList.remove("targetNavItem")
        getNavItemProjectsIcon.classList.remove("targetNavIcon")
        getNavItemContact.classList.remove("targetNavItem")
        getNavItemContactIcon.classList.remove("targetNavIcon")
    }
    else if(url.includes("/contact") === true){
        //adding style to targeted nav depending on url
        getNavItemContact.classList.add("targetNavItem")
        getNavItemContactIcon.classList.add("targetNavIcon")
        //removing style from all others
        getNavItemDesign.classList.remove("targetNavItem")
        getNavItemDesignIcon.classList.remove("targetNavIcon")
        getNavItemProjects.classList.remove("targetNavItem")
        getNavItemProjectsIcon.classList.remove("targetNavIcon")
        getNavItemPixelart.classList.remove("targetNavItem")
        getNavItemPixelArtIcon.classList.remove("targetNavIcon")
        getNavItemHome.classList.remove("targetNavItem")
        getNavItemHomeIcon.classList.remove("targetNavIcon")
    }
}
//Animation Props for Navigation
const navAnimation = {
    enter: {
        x: 0,
        transition: {duration: 0.4},
        width: "24rem",
    },
    exit: {
        x: 15,
        transition: {duration: 0.4, delay: 0.2},
        width: "0rem",
    },
}
//Animation Props for NavigationBlur
const navBlurAnimation = {
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}
//Animation Props for NavItems
const navItemAnimation = {
    init: {
        opacity: 0,
    },
    enter: {
        transition: {delay: 0.2, type: 'spring'},
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

function navIconHover(state: boolean){
    var getUpperLine = document.getElementById("upperLineSVG") as HTMLDivElement
    var getUnderLine = document.getElementById("bottomLineSVG") as HTMLDivElement
    getUpperLine.style.transition ="0.2s ease-in-out"
    getUnderLine.style.transition ="0.3s ease-in-out"

    if(state === true){
        

        getUpperLine.setAttribute("x", "29.5")
        getUnderLine.setAttribute("x", "25.5")
    }
    else{
        getUpperLine.setAttribute("x", "25.5")
        getUnderLine.setAttribute("x", "29.5")
    }
}
//COMPONENT

const Nav = (props: any) => {
    const location = useLocation()
    const history = useHistory()
    //Using NavState to toggle between Enter & Exit animaiton
    const [NavState, setNavState] = useState(false);

    //componentDidMount to give navItem the right class at the beginning of pageload
    useEffect(() =>{
        giveNavStyleTarget(location.pathname.toLowerCase())
        window.scrollTo(0, 0)
    },[location.pathname])
    
    //Making sure that there are no pointer events when navigation is closed also to not be able to scroll around while navigation is opened
    useEffect(() => {
        var getNavigation = document.getElementById("navigation") as HTMLDivElement
        var getNavigationBlur = document.getElementById("navigationBlur") as HTMLDivElement
        if(NavState === false){
            getNavigation.style.pointerEvents = "none"
            getNavigationBlur.style.pointerEvents = "none"
            setTimeout(() => {
                document.body.style.overflow = "unset"
            }, 700);
        }
        else{
            getNavigation.style.pointerEvents = "visible"
            getNavigationBlur.style.pointerEvents = "visible"
            document.body.style.overflow = "hidden"
        }
        
    }, [NavState]);
    
    //Function to close Design aka switching viewstate to false and disabling button
    const closeDesign = useAnimation()
    function closeDesignFunc() {
        history.push(`${history.location.pathname.toLowerCase()}?viewState=false`)
        closeDesign.start({
            pointerEvents: 'none'
        })
    }

    return(
        <motion.div animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} id="NavigationContainer" className="NavigationContainer">
            <div onMouseEnter={() => navIconHover(true)} onMouseLeave={() => navIconHover(false)} onClick={() => setNavState(!NavState)} className="navOpenIconContainer">
                <MenuIcon id="appNavMenu"/>
            </div>

            <motion.div onClick={() => setNavState(!NavState)} animate={NavState ? "enter" : "exit"} variants={navBlurAnimation} id="navigationBlur" className="navigationBlur"></motion.div>
            
            <AnimatePresence>
                {props.designQuery.get("viewState") === 'true' &&
                    <motion.div animate={closeDesign} onClick={() =>{closeDesignFunc()}} className="closeDesignContainer">
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}} className="closeDesignIcon"></motion.div>
                    </motion.div>
                }
            </AnimatePresence>

            <motion.div animate={NavState ? "enter" : "exit"} variants={navAnimation} id="navigation" className="navigation">
                <motion.ul initial="init" animate={NavState ? "enter" : "exit"} variants={navItemAnimation}>
                    <div onClick={() => {setNavState(!NavState); if(location.pathname.toLowerCase().includes("/home")){/*console.log("already at home")*/}else{history.push("/home")}}} className="linkHome" id="navHome">
                            <div className="navbarListIconContainer">
                                <HomeIcon/>
                            </div>
                            HOME
                    </div>

                    <Link onClick={() => setNavState(!NavState)} className="linkDesign" id="navDesign" to={`/design`}>
                            <div className="navbarListIconContainer">
                                <DesignIcon/>
                            </div>
                            DESIGN
                    </Link>

                    <Link onClick={() => setNavState(!NavState)} className="linkProjects" id="navProjects" to="/projects">
                            <div className="navbarListIconContainer">
                                <ProjectsIcon/>
                            </div>
                            PROJECTS
                    </Link>

                    <div onClick={() => {props.appMessage(true, "PIXEL ART", "We are working on this feature.", "COOL")}} className="linkPixelArt" id="navPixelArt">
                            <div className="navbarListIconContainer">
                                <PixelArtIcon/>
                            </div>
                            <div className="comingSoon"> COMING SOON</div>
                            PIXEL ART
                    </div>

                    <Link onClick={() => setNavState(!NavState)} className="linkContact" id="navContact" to="/contact/form">
                            <div className="navbarListIconContainer">
                                <ContactIcon/>
                            </div>
                            CONTACT
                    </Link>
                </motion.ul>

                <motion.div initial="init" animate={NavState ? "enter" : "exit"} variants={navItemAnimation} className="legal">
                    <div className ="legalDeco">
                        <span><DecoIcon className="decoIcon"/></span>
                        <div></div>
                        <span><DecoIcon className="decoIcon"/></span>
                    </div>

                    <div className="legalEntry">
                        <div className="icon"><CopyrightIcon style={{height: "24px", width: "24px", fill: "#9e9e9e"}}/></div>
                        <p className="legalLabel">By Hamit Kiziltas</p>
                    </div>
                    <div className="legalEntry">
                        <div className="icon"><EmailIcon style={{height: "24px", width: "24px", fill: "#9e9e9e"}}/></div>
                        <p className="legalLabel"><a className="emailLink" href="mailto: Arctale.work@gmail.com">Arctale.work@gmail.com</a></p>
                    </div>
                    <div className="legalEntry">
                        <div className="icon"><PositionIcon style={{height: "24px", width: "24px", fill: "#9e9e9e"}}/></div>
                        <p className="legalLabel">Obere Str. 19, 74369 Löchgau</p>
                    </div>
                    <div className="legalEntry">
                        <div className="icon"><WorldIcon style={{height: "24px", width: "24px", fill: "#9e9e9e"}}/></div>
                        <p className="legalLabel">Germany</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Nav