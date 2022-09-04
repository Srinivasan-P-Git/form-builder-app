import { isNumber, isRequired, VALIDATION_MESSAGES } from "./validations.utils";

describe("validation utils", () => {
  test("isNumber returns undefined for valid number", () => {
    expect(isNumber(1)).toBeUndefined();
    expect(isNumber("22")).toBeUndefined();
    expect(isNumber("abc")).not.toBeUndefined();
    expect(isNumber("123a")).not.toBeUndefined();
    expect(isNumber("123a")).toBe(VALIDATION_MESSAGES.NUMBER_FIELD);
  });

  test("isRequired checks for required field", () => {
    expect(isRequired("12")).toBeUndefined();
    expect(isRequired(100)).toBeUndefined();
    expect(isRequired(null)).not.toBeUndefined();
    expect(isRequired([])).toBe(VALIDATION_MESSAGES.REQUIRED_FIELD);
    expect(isRequired(true)).not.toBe(VALIDATION_MESSAGES.REQUIRED_FIELD);
  });
});
