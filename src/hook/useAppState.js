import { useContext } from "react";
import { AppStateContext } from "../context/Context";

export default () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};
