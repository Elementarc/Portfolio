import React, {useEffect, useState} from "react"

//CSS
import "./styleSheets/contactPage.scss"
var rThunderNum = 5
function ContactPage(props: any) {
    var rainDrops: any = []
    const [State, setState] = useState(false);
    
    function thunder(){
        //getting background to animate Thunder
        var getBackground = document.getElementById("rainContainer") as HTMLDivElement
        rThunderNum = Math.floor(Math.random() * 30 + 1)
        
        getBackground.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() + 0.3})`
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
        console.log(rThunderNum)
        setTimeout(() => {
            thunder()
            
        }, rThunderNum * 1000);
    }, [State]);
    
    rain()
    return (
        <div className="contactPageContainer">
            <div id="rainContainer" className="rainContainer">
                {rainDrops}
            </div>
        </div>
    )
}

export default ContactPage