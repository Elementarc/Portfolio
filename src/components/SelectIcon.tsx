import React from "react"
import {ReactComponent as HomeIcon} from "../assets/icons/HomeIcon.svg"
import {ReactComponent as DesignIcon} from "../assets/icons/DesignIcon.svg"
import {ReactComponent as WorkIcon} from "../assets/icons/WorkIcon.svg"
import {ReactComponent as ContactIcon} from "../assets/icons/ContactIcon.svg"
import {ReactComponent as NavCloseIcon} from "../assets/icons/NavCloseIcon.svg"
import {ReactComponent as ProjectsIcon} from "../assets/icons/ProjectIcon.svg"
import {ReactComponent as MenuIcon} from "../assets/icons/MenuIcon.svg"
import {ReactComponent as DownArrowIcon} from "../assets/icons/DownArrowIcon.svg"
//Import component

const SelectIcon = (props: any) =>{ //props: icon="HomeIcon" Property always has to be called like the icon file name.
   
   var icons: any = {
      "HomeIcon": <HomeIcon/>,
      "DesignIcon": <DesignIcon/>,
      "WorkIcon": <WorkIcon/>,
      "ContactIcon": <ContactIcon/>,
      "NavCloseIcon": <NavCloseIcon/>,
      "ProjectsIcon": <ProjectsIcon/>,
      "MenuIcon": <MenuIcon/>,
      "DownArrowIcon": <DownArrowIcon/>,
   }

   
   return (
      icons[props.icon]
   )
}

export default SelectIcon