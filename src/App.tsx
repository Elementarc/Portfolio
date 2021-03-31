import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

import "./app.scss"

//import components
import Homepage from "./pages/Homepage"
import DesignPage from "./pages/Design"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        
        <Switch>
          <Route path="/design" component={DesignPage} />
          <Route path="/home" component={Homepage} />
          
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
        </Switch>
        

      </Router>
      
      
    </div>
  );
}

export default App;
