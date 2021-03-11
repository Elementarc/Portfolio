import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//import components
import Homepage from "./pages/Homepage"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
