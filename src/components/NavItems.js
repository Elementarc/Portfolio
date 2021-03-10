import React from "react"
import {Link} from "react-router-dom"
//Import component
import SelectIcon from "./SelectIcon"


const NavItem = (props) => {
    //checking for what information should be used for the new itemList
    
    return(
        <Link  to={props.route}>
            <li id={props.id} className="navbarLink" onClick={props.toggleNav}>
                <div className="navbarListIconContainer">
                    <SelectIcon icon={props.icon}/>
                </div>
                {props.item} 
            </li>
        </Link>
    );  
}

export default NavItem