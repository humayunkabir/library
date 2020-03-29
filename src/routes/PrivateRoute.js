import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppState } from "../providers/AppProvider";

const PrivateRoute = ({
  component: Component,
  render,
  permission,
  redirectTo,
  ...rest
}) => {
  const state = useAppState();

  return (
    <Route
      {...rest}
      render={props => {
        if (!state.user) {
          console.log("Redirect to /auth/login");

          return (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: props.location }
              }}
            />
          );
        }

        if (Component) {
          return <Component {...props} user={state.user} />;
        }

        if (render) {
          return render({
            ...props,
            user: state.user
          });
        }
      }}
    />
  );
};

export default PrivateRoute;
