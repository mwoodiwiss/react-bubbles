import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage';
import ProtectedRoute from './components/ProtectedRoute';
import Login from "./components/Login";
import "./styles.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation component={Navigation} />
        <Route exact path="/"/>
        <Route exact path="/Login" component={Login} />
        <ProtectedRoute exact path="/BubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
