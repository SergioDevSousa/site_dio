import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

const Routes = () => {
   return(
       <Router>
           <Route component = {<Home /> }  path="/" />
           <Route component = {<Login /> }  path="/login" />
       </Router>
   )
}

export default Routes;