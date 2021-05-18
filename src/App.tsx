import React, {useEffect,useState} from "react"
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom"
import {AnimatePresence ,motion} from "framer-motion"
import "./app.scss"
//import Page components
import Homepage from "./components/Homepage"
import DesignPage from "./components/DesignPage"
import ContactPage from "./components/ContactPage"
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
  
  //Using to cleanup timers 
  useEffect(() => {
    return () => {
      clearTimeout(timer)
    };
  }, []);
  return (
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.4}} className="App" id="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname.includes(`/home`) ? "true" : "false"}>

          <Route strict path="/home">
            <Homepage interfaceAnimation={interfaceAnimation}/>
          </Route>

          <Route strict path="/design" >
            <DesignPage/>
          </Route>

          <Route strict path="/contact" >
            <ContactPage/>
          </Route>
          
          <Route exact path = "/">
            <Redirect to="/home"/>
          </Route>
        </Switch>
      </AnimatePresence>
      
      <Nav interfaceAnimation={interfaceAnimation}/>
      <Blackbar interfaceAnimation={interfaceAnimation}/>
      <Logo interfaceAnimation={interfaceAnimation}/>
    </motion.div>
  );
}

export default App;
