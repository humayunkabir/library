import React, { useState, useEffect } from "react";
import { AppContext } from "../Context";
import axios from "axios";
import withAuth from "../../hoc/withAuth";
import { apiBaseUrl } from "../../config";

const AppProvider = ({ children, auth }) => {
  const [appInfo, setAppInfo] = useState(null);

  useEffect(() => {
    axios.get(apiBaseUrl).then(res => setAppInfo(res.data));
  }, []);

  const value = { appInfo, auth };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default withAuth(AppProvider);
