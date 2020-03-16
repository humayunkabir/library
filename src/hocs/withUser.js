import React, { useEffect } from "react";
import Axios from "axios";
import { actionType } from "../reducers/appReducer";
import { apiBaseUrl, requestConfig } from "../config";
import { getToken } from "../helpers/token";
import { useAppDispatch } from "../providers/AppProvider";

const withUser = Component => props => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getToken()) {
      Axios.get(`${apiBaseUrl}/auth/login/token`, requestConfig)
        .then(res => dispatch({ type: actionType.LOGIN, payload: res.data }))
        .catch(error =>
          alert(`${error.message}.\nSession expires! Login again.`)
        );
    }
  }, [dispatch]);

  return <Component {...props} />;
};

export default withUser;
