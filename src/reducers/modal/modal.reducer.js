const modalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOW_MODAL": {
      return {
        ...state,
        ...payload,
      };
    }
    case "HIDE_MODAL": {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
