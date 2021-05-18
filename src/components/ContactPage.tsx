import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
//CSS
import "./styleSheets/contactPage.scss"
var rThunderNum = 5
var timer: any
function ContactPage(props: any) {
    var rainDrops: any = []
    const [State, setState] = useState(false);
    
    function thunder(){
        //getting background to animate Thunder
        var getBackground = document.getElementById("rainContainer") as HTMLDivElement
        rThunderNum = Math.floor(Math.random() * 30 + 1)
        
        getBackground.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5})`
        setTimeout(() => {
            getBackground.style.backgroundColor = `rgba(255, 255, 255, 0)`
        }, 100);
        setState(!State)
    }
    //Creates 100divs to display rain drops
    function rain(){
        for(var i = 0; i < 100; i++){
            //random number between 1 - 99
            var rNum = Math.floor(Math.random() * 100 + 1)
            //random number between 1 - 5
            var rNum2 =  0.3 * Math.random() + 0.5
            
            rainDrops.push(<div key={i} className="rain" style={{left: `${rNum}vw`, animation: `drop ${rNum2}s linear infinite`, backgroundColor: `rgba(255,255,255,${Math.random() * 0.3})`}} />)
        }
    }
    
    useEffect(() => {
        timer = setTimeout(() => {
            thunder()
        }, rThunderNum * 1000);
        return(() =>{
            clearTimeout(timer)
        })
    }, [State]);
    
    rain()
    return (
        <motion.div exit={{opacity: 0, transition: {duration: 0.2}}} animate={{opacity: 1}} initial={{opacity: 0}} className="contactPageContainer">
            <div className="contactContent">
                <motion.div initial={{height: 0}} animate={{height: "120%", transition: {duration: 2, delay: 0.5, type: 'spring'}}} />
                <motion.h1 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>CONTACT</motion.h1>
                <motion.h2 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}}} initial={{opacity: 0, y: -20}}>ME, MYSELF {"&"} I</motion.h2>
                <motion.p animate={{opacity: 1, y: 0, transition:{duration: 0.5, delay: 0.7}}} initial={{opacity: 0, y: -20}}>I'm a 22 years old designer {"&"} Web-developer who likes to create things that will not only catch your eye, but also look professional. Got interested? Let's have a chat!  </motion.p>
            </div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 0.1, transition: {delay: 1.5, duration: 1}}} className="whiteBar"></motion.div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: 1}}} className="contactWays">
                <div className="contact Email">
                    <div className="emailLogo" />
                </div>
                <span/>
                <div className="contact Discord">
                    <div className="discordLogo"/>
                </div>
                <span/>
                <div className="contact Github">
                    <div className="githubLogo" />
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: 1}}} className="footer">
                <Link to="#">TERMS</Link>
                <span/>
                <Link to="#">LICENSE</Link>
                <span/>
                <Link to="#">COOKIES</Link>
            </motion.div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: 1}}} className="designRef">
                <p>Not convinced yet? Checkout my work <Link to="/design">here</Link></p>
            </motion.div>

            <motion.div animate={{opacity: 1, height: "100%", transition: {delay: 2.2}}} initial={{opacity: 0, height: 0}} id="rainContainer" className="rainContainer">
                {rainDrops}
            </motion.div>
        </motion.div>
    )
}

export default ContactPage