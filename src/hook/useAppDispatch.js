import { useContext } from "react";
import { AppDispatchContext } from "../context/Context";

export default () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
};
