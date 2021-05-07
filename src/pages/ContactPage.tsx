import React from "react"
import "./styleSheetPage/contactPage.scss"
function ContactPage(props: any) {
    return (
        <div className="contactPageContainer">
            <div className="contactContentContainer">
                <h1>CONTACT</h1>
                <h2>ME, MYSELF {"&"} I</h2>
                <p>I'm a 22 years old Web-developer {"&"} designer who likes to create things that will not only catch your eye, but also look professional. Got interested? Let's have a chat! </p>
            </div>

            <div className="contactFlexContainer">
                <div className="contactBox contactBox1"></div>
                <span></span>
                <div className="contactBox contactBox2"></div>
                <span></span>
                <div className="contactBox contactBox3"></div>
            </div>

            <h1 className="workLink"> Not convinced yet? Checkout my work <a href=""> here </a></h1>
        </div>
    )
}

export default ContactPage