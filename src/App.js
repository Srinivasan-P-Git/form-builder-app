import { useEffect, useReducer } from "react";

import Header from "./components/header/header.component";
import FormBuilder from "./components/form-builder/form-builder.component";

import "./App.scss";

const INITIAL_STATE = {
  formTemplate: [],
  formData: {},
};

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

const App = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { formTemplate, formData } = state;

  useEffect(() => {
    //TODO:Need to make API call for data
  }, []);

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Header />
        <FormBuilder formTemplate={formTemplate} formData={formData} />
      </div>
    </div>
  );
};

export default App;
