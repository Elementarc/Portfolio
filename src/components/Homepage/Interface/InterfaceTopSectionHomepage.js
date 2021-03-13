import React from 'react';
import SelectIcon from "../../SelectIcon"

const InterfaceHomepageTopSection = (props) => {
    return (
        <div className="interfaceHeaderContainer">
            <div className="homepageTopDecoration"></div>

            <div id="moon" className="moonContainer">
                <div className="moonLight"></div>
                <div className="moonLightV2"></div>
            </div>

            <div onClick={props.toggleNav} className="openNavIconContainer">
                <SelectIcon icon="MenuIcon"></SelectIcon>
            </div>
        </div>
    );
}

export default InterfaceHomepageTopSection;
