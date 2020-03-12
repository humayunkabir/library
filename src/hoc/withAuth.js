import React, { useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../config";

const withAuth = Component => props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    return axios
      .post(`${apiBaseUrl}/auth/login`, { username, password })
      .then(({ status, statusText, data }) => {
        const { accessToken } = data;
        localStorage.setItem("accessToken", accessToken);
        setIsLoggedIn(true);
        return { name: statusText, status };
      })
      .catch(error => {
        return JSON.parse(JSON.stringify(error));
      });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  const auth = { isLoggedIn, login, logout };

  return <Component auth={auth} {...props} />;
};

export default withAuth;
