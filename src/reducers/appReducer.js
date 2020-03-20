export const actionType = {
  GET_USER: "GET_USER",
  UPDATE_USER: "UPDATE_USER",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.GET_USER:
      return { ...state, loaded: true, user: payload };

    case actionType.UPDATE_USER:
      return { ...state, user: payload };

    case actionType.LOGIN:
      return { ...state, loaded: true, user: payload };

    case actionType.LOGOUT:
      return { ...state, user: null };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default appReducer;
