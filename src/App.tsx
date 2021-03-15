import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

import "./assets/css/app.css"

//import components
import Homepage from "./pages/Homepage"
import DesignPage from "./pages/Design"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Homepage}/>
          <Route path="/design" component={DesignPage}/>
          <Route path="/projects" component={DesignPage}/>     
          <Route path="/workspace" component={DesignPage}/>
          <Route path="/contact" component={DesignPage}/>

          <Route path="/">
            <Redirect to="/home"></Redirect>
          </Route>     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
