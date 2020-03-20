const jwtTokenName = "accessToken";
export const getToken = () => localStorage.getItem(jwtTokenName);
export const setToken = token => localStorage.setItem(jwtTokenName, token);
export const clearToken = () => localStorage.removeItem(jwtTokenName);

export const token = (type = "get", token) => {
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

export default token;
