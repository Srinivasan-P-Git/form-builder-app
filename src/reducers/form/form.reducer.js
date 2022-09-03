const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_FORM": {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      throw new Error(`Unhandled Action Type - ${type} - in Form Reducer`);
    }
  }
};

export default formReducer;
