import React from "react";
import { Button } from "reactstrap";
import useAppState from "../../hook/useAppState";
import useAuth from "../../hook/useAuth";

const Logout = () => {
  const state = useAppState();
  const { logout } = useAuth();

  return (
    <h4>
      User: {state.user.name || state.user.username}{" "}
      <Button color="primary" onClick={logout}>
        Logout
      </Button>
    </h4>
  );
};

export default Logout;
