import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import Login from "../components/auth/Login";
import Users from "../components/users/Users";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/users" component={Users} />
      <PublicRoute path="/auth/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRoutes;
