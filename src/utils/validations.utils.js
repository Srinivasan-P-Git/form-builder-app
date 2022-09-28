export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: "Required Field",
  NUMBER_FIELD: "Please Enter a Number",
  JSON_FIELD: "Please Enter a Valid JSON",
  ARRAY_FIELD: "Please Enter an Array",
};

export const isRequired = (value) => {
  if (Array.isArray(value))
    return value.length === 0 ? VALIDATION_MESSAGES.REQUIRED_FIELD : undefined;
  return value ? undefined : VALIDATION_MESSAGES.REQUIRED_FIELD;
};

export const isNumber = (value) =>
  isNaN(value) ? VALIDATION_MESSAGES.NUMBER_FIELD : undefined;

export const isValidJSON = (value) => {
  try {
    JSON.parse(value);
    return undefined;
  } catch (e) {
    return VALIDATION_MESSAGES.JSON_FIELD;
  }
};

export const isArray = (value) => {
  return Array.isArray(JSON.parse(value))
    ? undefined
    : VALIDATION_MESSAGES.ARRAY_FIELD;
};

export const combineValidators =
  (...validators) =>
  (fieldValue) =>
    validators.reduce(
      (error, validator) => error || validator(fieldValue),
      undefined
    );
