import React, { useContext, useEffect, useReducer } from "react";
import { Form } from "react-final-form";
import Button from "@mui/material/Button";
import arrayMutators from "final-form-arrays";
import { useNavigate } from "react-router-dom";

import formReducer from "./../../reducers/form/form.reducer";
import { AlertContext } from "../../context/alert/alert.context";
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
  const navigate = useNavigate();

  const { setIsOpen, setAlertContent, onClose } = useContext(AlertContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const template = await fetch(formTemplateUrl).then((res) => res.json());
        const data = await fetch(formDataUrl).then((res) => res.json());
        dispatch({
          type: "SET_FORM",
          payload: {
            formTemplate: template,
            formData: data,
          },
        });
      } catch (err) {
        setIsOpen(true);
        setAlertContent(
          `${err} - Error in Fetching Form Template - Make sure API URL(s) are valid`
        );
        onClose(() => {
          navigate("/");
        });
      }
    };
    fetchData();
  }, []);

  const submitForm = (data) =>
    fetch(formDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setIsOpen(true);
        setAlertContent("Data submitted successfully");
        onClose(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        setIsOpen(true);
        setAlertContent(`${err} - Error in submitting Data`);
      });

  return (
    <div className="form-container">
      <Form
        onSubmit={submitForm}
        initialValues={formData}
        mutators={{ ...arrayMutators }}
        render={(formRenderProps) => {
          const { handleSubmit, submitting } = formRenderProps;
          return (
            <form onSubmit={handleSubmit}>
              {generateFormFields(formTemplate)}
              <Button disabled={submitting} type="submit" variant="contained">
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
