export const actionType = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.LOGIN:
      return { ...state, user: payload };

    case actionType.LOGOUT:
      return { ...state, user: null };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default appReducer;
