import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import {
  INITIAL_FORM_DATA,
  ConfigureJsonContext,
} from "./../../context/configure-json/configure-json.context";

import {
  isArray,
  isRequired,
  isValidJSON,
  combineValidators,
} from "./../../utils/validations.utils";

import "./configure-json.styles.scss";

const ConfigureJson = () => {
  const navigate = useNavigate();
  const { setJsonTemplate, setJsonData } = useContext(ConfigureJsonContext);
  const jsonTemplateFieldValidator = combineValidators(
    isRequired,
    isValidJSON,
    isArray
  );
  const jsonDataFieldValidator = combineValidators(isValidJSON);

  return (
    <Form
      onSubmit={(data) => {
        const { jsonTemplate, jsonData } = data;
        setJsonTemplate(jsonTemplate);
        setJsonData(jsonData);
        navigate("/form");
      }}
      render={(formRenderProps) => {
        const { handleSubmit, submitting } = formRenderProps;
        return (
          <form onSubmit={handleSubmit}>
            <Button disabled={submitting} type="submit" variant="contained">
              Generate Form {">"}
            </Button>
            <div className="configure-json-wrapper">
              <Field
                key={"jsonTemplate"}
                name={"jsonTemplate"}
                initialValue={JSON.stringify(
                  INITIAL_FORM_DATA.jsonTemplate,
                  undefined,
                  4
                )}
                validate={jsonTemplateFieldValidator}
                render={(fieldRenderProps) => {
                  let { input, meta } = fieldRenderProps;
                  let isValid = {};
                  if (meta.error && meta.touched) {
                    isValid["error"] = true;
                    isValid["helperText"] = meta.error;
                  }
                  return (
                    <FormControl className="jsonTemplate" error={isValid.error}>
                      <label>Enter Template Json</label>
                      <textarea {...input} spellCheck={false}></textarea>
                      <FormHelperText>{isValid["helperText"]}</FormHelperText>
                    </FormControl>
                  );
                }}
              />
              <Field
                key={"jsonData"}
                name={"jsonData"}
                initialValue={JSON.stringify(
                  INITIAL_FORM_DATA.jsonData,
                  undefined,
                  4
                )}
                validate={jsonDataFieldValidator}
                render={(fieldRenderProps) => {
                  let { input, meta } = fieldRenderProps;
                  let isValid = {};
                  if (meta.error && meta.touched) {
                    isValid["error"] = true;
                    isValid["helperText"] = meta.error;
                  }
                  return (
                    <FormControl className="jsonData" error={isValid.error}>
                      <label>Enter Data Json</label>
                      <textarea {...input} spellCheck={false}></textarea>
                      <FormHelperText>{isValid["helperText"]}</FormHelperText>
                    </FormControl>
                  );
                }}
              />
            </div>
          </form>
        );
      }}
    />
  );
};

export default ConfigureJson;
