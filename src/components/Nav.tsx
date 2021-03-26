
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"

//Import components
import "../cStyles/nav.scss"
import SelectIcon from "./SelectIcon" //SelectIcon has icon prop that takes the name of the svg. It needs to get imported to the selectIcon component

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
        getNav.style.marginRight = "-25rem"
        getNav.style.opacity = "0"
        getNavBlur.style.opacity = "0"
        getNavBlur.style.pointerEvents = "none"
    }
    
}
//Toggles Navigation. Using the function: animationNav() to animate the toggle toggle
var navState = false
function toggleNav(){
    if(navState === false){
        animationNav(true)
        navState = true
        
    }
    else{
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
        console.log("home got styles")
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
        console.log("design got styles")
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

const Nav = (props: any) => {
    var url = useHistory()
    //Takes Url as parameter example (/home) to then give navitems the correct class to be styled correct
    //checks url to restyle navitem for right url
    useEffect(() =>{
        giveNavStyleTarget(url.location.pathname)
    }, [])
    
    
    return(
        <div id="NavigationContainer" className="NavigationContainer">
            <div onClick={toggleNav} className="navOpenIcon">
                <SelectIcon icon="MenuIcon"></SelectIcon>
            </div>
            <div onClick={toggleNav} id="navigationBlur" className="navigationBlur"></div>

            <div id="navigation" className="navigation">
                <ul>
                    <Link className="linkHome" id="navHome" to="/home" onClick={toggleNav}>
                            <div className="navbarListIconContainer">
                                <SelectIcon icon="HomeIcon"/>
                            </div>
                            HOME
                    </Link>

                    <Link className="linkDesign" id="navDesign" to="/design" onClick={toggleNav}>
                            <div className="navbarListIconContainer">
                                <SelectIcon icon="DesignIcon"/>
                            </div>
                            DESIGN
                    </Link>

                    <Link className="linkProjects" id="navProjects" to="/projects" onClick={toggleNav}>
                            <div className="navbarListIconContainer">
                                <SelectIcon icon="ProjectsIcon"/>
                            </div>
                            PROJECTS
                    </Link>

                    <Link className="linkWorkspace" id="navWorkspace" to="/workspace" onClick={toggleNav}>
                            <div className="navbarListIconContainer">
                                <SelectIcon icon="WorkIcon"/>
                            </div>
                            WORKSPACE
                    </Link>

                    <Link className="linkContact" id="navContact" to="/contact" onClick={toggleNav}>
                            <div className="navbarListIconContainer">
                                <SelectIcon icon="ContactIcon"/>
                            </div>
                            CONTACT
                    </Link>
                </ul>

                <button onClick={toggleNav} className="navCloseButton">
                    <div className="navCloseIcon">
                        <SelectIcon icon="NavCloseIcon"/>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Nav