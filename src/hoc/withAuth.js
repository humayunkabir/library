import React, { useState } from "react";
import Request from "react-axios-request/Request";

const withAuth = Component => props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Request type="POST" route="auth/login">
      {({ error, rcb }) => {
        const login = async (e, body, callback) => {
          e.preventDefault();
          const { accessToken } = await rcb(body);
          console.log(accessToken);

          if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            setIsLoggedIn(true);
            !!callback && callback();
          }
        };

        const logout = () => {
          localStorage.removeItem("accessToken");
          setIsLoggedIn(false);
        };

        return (
          <Component auth={{ login, logout, isLoggedIn, error }} {...props} />
        );
      }}
    </Request>
  );
};

export default withAuth;
