import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppNavbar from "./components/navbar/AppNavbar";
import { getToken } from "./helpers/token";
import Axios from "axios";
import { actionType } from "./reducers/appReducer";
import { apiBaseUrl, requestConfig } from "./config";
import {
  useAppDispatch,
  useAppState,
  initialAppState
} from "./providers/AppProvider";

const App = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getToken()) {
      Axios.get(`${apiBaseUrl}/auth/login/token`, requestConfig)
        .then(res =>
          dispatch({
            type: actionType.GET_USER,
            payload: res.data
          })
        )
        .catch(error => {
          console.log(error);

          dispatch({
            type: actionType.GET_USER,
            payload: null
          });
        });
    } else {
      console.log("Welcome! Login!");

      dispatch({
        type: actionType.GET_USER,
        payload: { ...initialAppState, loaded: true }
      });
    }
  }, [dispatch]);

  if (!state.loaded) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <AppNavbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
