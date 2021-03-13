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
var currentSlide0Class = 0;
var currentSlide1Class = 1;
var currentSlide2Class = 2;

function slider(id) {
    var getSlide0 = document.getElementById(`slide0`)
    var getSlide1 = document.getElementById(`slide1`)
    var getSlide2 = document.getElementById(`slide2`)

    if(id > 1){
        //Animate to left
        getSlide0.classList.add(`slide${2}`)
        getSlide0.classList.remove(`slide${0}`)
        
        getSlide1.classList.add(`slide${0}`)
        getSlide1.classList.remove(`slide${1}`)
        
        getSlide2.classList.add(`slide${1}`)
        getSlide2.classList.remove(`slide${2}`)
        
    }
    else if(id < 1){
        //Animate to right
        getSlide0.classList.add("slide0")
        getSlide0.classList.remove("slide2")
        
        getSlide1.classList.add("slide1")
        getSlide1.classList.remove("slide0")
        
        getSlide2.classList.add("slide2")
        getSlide2.classList.remove("slide1")
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

            <div className="slideShowContainer">
                <div className="slider">
                    <div className="slideLeftButton" onClick={() => slider(0)}></div>
                    <div className="slideRightButton" onClick={() => slider(2)}></div>

                    <div id="slide0" className="slide0" >
                        <div className="purple"></div>
                    </div>

                    <div id="slide1" className="slide1" >
                        <div className="blue"></div>
                    </div>

                    <div id="slide2" className="slide2" >
                        <div className="red"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomepageContent;

/*
var getSlider0 
var getSlider1 
var getSlider2 
var arr 
var currentDisplay = 1

function giveClass(currentDisplay, animationDirection) {
    var lastDisplay = currentDisplay - 1
    if(lastDisplay < 0){
        lastDisplay = arr.length -1
    }
    console.log(arr[currentDisplay])
    arr[currentDisplay].classList.add("slideTarget")
    

}
function moveSlider(id) {
    var animationDirection = "nothing"

    if(id === 0){
        animationDirection = "left"
        currentDisplay--

        if(currentDisplay < 0 ){
            currentDisplay = arr.length -1
        }
    }
    else if(id === 2){
        animationDirection = "right"
        currentDisplay = currentDisplay +1
        if(currentDisplay > arr.length -1){
            currentDisplay = 0;
        }
    }    
    console.log(getSlider2)
    giveClass(currentDisplay, animationDirection)
}
*/