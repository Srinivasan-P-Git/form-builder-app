import React, { useEffect, useReducer } from "react";
import { Form } from "react-final-form";
import Button from "@mui/material/Button";
import arrayMutators from "final-form-arrays";

import formReducer from "./../../reducers/form/form.reducer";
import { formTemplateUrl, formDataUrl } from "./../../config/form-api.config";
import { generateFormFields } from "./../../utils/generate-form-fields.utils";

import "./form-builder.styles.scss";

const INITIAL_STATE = {
  formTemplate: [],
  formData: {},
};

const FormBuilder = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { formTemplate, formData } = state;

  useEffect(() => {
    const fetchData = async () => {
      const template = await fetch(formTemplateUrl).then((res) => res.json());
      const data = await fetch(formDataUrl).then((res) => res.json());
      dispatch({
        type: "SET_FORM",
        payload: {
          formTemplate: template,
          formData: data,
        },
      });
    };
    fetchData();
  }, []);

  const submitForm = (data) => {
    fetch(formDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {})
      .catch((err) => {
        console.log("Error");
      });
  };

  return (
    <div className="form-container">
      <Form
        onSubmit={submitForm}
        initialValues={formData}
        mutators={{ ...arrayMutators }}
        render={(formRenderProps) => {
          const { handleSubmit } = formRenderProps;
          return (
            <form onSubmit={handleSubmit}>
              {generateFormFields(formTemplate)}
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          );
        }}
      />
    </div>
  );
};

export default FormBuilder;
