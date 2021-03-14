import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
//Import component
import NavItems from "./NavItems"
import SelectIcon from "./SelectIcon" //SelectIcon has icon prop that takes the name of the svg. It needs to get imported to the selectIcon component
//Animation for navigation. Takes true / false as parameter. Is used by toggleNav() function
function animationNav(toggle){
    var getNavBlur = document.getElementById("navigationBlur")
    var getNav = document.getElementById("homepageNav")
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
        console.log("test")
    if(navState === false){
        animationNav(true)
        navState = true
        
    }
    else{
        animationNav(false)
        navState = false
    }
}

const Nav = (props) => {
    const [currentPath, setPath] = useState("/")
    var url = useHistory()
    //Takes Url as parameter example (/home) to then give navitems the correct class to be styled correct
    function giveNavStyleTarget(url) {
        
        var getNavItemHome = document.getElementById("homepageHome")
        var getNavItemHomeIcon = document.getElementById("HomeIcon")

        var getNavItemDesign = document.getElementById("homepageDesign")
        var getNavItemDesignIcon = document.getElementById("DesignIcon")

        var getNavItemProjects = document.getElementById("homepageProjects")
        var getNavItemProjectsIcon = document.getElementById("ProjectsIcon")

        var getNavItemWorkspace = document.getElementById("homepageWorkspace")
        var getNavItemWorkspaceIcon = document.getElementById("WorkIcon")

        var getNavItemContact = document.getElementById("homepageContact")
        var getNavItemContactIcon = document.getElementById("ContactIcon")

        if(url === "/home" | url === "/"){
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
        else if(url === "/design"){
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
        else if(url === "/projects"){
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
        else if(url === "/workspace"){
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
        else if(url === "/contact"){
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
    }
    //listening for url changes to change NavItemList style. Also gets triggert on render to give correct style to navItem
    useEffect(() =>{
        
        var unlisten = url.listen(({prev, action})=>{
            giveNavStyleTarget(currentPath)
            setPath(url.location.pathname)
        })
        return () =>{
            unlisten()
        }
    }, [])
    //Always changing navItem style on url change
    useEffect(() => {
        giveNavStyleTarget(currentPath)
    }, [currentPath]);
    
    return(
        <div id="NavigationContainer" className="NavigationContainer">
            <div onClick={toggleNav} className="navOpenIcon">
                <SelectIcon icon="MenuIcon"></SelectIcon>
            </div>
            <div onClick={toggleNav} id="navigationBlur" className="navigationBlur"></div>

            

            <div id="homepageNav" className="navigation">
                <ul>
                    <NavItems item="HOME" id="homepageHome"  icon="HomeIcon" route="/home" toggleNav={toggleNav}/>
                    <NavItems item="DESIGN" id="homepageDesign"  icon="DesignIcon" route="/design" toggleNav={toggleNav}/>
                    <NavItems item="PROJECTS" id="homepageProjects" icon="ProjectIcon" route="/projects" toggleNav={toggleNav}/>
                    <NavItems item="WORKSPACE" id="homepageWorkspace" icon="WorkIcon" route="/workspace" toggleNav={toggleNav}/>
                    <NavItems item="CONTACT"  id="homepageContact" icon="ContactIcon" route="/contact" toggleNav={toggleNav}/>
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