import "./App.css";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
      
        <NavBar />
        <Switch>
        <Route exact  path="/"><News key="general" pageSize = {4} country="in" category="general"/></Route>

          <Route exact strict path="/general"><News key="general" pageSize = {4} country="in" category="general"/></Route>
          <Route exact strict path="/business"><News key="business" pageSize = {4} country="in" category="business"/></Route>
          <Route exact strict path="/entertainment"><News key="entertainment" pageSize = {4} country="in" category="entertainment"/></Route>
          <Route exact strict path="/health"><News key="health" pageSize = {4} country="in" category="health"/></Route>
          <Route exact strict path="/science"><News key="science" pageSize = {4} country="in" category="science"/></Route>
          <Route exact strict path="/sports"><News key="sports" pageSize = {4} country="in" category="sports"/></Route>
          <Route exact strict exactpath="/technology"><News key="technology" pageSize = {4} country="in" category="technology"/></Route>

        </Switch>
        
        </Router>
      </div>
    );
  }
}
