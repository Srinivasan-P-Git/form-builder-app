import React, { useContext, useEffect, useReducer } from "react";
import { Form } from "react-final-form";
import Button from "@mui/material/Button";
import arrayMutators from "final-form-arrays";
import { useNavigate } from "react-router-dom";

import formReducer from "./../../reducers/form/form.reducer";
import {
  ModalContext,
  MODAL_INITIAL_STATE,
} from "../../context/modal/modal.context";
// import { formTemplateUrl, formDataUrl } from "./../../config/form-api.config";
import { generateFormFields } from "./../../utils/generate-form-fields.utils";
import { ConfigureJsonContext } from "./../../context/configure-json/configure-json.context";

import "./form-builder.styles.scss";

const FORM_INITIAL_STATE = {
  formTemplate: [],
  formData: {},
};

const FormBuilder = () => {
  const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE);
  const { formTemplate, formData } = state;
  const navigate = useNavigate();

  const { dispatchModal } = useContext(ModalContext);
  const { jsonTemplate, jsonData } = useContext(ConfigureJsonContext);

  useEffect(() => {
    dispatch({
      type: "SET_FORM",
      payload: {
        formTemplate: JSON.parse(jsonTemplate),
        formData: JSON.parse(jsonData),
      },
    });
  }, [jsonTemplate, jsonData, dispatch]);

  /**
   * TODO: For Use API Feature
   * 
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
        dispatchModal({
          type: "SHOW_MODAL",
          payload: {
            modalType: "Alert",
            modalProps: {
              handleClose: () => {
                navigate("/");
                dispatchModal({
                  type: "HIDE_MODAL",
                  payload: MODAL_INITIAL_STATE,
                });
              },
              content: `${err} - Error in Fetching Template - Check Template URL(s) API Config`,
            },
          },
        });
      }
    };
    fetchData();
  }, []);
   * 
   */

  const submitForm = (data) => {
    dispatchModal({
      type: "SHOW_MODAL",
      payload: {
        modalType: "Alert",
        modalProps: {
          handleClose: () => {
            navigate("/");
            dispatchModal({
              type: "HIDE_MODAL",
              payload: MODAL_INITIAL_STATE,
            });
          },
          content: JSON.stringify(data),
        },
      },
    });
  };

  return (
    <div className="form-container">
      <div className="form-title">Form Details</div>
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
