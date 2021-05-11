import React, {useEffect} from "react"
import {Redirect, Route, Switch, useLocation} from "react-router-dom"
import {AnimatePresence ,motion} from "framer-motion"
import "./app.scss"
//import Page components
import Homepage from "./pages/Homepage"
import DesignPage from "./pages/DesignPage"
import ContactPage from "./pages/ContactPage"
//Import components
import Nav from "./components/Nav"
import Blackbar from "./components/Blackbar"
import Logo from "./components/LogoName"

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
function App() {  
  const location = useLocation()
  const path = useLocation().pathname.toLowerCase()
  //scrolls to top whenever URL changes for better ux
  useEffect(() => {
    function scrollToTop() {
      setTimeout(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }, 500);
    }
    scrollToTop()
  }, [path]);
  
  return (
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.4}} className="App" id="App">
      <AnimatePresence>
        <Switch location={location} key={path.includes(`/home`) ? "true" : "false"}>

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
