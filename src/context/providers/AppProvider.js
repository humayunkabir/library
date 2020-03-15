import React, { useEffect, useReducer, useState } from "react";
import { AppStateContext, AppDispatchContext } from "../Context";
import appReducer, { actionType } from "../../reducer/appReducer";
import token from "../../helper/token";
import Axios from "axios";
import { apiBaseUrl } from "../../config";

const initialState = {
  user: null
};

const AppProvider = ({ children }) => {
  const [isLoadApp, setIsLoadApp] = useState(false);
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const accessToken = token({ type: "get" });
    if (accessToken) {
      Axios.post(`${apiBaseUrl}/auth/login/token`, { accessToken })
        .then(res => {
          dispatch({ type: actionType.LOGIN, payload: res.data });
          setIsLoadApp(true);
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)));
        });
    }
  }, []);

  console.log({ isLoadApp });
  // if (!isLoadApp) return null;

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppProvider;
