
import React, {useEffect, useState} from "react"
import {Link, useHistory} from "react-router-dom"
import {useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"

//icons
import {ReactComponent as HomeIcon} from "../../assets/icons/HomeIcon.svg"
import {ReactComponent as DesignIcon} from "../../assets/icons/DesignIcon.svg"
import {ReactComponent as WorkIcon} from "../../assets/icons/WorkIcon.svg"
import {ReactComponent as ContactIcon} from "../../assets/icons/ContactIcon.svg"
import {ReactComponent as ProjectsIcon} from "../../assets/icons/ProjectIcon.svg"
import {ReactComponent as MenuIcon} from "../../assets/icons/MenuIcon.svg"
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

    var getNavItemWorkspace = document.getElementById("navWorkspace") as HTMLDivElement
    var getNavItemWorkspaceIcon = document.getElementById("WorkIcon") as HTMLDivElement

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
        getNavItemWorkspace.classList.remove("targetNavItem")
        getNavItemWorkspaceIcon.classList.remove("targetNavIcon")
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
        getNavItemWorkspace.classList.remove("targetNavItem")
        getNavItemWorkspaceIcon.classList.remove("targetNavIcon")
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
        getNavItemWorkspace.classList.remove("targetNavItem")
        getNavItemWorkspaceIcon.classList.remove("targetNavIcon")
        getNavItemContact.classList.remove("targetNavItem")
        getNavItemContactIcon.classList.remove("targetNavIcon")
    }
    else if(url.includes("/workspace") === true){
        //adding style to targeted nav depending on url
        getNavItemWorkspace.classList.add("targetNavItem")
        getNavItemWorkspaceIcon.classList.add("targetNavIcon")
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
        getNavItemWorkspace.classList.remove("targetNavItem")
        getNavItemWorkspaceIcon.classList.remove("targetNavIcon")
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
    
    return(
        <motion.div animate="in" exit="out" initial="initial" variants={props.interfaceAnimation} id="NavigationContainer" className="NavigationContainer">
            <div onMouseEnter={() => navIconHover(true)} onMouseLeave={() => navIconHover(false)} onClick={() => setNavState(!NavState)} className="navOpenIconContainer">
                <MenuIcon/>
            </div>

            <motion.div onClick={() => setNavState(!NavState)} animate={NavState ? "enter" : "exit"} variants={navBlurAnimation} id="navigationBlur" className="navigationBlur"></motion.div>
            <AnimatePresence>
                {props.designParameters.get("viewState") === 'true' &&
                    <div onClick={() =>{props.designParameters.set("viewState", "false"); history.push(window.location.pathname.toLowerCase() + "?" + props.designParameters.toString())}} className="closeDesignContainer">
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}} className="closeDesignIcon"></motion.div>
                    </div>
                }
            </AnimatePresence>

            <motion.div animate={NavState ? "enter" : "exit"} variants={navAnimation} id="navigation" className="navigation">
                <motion.ul initial="init" animate={NavState ? "enter" : "exit"} variants={navItemAnimation}>
                    <div onClick={() => {setNavState(!NavState); if(location.pathname.toLowerCase().includes("/home")){/*console.log("already at home")*/}else{history.replace("/home")}}} className="navHome" id="navHome">
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

                    <Link onClick={() => setNavState(!NavState)} className="linkWorkspace" id="navWorkspace" to="/workspace">
                            <div className="navbarListIconContainer">
                                <WorkIcon/>
                            </div>
                            WORKSPACE
                    </Link>

                    <Link onClick={() => setNavState(!NavState)} className="linkContact" id="navContact" to="/contact">
                            <div className="navbarListIconContainer">
                                <ContactIcon/>
                            </div>
                            CONTACT
                    </Link>
                </motion.ul>
            </motion.div>
        </motion.div>
    );
}

export default Nav