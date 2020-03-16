import { actionType } from "../reducers/appReducer";
import { setToken, clearToken } from "../helpers/token";
import { useAppDispatch } from "../providers/AppProvider";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = async (requestCallback, loginCallback) => {
    try {
      const response = await requestCallback();

      if (response?.data) {
        const { accessToken, ...rest } = response?.data;
        setToken(accessToken);
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
    clearToken();
    dispatch({ type: actionType.LOGOUT });
  };

  return { login, logout };
};

export default useAuth;
