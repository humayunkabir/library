export const arrayReducerTypes = {
  SHOW_ALL: "SHOW_ALL",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  CLEAR: "CLEAR"
};

const arrayReducer = (state, action) => {
  const { type, id, payload } = action;

  switch (type) {
    case arrayReducerTypes.SHOW_ALL:
      return state;

    case arrayReducerTypes.CREATE:
      return [...state, { id: Math.random(), ...payload }];

    case arrayReducerTypes.UPDATE:
      return state.map(item =>
        item.id !== id ? item : { ...item, ...payload }
      );

    case arrayReducerTypes.DELETE:
      return state.filter(item => item.id !== id);

    case arrayReducerTypes.CLEAR:
      return [];

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default arrayReducer;
