export const getToken = () => localStorage.getItem("accessToken");
export const setToken = token => localStorage.setItem("accessToken", token);
export const clearToken = () => localStorage.removeItem("accessToken");

export const token = ({ type, token }) => {
  switch (type) {
    case "get":
      return getToken();

    case "set":
      return setToken(token);

    case "clear":
      return clearToken();

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default { getToken, setToken, clearToken };
