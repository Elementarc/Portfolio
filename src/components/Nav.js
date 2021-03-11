import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
//Import component
import NavItems from "./NavItems"
import SelectIcon from "./SelectIcon"

const Nav = (props) => {
    const [currentPath, setPath] = useState("/")
    //listens to url Changes and changes style for navItems and navIcons. adds and removes class to apply styles
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
            getNavItemHomeIcon.classList.add("targetIcon")
            //removing style from all others
            getNavItemDesign.classList.remove("targetNavItem")
            getNavItemDesignIcon.classList.remove("targetIcon")
            getNavItemProjects.classList.remove("targetNavItem")
            getNavItemProjectsIcon.classList.remove("targetIcon")
            getNavItemWorkspace.classList.remove("targetNavItem")
            getNavItemWorkspaceIcon.classList.remove("targetIcon")
            getNavItemContact.classList.remove("targetNavItem")
            getNavItemContactIcon.classList.remove("targetIcon")
        }
        else if(url === "/design"){
            //adding style to targeted nav depending on url
            getNavItemDesign.classList.add("targetNavItem")
            getNavItemDesignIcon.classList.add("targetIcon")
            //removing style from all others
            getNavItemHome.classList.remove("targetNavItem")
            getNavItemHomeIcon.classList.remove("targetIcon")
            getNavItemProjects.classList.remove("targetNavItem")
            getNavItemProjectsIcon.classList.remove("targetIcon")
            getNavItemWorkspace.classList.remove("targetNavItem")
            getNavItemWorkspaceIcon.classList.remove("targetIcon")
            getNavItemContact.classList.remove("targetNavItem")
            getNavItemContactIcon.classList.remove("targetIcon")
        }
        else if(url === "/projects"){
            //adding style to targeted nav depending on url
            getNavItemProjects.classList.add("targetNavItem")
            getNavItemProjectsIcon.classList.add("targetIcon")
            //removing style from all others
            getNavItemHome.classList.remove("targetNavItem")
            getNavItemHomeIcon.classList.remove("targetIcon")
            getNavItemDesign.classList.remove("targetNavItem")
            getNavItemDesignIcon.classList.remove("targetIcon")
            getNavItemWorkspace.classList.remove("targetNavItem")
            getNavItemWorkspaceIcon.classList.remove("targetIcon")
            getNavItemContact.classList.remove("targetNavItem")
            getNavItemContactIcon.classList.remove("targetIcon")
        }
        else if(url === "/workspace"){
            //adding style to targeted nav depending on url
            getNavItemWorkspace.classList.add("targetNavItem")
            getNavItemWorkspaceIcon.classList.add("targetIcon")
            //removing style from all others
            getNavItemHome.classList.remove("targetNavItem")
            getNavItemHomeIcon.classList.remove("targetIcon")
            getNavItemDesign.classList.remove("targetNavItem")
            getNavItemDesignIcon.classList.remove("targetIcon")
            getNavItemProjects.classList.remove("targetNavItem")
            getNavItemProjectsIcon.classList.remove("targetIcon")
            getNavItemContact.classList.remove("targetNavItem")
            getNavItemContactIcon.classList.remove("targetIcon")
        }
        else if(url === "/contact"){
            //adding style to targeted nav depending on url
            getNavItemContact.classList.add("targetNavItem")
            getNavItemContactIcon.classList.add("targetIcon")
            //removing style from all others
            getNavItemHome.classList.remove("targetNavItem")
            getNavItemHomeIcon.classList.remove("targetIcon")
            getNavItemDesign.classList.remove("targetNavItem")
            getNavItemDesignIcon.classList.remove("targetIcon")
            getNavItemProjects.classList.remove("targetNavItem")
            getNavItemProjectsIcon.classList.remove("targetIcon")
            getNavItemWorkspace.classList.remove("targetNavItem")
            getNavItemWorkspaceIcon.classList.remove("targetIcon")
        }
    }
    var url = useHistory()
    //listening for url changes
    
    //triggers when url Changes
    useEffect(() =>{
        var unlisten = url.listen(({prev, action})=>{
            giveNavStyleTarget(currentPath)
            setPath(url.location.pathname)
        })
        return () =>{
            unlisten()
        }
    }, [])
    useEffect(() => {
        giveNavStyleTarget(currentPath)
    }, [currentPath]);

     
    return(
        <div id="navigationContainer" className="navigationContainer">
            <div onClick={props.toggleNav} id="navigationBlur" className="navigationBlur"></div>
            <div id="homepageNav" className="homepageNav">
                <ul>
                    <NavItems item="HOME" id="homepageHome"  icon="HomeIcon" route="/home" toggleNav={props.toggleNav}/>
                    <NavItems item="DESIGN" id="homepageDesign"  icon="DesignIcon" route="/design" toggleNav={props.toggleNav}/>
                    <NavItems item="PROJECTS" id="homepageProjects" icon="ProjectIcon" route="/projects" toggleNav={props.toggleNav}/>
                    <NavItems item="WORKSPACE" id="homepageWorkspace" icon="WorkIcon" route="/workspace" toggleNav={props.toggleNav}/>
                    <NavItems item="CONTACT"  id="homepageContact" icon="ContactIcon" route="/contact" toggleNav={props.toggleNav}/>
                </ul>
                <button onClick={props.toggleNav} className="navButton">
                    <div className="navCloseButtonContainer">
                        <SelectIcon icon="NavCloseIcon"/>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Nav