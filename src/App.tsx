import React from "react"
import {Redirect, Route, Switch, useLocation} from "react-router-dom"
import {AnimatePresence ,motion} from "framer-motion"
import "./app.scss"

//import components
import Homepage from "./pages/Homepage"
import DesignPage from "./pages/Design"
import Nav from "./components/Nav"
import Blackbar from "./components/Blackbar"
import Logo from "./components/LogoName"


function App() {
  const location = useLocation()
  return (
    <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.4}} className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname.includes("/home") ? "true" : "false"}>
          <Route strict path="/design" component={DesignPage}/>
          <Route strict path="/home" component={Homepage}/>

          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
        </Switch>
      </AnimatePresence>

      <Nav/>
      <Blackbar/>
      <Logo/>
    </motion.div>
  );
}

export default App;
