import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { Feed } from "./pages/feed";

const Routes = () => {
   return(
       <Router>
           <Route component = {<Home /> }  path="/" />
           <Route component = {<Login /> }  path="/login" />
           <Route component = {<Feed /> }  path="/feed" />
       </Router>
   )
}

export default Routes;