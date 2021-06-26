import React, {useEffect, useState} from "react"
import {ReactComponent as StepIcon} from "../assets/svgs/contactStepsIcon.svg"
import {ReactComponent as InputInfo} from "../assets/icons/inputInfo.svg"
import {Link, useHistory} from "react-router-dom"
import {motion, useAnimation} from "framer-motion"
//CSS
import "./styleSheets/contactPage.scss"
import { useCallback } from "react"
var rThunderNum = 5
var thunderTimer: any


var step0Done: boolean = false
var step1Done: boolean = false
var step2Done: boolean = false
var step3Done: boolean = false

var fullNameRegEx = new RegExp(/^[a-zA-Z0-9]{2,15} ?(?=[a-zA-Z0-])[a-zA-Z0-9]{0,15}$/)
var emailRegEx = new RegExp(/^[a-zA-Z0-9-_.]{3,25}@[a-zA-Z0-9-_.]{2,20}\.[a-zA-Z0-9]{2,6}$/)
var descriptionRegEx = new RegExp(/^[a-zA-Z0-9-_.,:;+ !?&\s]{25,200}$/)


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
    //Resseting contact page on mounting
    useEffect(() => {
        function resetContact() {
            userData.userName = null
            userData.email = null
            userData.description = null
            userData.budged = null
            
            var getInputName = document.getElementById("inputName") as HTMLInputElement
            var getInputEmail = document.getElementById("inputEmail") as HTMLInputElement
            var getInputDescription = document.getElementById("inputDescription") as HTMLInputElement
            var getInputBudged = document.getElementById("inputBudged") as HTMLInputElement
    
            getInputName.value = ""
            getInputEmail.value =  ""
            getInputDescription.value =  ""
            getInputBudged.value = ""

    
            step0Done = false
            step1Done = false
            step2Done = false
            step3Done = false
            
            console.log(getInputName.defaultValue)
        }
        resetContact()
    }, []);

    //Using this to setRightTarget for stepName and stepIcon
    const [StepIndex, setStepIndex] = useState(0);

    //Sets focus when stepIndex changes to the right input
    const setInputFocus = useCallback(() =>{
        function setInputFocus() {
            var getInputName = document.getElementById("inputName") as HTMLInputElement
            var getInputEmail = document.getElementById("inputEmail") as HTMLInputElement
            var getInputDescription = document.getElementById("inputDescription") as HTMLInputElement
            var getInputBudged = document.getElementById("inputBudged") as HTMLInputElement
    
            if(window.innerWidth > 900){
                if(StepIndex === 0){
                    getInputName.focus()
                }
                else if(StepIndex === 1){
                    getInputEmail.focus()
                }
                else if(StepIndex === 2){
                    getInputDescription.focus()
                }
                else if(StepIndex === 3){
                    getInputBudged.focus()
                }
            }

        }
        setInputFocus()
    },[StepIndex])
    
    //Function that gets triggert when user is finished with filling out form
    function sendProject(){
        if(step0Done === true && step1Done === true && step2Done === true && step3Done === true){
            console.log(userData)
        }
    }
    //Sets setsTargetFor StepManager based on StepIndex. This only is animation/style
    const setTarget = useCallback(() =>{
        function setTarget(){
            var getStepsIcon = document.getElementsByClassName("stepIcon") as HTMLCollectionOf<HTMLElement>
            var getStepsName = document.getElementsByClassName("stepName") as HTMLCollectionOf<HTMLElement>

            //Removes all styles 
            for(var i = 0; i < getStepsIcon.length; i++){
                //Checks if step0 > then current i to style prev icons for better ui
                if(StepIndex > i){
                    getStepsIcon[i].classList.add("stepIconDone")
                    getStepsName[i].classList.add("stepNameDone")
                }
                //resets all left styles
                else{
                    getStepsIcon[i].classList.remove("stepIconTarget")
                    getStepsName[i].classList.remove("stepNameTarget")

                    getStepsIcon[i].classList.remove("stepIconDone")
                    getStepsName[i].classList.remove("stepNameDone")
                }
                
            }
            
            //Checks if step0 is done so it will colorup the next Icon for better ui
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
            
            //Sets the currentTarget of the StepIcon based on StepIndex
            getStepsIcon[StepIndex].classList.add("stepIconTarget")
            getStepsName[StepIndex].classList.add("stepNameTarget")
            
        }
        setTarget()
    },[StepIndex])

    //Verify Username Input
    const verifyInputValue0  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue0(){
            
            var getInput = document.getElementById("inputName") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputNameInfoSVG") as HTMLDivElement

            const passedCheck0 = function checkStep0(){
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

                            userData.userName = getInput.value
                            resolve(false)

                        }
                        
                    }, 0);

                    
                    
                })
            }

            passedCheck0().then((passedCheck) =>{
                var getButton = document.getElementById("nameNextStepButton") as HTMLDivElement
                
                if(passedCheck === true){
                    getButton.style.opacity = "1"
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"
                    
                    getButton.classList.remove("offButton")
                    getButton.classList.add("onButton")
                }
                else{
                    if(userData.userName === ""){
                        getInput.style.borderColor = "#ffcf76"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "#ffcf76"
                        

                    }
                    else{
                        getInput.style.borderColor = "red"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "red"
                    }
                    getButton.classList.add("offButton")
                    getButton.classList.remove("onButton")
                }
                setTarget()

            })

        }
        verifyInputValue0()
        
    },[setTarget])

    //Verify email Input
    const verifyInputValue1  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue1(){
            var getInput = document.getElementById("inputEmail") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputEmailInfoSVG") as HTMLDivElement
            const passedCheck1 = function checkStep1(){
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

                            userData.email = getInput.value
                            resolve(false)

                        }
                    }, 0);

                })
            }

            passedCheck1().then((passedCheck) =>{
                var getButton = document.getElementById("emailNextStepButton") as HTMLDivElement
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"
                    
                    getButton.classList.remove("offButton")
                    getButton.classList.add("onButton")
                }
                else{
                    if(userData.email === ""){
                        getInput.style.borderColor = "#ffcf76"
                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "#ffcf76"

                    }
                    else{
                        getInput.style.borderColor = "red"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "red"

                    }
                    getButton.classList.add("offButton")
                    getButton.classList.remove("onButton")
                }
                setTarget()
            })

        }
        verifyInputValue1()
    },[setTarget])

    //Verify Description Input
    const verifyInputValue2  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue2(){
            var getInput = document.getElementById("inputDescription") as HTMLTextAreaElement
            var getInputInfoIcon = document.getElementById("inputDescriptionInfoSVG") as HTMLDivElement
            const passedCheck2 = function checkStep2(){
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
                            userData.description = getInput.value
                            resolve(false)
                        }
                    }, 0);

                })
            }

            passedCheck2().then((passedCheck) =>{
                var getButton = document.getElementById("descriptionNextStepButton") as HTMLDivElement
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"

                    getButton.classList.remove("offButton")
                    getButton.classList.add("onButton")
                }
                else{
                    if(userData.description === ""){
                        getInput.style.borderColor = "#ffcf76"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "#ffcf76"
                    }
                    else{
                        getInput.style.borderColor = "red"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "red"
                    }
                    getButton.classList.add("offButton")
                    getButton.classList.remove("onButton")
                }
                setTarget()
            })

        }
        verifyInputValue2()
    },[setTarget])
    //Verify Budged Input
    const verifyInputValue3  = useCallback(() =>{
        //Verifys step1Input value.
        function verifyInputValue3(){
            var getInput = document.getElementById("inputBudged") as HTMLInputElement
            var getInputInfoIcon = document.getElementById("inputBudgedInfoSVG") as HTMLDivElement
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
                            userData.budged = parseInt(getInput.value, 10)
                            resolve(false)
                        }
                    }, 0);

                })
            }

            passedCheck3().then((passedCheck) =>{
                var getButton = document.getElementById("budgedNextStepButton") as HTMLDivElement
                if(passedCheck === true){
                    getInput.style.borderColor = "#56FFDC"
                    getInputInfoIcon.style.transition = "0.2s ease-in-out"
                    getInputInfoIcon.style.fill = "#56FFDC"

                    getButton.classList.remove("offButton")
                    getButton.classList.add("onButton")
                }
                else{
                    if(getInput.value.length === 0){
                        getInput.style.borderColor = "#ffcf76"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "#ffcf76"
                    }
                    else{
                        getInput.style.borderColor = "red"

                        getInputInfoIcon.style.transition = "0.2s ease-in-out"
                        getInputInfoIcon.style.fill = "red"
                    }
                    getButton.classList.add("offButton")
                    getButton.classList.remove("onButton")
                }
                setTarget()
            })

        }
        verifyInputValue3()

        
    },[setTarget])

    //Container animations
    const nameAnimation = useAnimation()
    const emailAnimation = useAnimation()
    const descriptionAnimation = useAnimation()
    const budgedAnimation = useAnimation()
    //animates  switch between containers
    useEffect(() =>{
        //setsTarget for icons and names
        setTarget()
        setInputFocus()
        //Animation for in & out
        var getNameContainer = document.getElementById("contactContentName") as HTMLDivElement
        var getEmailContainer = document.getElementById("contactContentEmail") as HTMLDivElement
        var getDescriptionContainer = document.getElementById("contactContentDescription") as HTMLDivElement
        var getBudgedContainer = document.getElementById("contactContentBudged") as HTMLDivElement

        if(StepIndex === 0){
            verifyInputValue0()

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
            verifyInputValue1()
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
            verifyInputValue2()
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
            verifyInputValue3()
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

    },[StepIndex,setTarget, setInputFocus, nameAnimation, emailAnimation, descriptionAnimation, budgedAnimation, verifyInputValue3, verifyInputValue2, verifyInputValue1,verifyInputValue0])

    

    

    
    const nextStep = useCallback((currentStep)=> {
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
                    verifyInputValue2()
                }
            }
        }
        nextStep(currentStep)
    },[verifyInputValue0, verifyInputValue1, verifyInputValue2])
    
    //Function to be able to go back to done steps. Getting used by clicking on icon
    function getToSpecifcStep(step: number){
        clearTimeout(inputCheckTimer)
        
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

    const enterFuncTriggerNextStep = useCallback((e: any) =>{
        function enterFuncTriggerNextStep(e: any) {
            if(e.keyCode === 13){

                if(StepIndex === 0){
                    var getNameNextStep = document.getElementById("nameNextStepButton") as HTMLDivElement
                    getNameNextStep.click()
                }
                else if(StepIndex === 1){
                    var getNameNextStep = document.getElementById("emailNextStepButton") as HTMLDivElement
                    getNameNextStep.click()
                }
                else if(StepIndex === 2){
                    //Not triggering for description buttonCLick because TextAre can go to next row with pressing enter
                    
                }
                else if(StepIndex === 3){
                    var getNameNextStep = document.getElementById("budgedNextStepButton") as HTMLDivElement
                    getNameNextStep.click()
                }
            }
        }
        enterFuncTriggerNextStep(e)
    },[StepIndex])
    //Adds eventlisteners
    useEffect(() => {
        var getInputName = document.getElementById("inputName") as HTMLInputElement
        var getInputEmail = document.getElementById("inputEmail") as HTMLInputElement
        var getInputDescription = document.getElementById("inputDescription") as HTMLInputElement
        var getInputBudged = document.getElementById("inputBudged") as HTMLInputElement

        

        getInputName.addEventListener("keydown", verifyInputValue0)
        getInputEmail.addEventListener("keydown", verifyInputValue1)
        getInputDescription.addEventListener("keydown", verifyInputValue2)
        getInputBudged.addEventListener("keydown", verifyInputValue3)

        window.addEventListener("keydown", enterFuncTriggerNextStep)

        return(() =>{
            getInputName.removeEventListener("keydown", verifyInputValue0)
            getInputEmail.removeEventListener("keydown", verifyInputValue1)
            getInputDescription.removeEventListener("keydown", verifyInputValue2)
            getInputBudged.removeEventListener("keydown", verifyInputValue3)

            window.removeEventListener("keydown", enterFuncTriggerNextStep)
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
    
    const history = useHistory()
    //Calling thunder function everytime the thunder() is getting called with an random number. Starts with number 5 * 1000 = 1s
    useEffect(() => {
        //Thunder Function to randomize the number of times the opacity of background goes up to imitate a thunder 
        function thunder(){
            if(history.location.pathname === "/contact/form"){
                //getting background to animate Thunder
                var getBackground = document.getElementById("rainContainer") as HTMLDivElement
                rThunderNum = Math.floor(Math.random() * 30 + 1)
                
                getBackground.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5})`
                thunderTimer = setTimeout(() => {
                    getBackground.style.backgroundColor = `rgba(255, 255, 255, 0)`
                }, 100);
                
                thunderTimer = setTimeout(() => {
                    console.log("test")
                    thunder()
                }, rThunderNum * 1000);
            }
        }
        thunder()
    }, [history]);


    //Using to clean up timers
    useEffect(() => {
        return () => {
            
            clearTimeout(thunderTimer)
            clearTimeout(changeStepAnimationTimer)
        };
    }, []);
    rain()

    //Changin NavIcon Color for better ui/ux
    useEffect(() => {
        var getNavIcon = document.getElementById("appNavMenu") as HTMLDivElement

        if(window.innerWidth > 900){
            getNavIcon.style.fill = "#ffffff"
        }
        
    }, []);
    return (
        <motion.div exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1, transition: {duration: 1}}} initial={{opacity: 0}} className="contactPageContainer">

                <div className="contactContentContainer">
                    <motion.div animate={nameAnimation} className="contactContentName" id="contactContentName">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>WHAT'S YOUR NAME?</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="nameInput" id="inputName" type="text" onBlur={verifyInputValue0} placeholder="Full Name" defaultValue={userData.userName === null ? "" :`${userData.userName}`} />
                            
                            <div className="nameInfo">
                                <InputInfo id="inputNameInfoSVG"></InputInfo>
                                <div className="tooltipContainer">
                                    <p><b>Whats allowed:</b></p>
                                    <p><b>Characters:</b> a-z, A-Z.</p>
                                    <p><b>Numbers: </b> any numbers.</p>
                                    <p>Your name has to be atleast 3 characters long.</p>
                                    <p>Your full name can exactly contain 30 characters, 15 for each part of your name.</p>
                                    <p>Your name can contain exactly 1 space. That space can not be at the beginning or the end of your name.</p>
                                    <p className="lastToolItem">You also can just use your first name.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}>
                            <motion.button className="offButton" id="nameNextStepButton" animate={{y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{y: -20}}  onClick={() => nextStep(0)}>NEXT STEP</motion.button>
                        </motion.div>
                    </motion.div>




                    <motion.div animate={emailAnimation} className="contactContentEmail" id="contactContentEmail">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>WHERE CAN WE CONTACT YOU?</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="emailInput" id="inputEmail" type="text" onBlur={verifyInputValue1} placeholder="E-mail" defaultValue={userData.email === null ? "" :`${userData.email}`} />
                            
                            <div className="emailInfo">
                                <InputInfo id="inputEmailInfoSVG"></InputInfo>
                                <div className="tooltipEmailContainer">
                                    <p><b>Please enter your E-mail address</b></p>
                                    <p>We will use your E-mail to contact you and talk about everything for further informations.</p>
                                    <p><b>WHAT WE WONT DO!</b></p>
                                    <p className="lastToolItem">There will not be any spam E-mails from us. We only will contact you to exchange informations if needed.</p>
                                </div>

                            </div>
                        </motion.div>

                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}>
                            <motion.button className="offButton" id="emailNextStepButton" animate={{ y: 0, transition: {duration: 0.5, delay: 0.7}}} initial={{ y: -20}}  onClick={() => nextStep(1)}>NEXT STEP</motion.button>
                        </motion.div>
                    </motion.div>
                    



                    <motion.div animate={descriptionAnimation} className="contactContentDescription" id="contactContentDescription">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>TELL ME ABOUT YOUR PROJECT</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <textarea className="descriptionInput" id="inputDescription" onBlur={verifyInputValue2} placeholder="Description" defaultValue={userData.description === null ? "" :`${userData.description}`} />
                            <InputInfo className="descriptionInfo" id="inputDescriptionInfoSVG"></InputInfo>
                        </motion.div>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}>
                            <motion.button className="offButton" id="descriptionNextStepButton" animate={{y: 0, transition: {duration: 0.5, delay: 0.7}}} initial={{y: -20}}  onClick={() => nextStep(2)}>NEXT STEP</motion.button>
                        </motion.div>
                    </motion.div>





                    <motion.div animate={budgedAnimation} className="contactContentBudged" id="contactContentBudged">
                        <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                        <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>HOW IMPORTANT IS THAT PROJECT TO YOU?</motion.h2>
                        
                        <motion.div animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.5}}} initial={{opacity: 0, y: -20}} className="inputContainer">
                            <input className="budgedInput" id="inputBudged" type="number" onBlur={verifyInputValue3} placeholder="Budged" defaultValue={userData.budged === null ? "" :`${userData.budged}`} />
                            <InputInfo className="budgedInfo" id="inputBudgedInfoSVG"></InputInfo>
                            
                        </motion.div>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}>
                            <motion.button className="offButton" id="budgedNextStepButton" animate={{y: 0, transition: {duration: 0.5, delay: 0.7}}} initial={{y: -20}}  onClick={sendProject}>SEND</motion.button>
                        </motion.div>
                    </motion.div>
                </div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 1, duration: 1}}} className="stepsContainer">
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
            </motion.div>


            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 1}}} className="designRef">
                <p>Not sure yet? You checkout my work <Link to="/design">here</Link></p>
            </motion.div>

            <motion.div animate={{opacity: 1, height: "100%", transition: {delay: 1}}} initial={{opacity: 0, height: 0}} id="rainContainer" className="rainContainer">
                {rainDrops}
            </motion.div>
        </motion.div>
    )
}

export default ContactPage