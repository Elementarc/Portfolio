import React, {useEffect, useState} from "react"
import {ReactComponent as StepIcon} from "../assets/svgs/contactStepsIcon.svg"
import {ReactComponent as InputInfo} from "../assets/icons/inputInfo.svg"
import {Link} from "react-router-dom"
import {motion, useAnimation} from "framer-motion"
//CSS
import "./styleSheets/contactPage.scss"
import { useCallback } from "react"
var rThunderNum = 5
var timer: any


var step0Done: boolean = false
var step1Done: boolean = false
var step2Done: boolean = false
var step3Done: boolean = false

var fullNameRegEx = new RegExp(/^[a-zA-Z0-9]{2,15} ?(?=[a-zA-Z0-9])[a-zA-Z0-9]{0,15}$/)
var emailRegEx = new RegExp(/^[a-zA-Z0-9-_.äöü]{3,25}@[a-zA-Z0-9-_.äöü]{2,20}\.[a-zA-Z0-9]{2,6}$/)
var descriptionRegEx = new RegExp(/^[a-zA-Z0-9-_.,:;äüö+ ]{25,200}$/)


interface userDataInterface{
    userName: string | null
    email: string | null
    description: string | null
    budged: number | null
    currency: string | null
}

var userData: userDataInterface = {
    userName: null,
    email: null,
    description: null,
    budged: null,
    currency: null,
}

var inputCheckTimer: any
var changeStepAnimationTimer: any
function ContactPage(props: any) {
    
    //Using this to setRightTarget for stepName and stepIcon
    const [StepIndex, setStepIndex] = useState(0);

    //Container animations
    const nameAnimation = useAnimation()
    const emailAnimation = useAnimation()
    const descriptionAnimation = useAnimation()
    const budgedAnimation = useAnimation()
    //Sets targetColor for right Step also animates step Contents in & out
    const setTarget = useCallback(() =>{
        function setTarget(){
            var getStepsIcon = document.getElementsByClassName("stepIcon") as HTMLCollectionOf<HTMLElement>
            var getStepsName = document.getElementsByClassName("stepName") as HTMLCollectionOf<HTMLElement>

            for(var i = 0; i < getStepsIcon.length; i++){
                if(StepIndex > i){
                    getStepsIcon[i].classList.add("stepIconDone")
                    getStepsName[i].classList.add("stepNameDone")
                }
                else{
                    getStepsIcon[i].classList.remove("stepIconTarget")
                    getStepsName[i].classList.remove("stepNameTarget")

                    getStepsIcon[i].classList.remove("stepIconDone")
                    getStepsName[i].classList.remove("stepNameDone")
                }
                
            }
            
            if(step0Done === true){
                if(StepIndex < 1){
                    getStepsIcon[1].classList.add("stepIconDone")
                    getStepsName[1].classList.add("stepNameDone")
                }
                if(step1Done === true){
                    if(StepIndex < 2){
                        getStepsIcon[2].classList.add("stepIconDone")
                        getStepsName[2].classList.add("stepNameDone")
                    }
                    if(step2Done === true){
                        if(StepIndex < 3){
                            getStepsIcon[3].classList.add("stepIconDone")
                            getStepsName[3].classList.add("stepNameDone")
                        }
                    } 
                } 
            }
            
            getStepsIcon[StepIndex].classList.add("stepIconTarget")
            getStepsName[StepIndex].classList.add("stepNameTarget")
            
            
        }
        setTarget()
    },[StepIndex])

    //animates  switch between containers
    useEffect(() =>{
        //setsTarget for icons and names
        setTarget()

        

        //Animation for in & out
        var getNameContainer = document.getElementById("contactContentName") as HTMLDivElement
        var getEmailContainer = document.getElementById("contactContentEmail") as HTMLDivElement
        var getDescriptionContainer = document.getElementById("contactContentDescription") as HTMLDivElement
        var getBudgedContainer = document.getElementById("contactContentBudged") as HTMLDivElement

        if(StepIndex === 0){
            getEmailContainer.style.pointerEvents = "none"
            getDescriptionContainer.style.pointerEvents = "none"
            getBudgedContainer.style.pointerEvents = "none"

            changeStepAnimationTimer = setTimeout(() => {
                getNameContainer.style.pointerEvents = "all"
                nameAnimation.start({
                    opacity: 1,
                    y: 0,
                    transition: {duration: 0.3},
                })
            }, 500);

            emailAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })
            
            descriptionAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })

            budgedAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })
        }
        else if(StepIndex === 1){
            getNameContainer.style.pointerEvents = "none"
            getDescriptionContainer.style.pointerEvents = "none"
            getBudgedContainer.style.pointerEvents = "none"

            changeStepAnimationTimer = setTimeout(() => {
                getEmailContainer.style.pointerEvents = "all"
                emailAnimation.start({
                    opacity: 1,
                    y: 0,
                    transition: {duration: 0.3},
                })
            }, 500);

            nameAnimation.start({
                opacity: 0,
                transition: {duration: 0.3},
                y: 50,
            })

            descriptionAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })
            
            budgedAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })
        }
        else if(StepIndex === 2){
            getNameContainer.style.pointerEvents = "none"
            getEmailContainer.style.pointerEvents = "none"
            getBudgedContainer.style.pointerEvents = "none"

            changeStepAnimationTimer = setTimeout(() => {
                getDescriptionContainer.style.pointerEvents = "all"
                descriptionAnimation.start({
                    opacity: 1,
                    y: 0,
                    transition: {duration: 0.3},
                })
            }, 500)
                

            nameAnimation.start({
                opacity: 0,
                transition: {duration: 0.3},
                y: 50,
            })

            emailAnimation.start({
                opacity: 0,
                transition: {duration: 0.3},
                y: 50,
            })
            
            budgedAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })
        }
        else if(StepIndex === 3){
            getNameContainer.style.pointerEvents = "none"
            getEmailContainer.style.pointerEvents = "none"
            getDescriptionContainer.style.pointerEvents = "none"
            

            changeStepAnimationTimer = setTimeout(() => {
                getBudgedContainer.style.pointerEvents = "all"
                budgedAnimation.start({
                    opacity: 1,
                    y: 0,
                    transition: {duration: 0.3},
                })
            }, 500)
                

            nameAnimation.start({
                opacity: 0,
                transition: {duration: 0.3},
                y: 50,
            })

            emailAnimation.start({
                opacity: 0,
                transition: {duration: 0.3},
                y: 50,
            })

            descriptionAnimation.start({
                opacity: 0,
                y: 50,
                transition: {duration: 0.3},
            })
            
        }

    },[StepIndex,setTarget, nameAnimation, emailAnimation, descriptionAnimation, budgedAnimation])

    //Username
    const verifyInputValue0  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue1(){
            
            var getInput = document.getElementById("inputName") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputInfoSVG") as HTMLDivElement

            const passedCheck1 = function checkStep1(){
                return new Promise((resolve) =>{
                    clearTimeout(inputCheckTimer)
                    inputCheckTimer = setTimeout(() => {
                        if(fullNameRegEx.test(getInput.value) === true){
                            
                            

                            
                            step0Done = true

                            userData.userName = getInput.value
                            resolve(true)

                        }
                        else{
                            //console.log("didnt pass the regex")

                            step0Done = false

                            userData.userName = null
                            resolve(false)

                        }
                        
                    }, 200);

                    
                    
                })
            }

            passedCheck1().then((passedCheck) =>{
                
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"
                    
                }
                else{
                    getInput.style.borderColor = "red"

                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "red"

                }
                setTarget()

            })

        }
        verifyInputValue1()
        
    },[setTarget])
    
    //email
    const verifyInputValue1  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue2(){
            var getInput = document.getElementById("inputEmail") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputInfoSVG") as HTMLDivElement
            const passedCheck2 = function checkStep2(){
                return new Promise((resolve) =>{
                    clearTimeout(inputCheckTimer)
                    inputCheckTimer = setTimeout(() => {
                        if(emailRegEx.test(getInput.value) === true){
                            step1Done = true


                            userData.email = getInput.value
                            resolve(true)

                        }
                        else{
                            //console.log("didnt pass the regex")

                            step1Done = false

                            userData.email = null
                            resolve(false)

                        }
                    }, 200);

                })
            }

            passedCheck2().then((passedCheck) =>{
                
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"
                    
                }
                else{
                    getInput.style.borderColor = "red"

                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "red"

                }
                setTarget()
            })

        }
        verifyInputValue2()
    },[setTarget])

    //Description
    const verifyInputValue2  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue3(){
            var getInput = document.getElementById("inputDescription") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputInfoSVG") as HTMLDivElement
            const passedCheck3 = function checkStep3(){
                return new Promise((resolve) =>{
                    clearTimeout(inputCheckTimer)
                    inputCheckTimer = setTimeout(() => {
                        if(descriptionRegEx.test(getInput.value) === true){
                            
                            
                            step2Done = true
                            userData.description = getInput.value
                            resolve(true)

                        }
                        else{
                            //console.log("didnt pass the regex")
                            step2Done = false
                            userData.description = null
                            resolve(false)
                        }
                    }, 200);

                })
            }

            passedCheck3().then((passedCheck) =>{
                
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"
                    
                }
                else{
                    getInput.style.borderColor = "red"

                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "red"

                }
                setTarget()
            })

        }
        verifyInputValue3()
    },[setTarget])

    //Description
    const verifyInputValue3  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue3(){
            var getInput = document.getElementById("inputBudged") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputInfoSVG") as HTMLDivElement
            const passedCheck3 = function checkStep3(){
                return new Promise((resolve) =>{
                    clearTimeout(inputCheckTimer)
                    inputCheckTimer = setTimeout(() => {
                        if(descriptionRegEx.test(getInput.value) === true){
                            
                            
                            step3Done = true
                            userData.budged = parseInt(getInput.value, 10)
                            resolve(true)

                        }
                        else{
                            //console.log("didnt pass the regex")
                            step3Done = false
                            userData.budged = null
                            resolve(false)
                        }
                    }, 200);

                })
            }

            passedCheck3().then((passedCheck) =>{
                
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"
                    
                }
                else{
                    getInput.style.borderColor = "red"

                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "red"

                }
                setTarget()
            })

        }
        verifyInputValue3()

        
    },[setTarget])

    //Checks and validates everything to then get to the next step
    function nextStep(currentStep: number){
        

        clearTimeout(inputCheckTimer)
        if(currentStep === 0){
            //verifyInputValue1 checks if its done then changes it to true. default false
            if(step0Done === true){
                setStepIndex(1)

            }
            else{
                verifyInputValue0()
            }
        }
        else if(currentStep === 1){
            if(step1Done === true){
                setStepIndex(2)
            }
            else{
                verifyInputValue1()
            }
        }
        else if(currentStep === 2){
            if(step2Done === true){
                setStepIndex(3)
            }
            else{
                verifyInputValue3()
            }
        }
    }
    //Function to be able to go back to done steps. Getting used by clicking on icon
    function getToSpecifcStep(step: number){
        clearTimeout(inputCheckTimer)
        console.log(StepIndex)
        if(step === 0){
            setStepIndex(0)
        }
        else if(step === 1 && step0Done === true){
            setStepIndex(1)
        }
        else if(step === 2 && step0Done === true && step1Done === true){
            setStepIndex(2)
        }
        else if(step === 3 && step0Done === true && step1Done === true && step2Done === true){
            setStepIndex(3)
        }
    }

    //Adds eventlisteners
    useEffect(() => {
        var getInputName = document.getElementById("inputName") as HTMLInputElement
        var getInputEmail = document.getElementById("inputEmail") as HTMLInputElement
        var getInputDescription = document.getElementById("inputDescription") as HTMLInputElement
        var getInputBudged = document.getElementById("inputBudged") as HTMLInputElement

        getInputName.addEventListener("keyup", verifyInputValue0)
        getInputEmail.addEventListener("keyup", verifyInputValue1)
        getInputDescription.addEventListener("keyup", verifyInputValue2)
        getInputBudged.addEventListener("keyup", verifyInputValue3)
        return(() =>{
            getInputName.removeEventListener("keyup", verifyInputValue0)
            getInputEmail.removeEventListener("keyup", verifyInputValue1)
            getInputDescription.removeEventListener("keyup", verifyInputValue2)
            getInputBudged.removeEventListener("keyup", verifyInputValue3)
        })
    }, [verifyInputValue0, verifyInputValue1, verifyInputValue2, verifyInputValue3]);


    




    //An array where JSX will be filled in to be displayed on screen RAIN DROPS
    var rainDrops: any = []
    //Creates 100divs to display rain drops pushes JSX INTO RainDrops array that will be randomized
    function rain(){
        //DESKTOP Has more Loops
        if(window.innerWidth > 1000){
            for(let i = 0; i < 100; i++){
                //random number between 1 - 99 used to place raindrops on device width
                let rNum = Math.floor(Math.random() * 100 + 1)
                //random number between 1 - 5 used to randomize speed of each raindrop
                let rNum2 =  0.3 * Math.random() + 0.5
                
                rainDrops.push(<div key={i} className="rain" style={{left: `${rNum}vw`, animation: `drop ${rNum2}s linear infinite`, backgroundColor: `rgba(255,255,255,${Math.random() * 0.3})`}} />)
            }
        }
        //DESKTOP Has less Loops
        else{
            for(let i = 0; i < 40; i++){
                //random number between 1 - 99 used to place raindrops on device width
                let rNum = Math.floor(Math.random() * 100 + 1)
                //random number between 1 - 5 used to randomize speed of each raindrop
                let rNum2 =  0.3 * Math.random() + 0.5
                
                rainDrops.push(<div key={i} className="rain" style={{left: `${rNum}vw`, animation: `drop ${rNum2}s linear infinite`, backgroundColor: `rgba(255,255,255,${Math.random() * 0.3})`}} />)
            }
        }
        
    }
    //Using state variable to rerender component on every Thunder() call
    const [State, setState] = useState(false);
    //Calling thunder function everytime the thunder() is getting called with an random number. Starts with number 5 * 1000 = 1s
    useEffect(() => {
        //Thunder Function to randomize the number of times the opacity of background goes up to imitate a thunder 
        function thunder(){
            //getting background to animate Thunder
            var getBackground = document.getElementById("rainContainer") as HTMLDivElement
            rThunderNum = Math.floor(Math.random() * 30 + 1)
            
            getBackground.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5})`
            timer = setTimeout(() => {
                getBackground.style.backgroundColor = `rgba(255, 255, 255, 0)`
            }, 100);
            setState(!State)
        }
        
        timer = setTimeout(() => {
            thunder()
        }, rThunderNum * 1000);
    }, [State]);
    //Using to clean up timers
    useEffect(() => {
        return () => {
            
            clearTimeout(timer)
            clearTimeout(changeStepAnimationTimer)
        };
    }, []);
    rain()

    return (
        <motion.div exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="contactPageContainer">

                <div className="contactContentContainer">
                    <motion.div animate={nameAnimation} className="contactContentName" id="contactContentName">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>WHAT'S YOUR NAME?</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="nameInput" id="inputName" type="text" onBlur={verifyInputValue0} placeholder="Full Name" defaultValue={userData.userName === null ? "" :`${userData.userName}`} />
                            <InputInfo className="nameInfo" id="inputInfoSVG"></InputInfo>
                        </motion.div>
                        <motion.button animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}}  onClick={() => nextStep(0)}>NEXT STEP</motion.button>
                    </motion.div>




                    <motion.div animate={emailAnimation} className="contactContentEmail" id="contactContentEmail">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>WHERE CAN WE CONTACT YOU?</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="emailInput" id="inputEmail" type="text" onBlur={verifyInputValue1} placeholder="E-mail" defaultValue={userData.email === null ? "" :`${userData.email}`} />
                            <InputInfo className="nameInfo" id="inputInfoSVG"></InputInfo>
                        </motion.div>
                        <motion.button animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.7}}} initial={{opacity: 0, y: -20}}  onClick={() => nextStep(1)}>NEXT STEP</motion.button>
                    </motion.div>
                    



                    <motion.div animate={descriptionAnimation} className="contactContentDescription" id="contactContentDescription">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>TELL ME ABOUT YOUR PROJECT</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="descriptionInput" id="inputDescription" type="text" onBlur={verifyInputValue2} placeholder="Description" defaultValue={userData.description === null ? "" :`${userData.description}`} />
                            <InputInfo className="nameInfo" id="inputInfoSVG"></InputInfo>
                        </motion.div>
                        <motion.button animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.7}}} initial={{opacity: 0, y: -20}}  onClick={() => nextStep(2)}>NEXT STEP</motion.button>
                    </motion.div>





                    <motion.div animate={budgedAnimation} className="contactContentBudged" id="contactContentBudged">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>HOW IMPORTANT IS THAT PROJECT TO YOU?</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="budgedInput" id="inputBudged" type="text" onBlur={verifyInputValue3} placeholder="Budged" defaultValue={userData.budged === null ? "" :`${userData.budged}`} />
                            <InputInfo className="nameInfo" id="inputInfoSVG"></InputInfo>
                        </motion.div>
                        <motion.button animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.7}}} initial={{opacity: 0, y: -20}}  onClick={() => console.log(userData)}>NEXT STEP</motion.button>
                    </motion.div>
                </div>

            <div className="stepsContainer">
                <div className="stepsInnerContainer">

                    <div onClick={() => getToSpecifcStep(0)} className="step step1">
                        <StepIcon className="stepIcon contactStepIcon1"/>
                        <p className="stepName stepNameTarget">Step 1</p>
                    </div>

                    <span />

                    <div onClick={() => getToSpecifcStep(1)} className="step step2">
                        <StepIcon className="stepIcon contactStepIcon2"/>
                        <p className="stepName">Step 2</p>
                    </div>

                    <span />

                    <div onClick={() => getToSpecifcStep(2)} className="step step3">
                        <StepIcon className="stepIcon contactStepIcon3"/>
                        <p className="stepName">Step 3</p>
                    </div>

                    <span />

                    <div onClick={() => getToSpecifcStep(3)} className="step step4">
                        <StepIcon className="stepIcon contactStepIcon4"/>
                        <p className="stepName">Step 4</p>
                    </div>
                </div>
            </div>


            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: 1}}} className="designRef">
                <p>Not convinced yet? Checkout my work <Link to="/design">here</Link></p>
            </motion.div>

            <motion.div animate={{opacity: 1, height: "100%", transition: {delay: 1}}} initial={{opacity: 0, height: 0}} id="rainContainer" className="rainContainer">
                {rainDrops}
            </motion.div>
        </motion.div>
    )
}

export default ContactPage