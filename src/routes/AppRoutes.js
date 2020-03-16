import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import Users from "../components/users/Users";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/auth/login" component={Login} />
      <PrivateRoute path="/users" component={Users} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRoutes;
