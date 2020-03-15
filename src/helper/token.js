export default ({ type, token }) => {
  switch (type) {
    case "get":
      return localStorage.getItem("accessToken");

    case "set":
      return localStorage.setItem("accessToken", token);

    case "clear":
      return localStorage.removeItem("accessToken");

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
