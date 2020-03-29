import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ConfirmMail from "../components/auth/ConfirmMail";
import PasswordForgot from "../components/auth/PasswordForgot";
import PasswordReset from "../components/auth/PasswordReset";
import Logout from "../components/auth/Logout";
import AuthLayout from "../layouts/AuthLayout";

const AuthRoutes = ({ match: { url } }) => (
  <AuthLayout>
    <Route path={`${url}/login`} component={Login} />
    <Route path={`${url}/register`} component={Register} />
    <Route path={`${url}/confirm-mail`} component={ConfirmMail} />
    <Route path={`${url}/password-forgot`} component={PasswordForgot} />
    <Route path={`${url}/password-reset`} component={PasswordReset} />
    <Route path={`${url}/logout`} component={Logout} />
  </AuthLayout>
);

export default AuthRoutes;
