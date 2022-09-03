import React from "react";
import { Form } from "react-final-form";
import Button from "@mui/material/Button";
import arrayMutators from "final-form-arrays";

import USER_DATA from "./../../assets/user-data";
import USER_TEMPLATE from "./../../assets/user-template";
import { generateFormFields } from "./../../utils/generate-form-fields.utils";

import "./form-builder.styles.scss";

const FormBuilder = () => {
  return (
    <div className="form-container">
      <Form
        onSubmit={(val) => {
          console.log("SUBMITTED", val);
        }}
        initialValues={USER_DATA}
        mutators={{ ...arrayMutators }}
        render={(formRenderProps) => {
          const { handleSubmit } = formRenderProps;
          return (
            <form onSubmit={handleSubmit}>
              {generateFormFields(USER_TEMPLATE)}
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
