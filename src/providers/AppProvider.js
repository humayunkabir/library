import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import appReducer from "../reducers/appReducer";

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    books: []
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

AppProvider.propTypes = { children: PropTypes.node.isRequired };

export default AppProvider;
