import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import withUser from "./hocs/withUser";
import AppRoutes from "./routes/AppRoutes";
import AppNavbar from "./components/navbar/AppNavbar";

const App = () => (
  <Router>
    <AppNavbar />
    <AppRoutes />
  </Router>
);

export default withUser(App);
