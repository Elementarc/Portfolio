import React from "react"
import {Link} from "react-router-dom"
import "./styleSheetPage/contactPage.scss"
function ContactPage(props: any) {
    return (
        <div className="contactPageContainer">
            <div className="contactContent">
                <span/>
                <h1>CONTACT</h1>
                <h2>ME, MYSELF {"&"} I</h2>
                <p>I'm a 22 years old Web-developer {"&"} designer who likes to create things that will not only catch your eye, but also look professional. Got interested? Let's have a chat! </p>
            </div>
            <div className="whiteBarMid"></div>

            <div className="contactTypes">
                <div className="contactBox contactEmail">
                    E-MAIL
                </div>
                <span/>
                <div className="contactBox contactDiscord">
                    <div className="discordLogo"/>
                </div>
                <span/>
                <div className="contactBox contactGithub">
                <div className="githubLogo"/>
                </div>
            </div>
            
            <div className="footer">
                <Link to="#">TERMS</Link>
                <span/>
                <Link to="#">LICENSE</Link>
                <span/>
                <Link to="#">COOKIES</Link>
            </div>
        </div>
    )
}

export default ContactPage