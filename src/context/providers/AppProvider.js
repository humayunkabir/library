import React, { useState } from "react";
import { AppContext } from "../Context";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = { user, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
