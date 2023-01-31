import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import { isRequired, isNumber, combineValidators } from './validations.utils';

const generateFieldValidators = (formField) => {
  let fieldValidators = [];
  let { type, required } = formField;

  if (required) fieldValidators.push(isRequired);

  switch (type) {
    case 'number':
      fieldValidators.push(isNumber);
      break;
    default:
      break;
  }

  return combineValidators(...fieldValidators);
};

const getTextField = ({ id, name, validate }) => {
  return (
    <Field
      key={id}
      name={id}
      validate={validate}
      render={(fieldRenderProps) => {
        let { input, meta } = fieldRenderProps;
        let isValid = {};
        if (meta.error && meta.touched) {
          isValid['error'] = true;
          isValid['helperText'] = meta.error;
        }
        return (
          <TextField
            fullWidth
            {...isValid}
            {...input}
            label={name}
            size="small"
            margin="dense"
            variant={'standard'}
          />
        );
      }}
    />
  );
};

const getSelectField = ({ id, name, validate, options }) => {
  return (
    <Field
      key={id}
      name={id}
      validate={validate}
      render={(fieldRenderProps) => {
        let { input, meta } = fieldRenderProps;
        let isValid = {};
        if (meta.error && meta.touched) {
          isValid['error'] = true;
          isValid['helperText'] = meta.error;
        }
        return (
          <FormControl
            variant={'standard'}
            error={isValid.error}
            fullWidth
            margin="dense"
          >
            <InputLabel>{name}</InputLabel>
            <Select {...input}>
              {options.map((option, idx) => (
                <MenuItem key={idx} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{isValid['helperText']}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

const getCheckboxField = ({ id, name, validate, options }) => {
  return (
    <FieldArray
      key={id}
      validate={validate}
      name={id}
      options={options}
      render={({ fields, options, meta }) => {
        const onChangeHandler = (e, option) => {
          if (e.target.checked) fields.push(option);
          else {
            let idx = fields.value?.indexOf(option);
            if (idx >= 0) fields.remove(idx);
          }
        };
        let isValid = {};
        if (meta.error && meta.touched) {
          isValid['error'] = true;
          isValid['helperText'] = meta.error;
        }
        return (
          <FormControl
            error={isValid.error}
            variant={'standard'}
            fullWidth
            margin="dense"
          >
            <FormLabel component="legend">{name}</FormLabel>
            <FormGroup row>
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      value={option}
                      onChange={(event) => onChangeHandler(event, option)}
                      checked={
                        fields.value && fields.value.indexOf(option) !== -1
                          ? true
                          : false
                      }
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
            <FormHelperText>{isValid['helperText']}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export const generateFormFields = (formFields) => {
  return formFields.reduce((result, formField) => {
    let { id, name, type } = formField;
    let validate = generateFieldValidators(formField);
    let element;

    switch (type) {
      case 'text':
      case 'number': {
        element = getTextField({ id, name, validate });
        break;
      }
      case 'select': {
        let { options } = formField;
        element = getSelectField({ id, name, validate, options });
        break;
      }
      case 'checkbox': {
        let { options } = formField;
        element = getCheckboxField({ id, name, validate, options });
        break;
      }
      default:
        break;
    }

    if (element) result.push(element);
    return result;
  }, []);
};
