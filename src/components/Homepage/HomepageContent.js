import React from 'react';

//Toggles Animation for hovering over GetStarted button.
var buttonState = true
function hoverButton(){
    var getButtonStyle = document.getElementById("buttonStyleBox")
    if(buttonState === true){
        getButtonStyle.style.width ="100%"
        buttonState = false
    }
    else{
        getButtonStyle.style.width ="0%"
        buttonState = true
    }
}

const HomepageContent = (props) => {
    return (
        <div className="homepageContentContainer">
            <h1>{"SIMPLE & CLEAN"}</h1>
            <h2>THE WORLD OF DESIGN</h2>
            <p>There are diffrent ways to talk to a customer and design is an important one. Let's create something unique. </p>
            <button onMouseEnter={hoverButton} onMouseLeave={hoverButton} id="getStartedButton"> 
                <div>GET STARTED</div>
                <div id="buttonStyleBox" className="buttonStyleBox"></div>
            </button>
        </div>
    );
}

export default HomepageContent;
