export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: "Required Field",
  NUMBER_FIELD: "Please Enter a Number",
};

export const isRequired = (value) => {
  if (Array.isArray(value))
    return value.length === 0 ? VALIDATION_MESSAGES.REQUIRED_FIELD : undefined;
  return value ? undefined : VALIDATION_MESSAGES.REQUIRED_FIELD;
};

export const isNumber = (value) =>
  isNaN(value) ? VALIDATION_MESSAGES.NUMBER_FIELD : undefined;

export const combineValidators =
  (...validators) =>
  (fieldValue) =>
    validators.reduce(
      (error, validator) => error || validator(fieldValue),
      undefined
    );
