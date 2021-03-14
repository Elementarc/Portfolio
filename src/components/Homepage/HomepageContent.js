import React from 'react';
import SelectIcon from '../SelectIcon';

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
//Animation for Slider on click
var currentSlide0Class = 0;
var currentSlide1Class = 1;
var currentSlide2Class = 2;
function slider(direction) {
    var getSlide0 = document.getElementById(`slide0`)
    var getSlide1 = document.getElementById(`slide1`)
    var getSlide2 = document.getElementById(`slide2`)

    if(direction === "left"){
        currentSlide0Class--
        if(currentSlide0Class < 0){
            currentSlide0Class = 2
        }
        currentSlide1Class--
        if(currentSlide1Class < 0){
            currentSlide1Class = 2
        }
        currentSlide2Class--
        if(currentSlide2Class < 0){
            currentSlide2Class = 2
        }
        //Animate to left
        getSlide0.classList.add(`slide${currentSlide0Class}`)
        getSlide0.classList.remove(getSlide0.classList.item(0))
        
        
        getSlide1.classList.add(`slide${currentSlide1Class}`)
        getSlide1.classList.remove(getSlide1.classList.item(0))
        
        getSlide2.classList.add(`slide${currentSlide2Class}`)
        getSlide2.classList.remove(getSlide2.classList.item(0))
        
        
    }
    else if(direction === "right"){
        currentSlide0Class++
        if(currentSlide0Class > 2){
            currentSlide0Class = 0
        }
        currentSlide1Class++
        if(currentSlide1Class > 2){
            currentSlide1Class = 0
        }
        currentSlide2Class++
        if(currentSlide2Class > 2){
            currentSlide2Class = 0
        }
        //Animate to right
        getSlide0.classList.add(`slide${currentSlide0Class}`)
        getSlide0.classList.remove(getSlide0.classList.item(0))
        
        
        getSlide1.classList.add(`slide${currentSlide1Class}`)
        getSlide1.classList.remove(getSlide1.classList.item(0))
        
        getSlide2.classList.add(`slide${currentSlide2Class}`)
        getSlide2.classList.remove(getSlide2.classList.item(0))

        
    }
}

const HomepageContent = (props) => {
    return (
        <div className="homepageContentContainer">
            <div className="contentContainer">
                <h1>{"SIMPLE & CLEAN"}</h1>
                <h2>THE WORLD OF DESIGN</h2>
                <p>There are diffrent ways to talk to a customer and design is an important one. Let's create something unique. </p>
                <button onMouseEnter={hoverButton} onMouseLeave={hoverButton} id="getStartedButton"> 
                    <div>GET STARTED</div>
                    <div id="buttonStyleBox" className="buttonStyleBox"></div>
                </button>
            </div>
            
            <div className="slideShowContainer">
                <div className="slider">
                    <div className="slideLeftButton" onClick={() => slider("right")}></div>
                    <div className="slideRightButton" onClick={() => slider("left")}></div>

                    <div id="slide0" className="slide0" >
                        <div className="slide0Content">
                            <div>Blood Moon</div> 
                        </div>
                    </div>

                    <div id="slide1" className="slide1" >
                        <div className="slide1Content">
                            <div>Night Sky</div> 
                        </div>
                    </div>
                    
                    <div id="slide2" className="slide2" >
                        <div className="slide2Content">
                            <div>Nature</div> 
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bottomContainer">
                <div className="scrollIconContainer">
                    <SelectIcon icon="DownArrowIcon"></SelectIcon>
                </div>
            </div>
        </div>
    );
}

export default HomepageContent;
