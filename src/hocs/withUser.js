import React from "react";
import { useAppState } from "../providers/AppProvider";

const withUser = Component => props => {
  const state = useAppState();

  return <Component user={state.user} {...props} />;
};

export default withUser;
