import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";

const app = document.getElementById('app');

ReactDOM.render(
     <Router history={hashHistory}>
          <Route path="/" component={SignUp}>
               <IndexRoute component={SignUp}></IndexRoute>
               <Route path="home" component={Home}></Route>
               <Route path="signup" component={SignUp}></Route>
               <Route path="archives" component={Archives}></Route>
               <Route path="settings" component={Settings}></Route>
               <Route path="about" component={About}></Route>
          </Route>

     </Router>,
app);
