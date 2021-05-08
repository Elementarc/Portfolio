import React from "react"
import {Link} from "react-router-dom"
import "./styleSheetPage/contactPage.scss"
function ContactPage(props: any) {
    return (
        <div className="contactPageContainer">
            
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