import useAppDispatch from "./useAppDispatch";
import { actionType } from "../reducer/appReducer";
import token from "../helper/token";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = async (requestCallback, loginCallback) => {
    try {
      const response = await requestCallback();

      if (response?.data) {
        const { accessToken, ...rest } = response?.data;
        token({ type: "set", token: accessToken });
        dispatch({
          type: actionType.LOGIN,
          payload: rest
        });

        !!loginCallback && loginCallback();
      }
    } catch (error) {
      throw Error(error);
    }
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
  };

  return { login, logout };
};

export default useAuth;
