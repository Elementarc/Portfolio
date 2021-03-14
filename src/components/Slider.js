import React from 'react';
import SelectIcon from "./SelectIcon"
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

const Slider = () => {
    return (
        <div className="Slider">
            <div className="slideContainer">
                <div className="slideLeftButton" onClick={() => slider("right")}></div>
                <div className="slideRightButton" onClick={() => slider("left")}></div>

                <div id="slide0" className="slide0" >
                    <div className="slide0Content">
                        <h1>Nature</h1>
                    </div>
                </div>

                <div id="slide1" className="slide1" >
                    <div className="slide1Content">
                        <h1>Night Sky</h1>
                    </div>
                </div>
                    
                <div id="slide2" className="slide2" >
                    <div className="slide2Content">
                        <h1>Nature</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
