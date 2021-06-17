import React, {useEffect} from "react"
import {Redirect, Route, Switch, useLocation} from "react-router-dom"
import {AnimatePresence ,motion} from "framer-motion"
import "./app.scss"
//import Page components
import Homepage from "./components/Homepage"
import DesignPage from "./components/DesignPage"
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
  var designParameters =  new URLSearchParams(window.location.search)

  //scrolls to top whenever URL changes for better ux
  useEffect(() => {
    function scrollToTop() {
      timer = setTimeout(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }, 500);
    }
    scrollToTop()
    
  }, [location.pathname]);
  
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
            <Homepage interfaceAnimation={interfaceAnimation}/>
          </Route>

          <Route strict path={`/design/:viewIndex`} >
            <DesignPage interfaceAnimation={interfaceAnimation} designParameters={designParameters}/>
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
        </Switch>
      </AnimatePresence>
      
      <Nav interfaceAnimation={interfaceAnimation} designParameters={designParameters}/>
      <Blackbar interfaceAnimation={interfaceAnimation}/>
      <Logo interfaceAnimation={interfaceAnimation}/>
    </motion.div>
  );
}

export default App;
