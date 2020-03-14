import React from 'react';
import './App.css';
import Home from "./components/Home"
import MobileTest from "./components/MobileTest"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mobile-test" exact component={MobileTest}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
