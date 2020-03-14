import React from "react";
import { AppContext } from "../Context";
import withAuth from "../../hoc/withAuth";

const AppProvider = ({ children, auth }) => {
  const value = { auth };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default withAuth(AppProvider);
