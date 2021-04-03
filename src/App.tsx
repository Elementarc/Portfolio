import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation} from "react-router-dom"
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
        <Switch>
          <Route path="/design" component={DesignPage} />
          <Route path="/home" component={Homepage}/>
          
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
  
        </Switch>

      <Nav/>
      <Blackbar/>
      <Logo/>
    </motion.div>
  );
}

export default App;
