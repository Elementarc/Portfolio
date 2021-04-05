
import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"

//icons
import {ReactComponent as HomeIcon} from "../assets/icons/HomeIcon.svg"
import {ReactComponent as DesignIcon} from "../assets/icons/DesignIcon.svg"
import {ReactComponent as WorkIcon} from "../assets/icons/WorkIcon.svg"
import {ReactComponent as ContactIcon} from "../assets/icons/ContactIcon.svg"
import {ReactComponent as NavCloseIcon} from "../assets/icons/NavCloseIcon.svg"
import {ReactComponent as ProjectsIcon} from "../assets/icons/ProjectIcon.svg"
import {ReactComponent as MenuIcon} from "../assets/icons/MenuIcon.svg"
//Import components
import {motion} from "framer-motion"
//CSS
import "./styleSheets/nav.scss"

//Animation for navigation. Takes true / false as parameter. Is used by toggleNav() function

function animationNav(toggle: any){
    var getNavBlur = document.getElementById("navigationBlur") as HTMLDivElement
    var getNav = document.getElementById("navigation") as HTMLDivElement
    if(toggle === true)
    {
        getNav.style.marginRight = "0"
        getNav.style.opacity = "1"
        getNavBlur.style.opacity = "1"
        getNavBlur.style.pointerEvents = "all"
    }
    else{
        getNav.style.marginRight = "-26rem"
        getNav.style.opacity = "1"
        getNavBlur.style.opacity = "0"
        getNavBlur.style.pointerEvents = "none"
    }
    
}
//Toggles Navigation. Using the function: animationNav() to animate the toggle.
var navState = false
function toggleNav(){
    if(navState === false){
        document.body.style.overflow = "hidden"
        animationNav(true)
        navState = true
    }
    else{
        document.body.style.overflow = "unset"
        animationNav(false)
        navState = false
    }
}
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
        getNavItemHomeIcon.classList.remove("targetIcon")
        getNavItemDesign.classList.remove("targetNavNavItem")
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
        getNavItemHome.classList.remove("targetNavItem")
        getNavItemHomeIcon.classList.remove("targetNavIcon")
        getNavItemDesign.classList.remove("targetNavNavItem")
        getNavItemDesignIcon.classList.remove("targetNavIcon")
        getNavItemProjects.classList.remove("targetNavItem")
        getNavItemProjectsIcon.classList.remove("targetNavIcon")
        getNavItemWorkspace.classList.remove("targetNavItem")
        getNavItemWorkspaceIcon.classList.remove("targetNavIcon")
    }
    else{
        console.log("couldnt find url")
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
//COMPONENT
const Nav = (props: any) => {
    var url = useLocation().pathname
    //componentDidMount to give navItem the right class at the beginning of pageload
    useEffect(() =>{
        giveNavStyleTarget(url)
    })
    
    
    return(
        <motion.div animate="in" exit="out" initial="initial" variants={interfaceAnimation} id="NavigationContainer" className="NavigationContainer">
            <div onClick={toggleNav} className="navOpenIcon">
                <MenuIcon/>
            </div>
            <div onClick={toggleNav} id="navigationBlur" className="navigationBlur"></div>
            <div id="navigation" className="navigation">
                    <ul>
                        <Link className="linkHome" id="navHome" to="/home" onClick={toggleNav}>
                                <div className="navbarListIconContainer">
                                    <HomeIcon/>
                                </div>
                                HOME
                        </Link>

                        <Link className="linkDesign" id="navDesign" to="/design" onClick={toggleNav}>
                                <div className="navbarListIconContainer">
                                    <DesignIcon/>
                                </div>
                                DESIGN
                        </Link>

                        <Link className="linkProjects" id="navProjects" to="/projects" onClick={toggleNav}>
                                <div className="navbarListIconContainer">
                                    <ProjectsIcon/>
                                </div>
                                PROJECTS
                        </Link>

                        <Link className="linkWorkspace" id="navWorkspace" to="/workspace" onClick={toggleNav}>
                                <div className="navbarListIconContainer">
                                    <WorkIcon/>
                                </div>
                                WORKSPACE
                        </Link>

                        <Link className="linkContact" id="navContact" to="/contact" onClick={toggleNav}>
                                <div className="navbarListIconContainer">
                                    <ContactIcon/>
                                </div>
                                CONTACT
                        </Link>
                    </ul>

                    <button onClick={toggleNav} className="navCloseButton">
                        <div className="navCloseIcon">
                            <NavCloseIcon/>
                        </div>
                    </button>
                </div>
            
        </motion.div>
    );
}

export default Nav