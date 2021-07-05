import React, {useEffect} from "react"
import {Redirect, Route, Switch, useLocation} from "react-router-dom"
import {AnimatePresence ,motion, useAnimation} from "framer-motion"
import "./app.scss"
//import Page components
import Homepage from "./components/Homepage"
import DesignPage from "./components/DesignPage"
import ProjectPage from "./components/ProjectsPage"
import ContactPage from "./components/ContactPage"
import PageNotFound from "./components/PageNotFound"
//Import components
import Nav from "./components/AppComponents/Nav"
import Blackbar from "./components/AppComponents/Blackbar"
import Logo from "./components/AppComponents/LogoName"


var interfaceAnimation = {
  initial: {
      opacity: 0,
  },
  in: {
      transition: {delay: 2, duration: 1},
      opacity: 1,
  },
  out: {
      transition: {duration: 0.2},
      opacity: 0,
  },
}
var timer: any
function App() {  
  const location = useLocation()
  //Using url string query to set/get viewState for designPages to toggle design based on value. viewState = false /close design viewState = true /openDesign
  var designQuery =  new URLSearchParams(window.location.search)

  const appInfo = useAnimation()
  const appInfoBox = useAnimation()
  //appMessage(true, "This is a test Header", "New content available now!", "Try now!")
  function appMessage(toggle: boolean, header?: string, content?: string, buttonContent?: string) {
    var getAppInfoHeader = document.getElementById("appInfoHeader") as HTMLDivElement
    var getAppInfoContent = document.getElementById("appInfoContent") as HTMLDivElement
    var getAppInfoButton = document.getElementById("appInfoButton") as HTMLDivElement

    if(toggle === true){
      
      appInfo.start({
        opacity: 1,
        pointerEvents: 'all',
        transition: {duration: 0.2}
      })

      appInfoBox.start({
        opacity: 1,
        scale: [0.8, 1],
        pointerEvents: 'all',
        transition: {duration: 0.2}
      })

      header ? getAppInfoHeader.innerHTML = `${header}` : getAppInfoHeader.innerHTML = `No header`
      content ? getAppInfoContent.innerHTML = `${content}` : getAppInfoContent.innerHTML = `No content`
      buttonContent ? getAppInfoButton.innerHTML = `${buttonContent}` : getAppInfoButton.innerHTML = `No ButtonText`
    }

    else{
      appInfo.start({
        opacity: 0,
        pointerEvents: 'none',
        transition: {duration: 0.2}
      })

      appInfoBox.start({
        opacity: 0,
        scale: 0.8,
        pointerEvents: 'none',
        transition: {duration: 0.2}
      })
    }
  }

  //Function is used to change the Switch components key to always rerender if pathname does not include the Pages name for proper exit / in animations
  function keyTest(): string{
    if(location.pathname.toLowerCase().includes("/home") === true){
      return "/home"
    }
    else if(location.pathname.toLowerCase().includes("/design") === true){
      return "/design"
    }
    else if(location.pathname.toLowerCase().includes("/projects") === true){
      return "/projects"
    }
    else if(location.pathname.toLowerCase().includes("/workspace") === true){
      return "/workspace"
    }
    else if(location.pathname.toLowerCase().includes("/contact") === true){
      return "/contact"
    }
    else{
      return "/"
    }
  }
  //Using to cleanup timers 
  useEffect(() => {
    return () => {
      clearTimeout(timer)
    };
  }, []);

  
  return (
  
  <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.4}} className="App" id="App">
      <AnimatePresence>
        <Switch location={location} key={keyTest()}>

          <Route strict path="/home">
            <Homepage interfaceAnimation={interfaceAnimation} appMessage={appMessage}/>
          </Route>

          <Route strict path={`/design/:viewIndex`} >
            <DesignPage interfaceAnimation={interfaceAnimation} designQuery={designQuery}/>
          </Route>

          <Route exact path={`/projects`} >
            <ProjectPage appMessage={appMessage}/>
          </Route>

          <Route exact path={`/contact/form`} >
            <ContactPage/>
          </Route>

          <Route exact path = "/">
            <Redirect to="/home"/>
          </Route>

          <Route exact path = "/design">
            <Redirect to="/design/1"/>
          </Route>

          <Route exact path = "/contact">
            <Redirect to="/home/connect"/>
          </Route>
          
          <Route component={PageNotFound}></Route>

        </Switch>
      </AnimatePresence>

      <motion.div animate={appInfo} className="appInfoContainer" id="appInfoContainer">
          <motion.div animate={appInfoBox} className="appInfoBox">
            <h1 id="appInfoHeader">Header</h1>
            <p id="appInfoContent">Content</p>
            <div onClick={() => appMessage(false)}  id="appInfoButton">START</div>
          </motion.div>
      </motion.div>

      <Nav interfaceAnimation={interfaceAnimation} designQuery={designQuery} appMessage={appMessage}/>
      <Blackbar interfaceAnimation={interfaceAnimation}/>
      <Logo interfaceAnimation={interfaceAnimation}/>
    </motion.div>
  );
}

export default App;
