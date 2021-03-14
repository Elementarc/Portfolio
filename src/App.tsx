import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import "./assets/css/app.css"

//import components
import Homepage from "./pages/Homepage"
import DesignPage from "./pages/Design"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/design" component={DesignPage}/>
          <Route path="/" component={Homepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
