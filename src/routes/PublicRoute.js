import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppState } from "../providers/AppProvider";

const PublicRoute = ({ component: Component, render, ...rest }) => {
  const state = useAppState();

  return (
    <Route
      {...rest}
      render={props => {
        const { from } = props.location.state || { from: { pathname: "/" } };

        if (state.user) {
          return <Redirect to={from} />;
        }

        if (Component) {
          return <Component {...props} />;
        }

        if (render) {
          return render(props);
        }
      }}
    />
  );
};

export default PublicRoute;
