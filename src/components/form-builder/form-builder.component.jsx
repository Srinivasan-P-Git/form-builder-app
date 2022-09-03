import { useEffect, useReducer } from "react";

import formReducer from "../../reducers/form/form.reducer";

import "./form-builder.styles.scss";

const INITIAL_STATE = {
  formTemplate: [],
  formData: {},
};

const FormBuilder = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { formTemplate, formData } = state;
  useEffect(() => {
    //TODO:Need to make API call for data
  }, []);
  return <h3>From Form Builder</h3>;
};

export default FormBuilder;
