import {
  ONLY_LETTER_ACCENT_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  ONLY_NUMBER_REGEX,
  BLANKS_REGEX,
} from "./regex";

export const validateNames = (value: string) => {
  let nameTest = new RegExp(ONLY_LETTER_ACCENT_REGEX);
  return nameTest.test(value);
};

export const validatePassword = (value: string) => {
  let passwordTest = new RegExp(PASSWORD_REGEX);
  return passwordTest.test(value);
};

export const validateEmail = (value: string) => {
  let emailTest = new RegExp(EMAIL_REGEX);
  return emailTest.test(value);
};

export const validateNumber = (value: string) => {
  let numberTest = new RegExp(ONLY_NUMBER_REGEX);
  return numberTest.test(value);
};

export const validateAlphanumeric = (value: string) => {
  return value.match(/[a-zA-Z]/gi);
};

export const validateNumeric = (value: string) => {
  return value.match(/[0-9]/gi);
};

export const validateCharacterSpecial = (value: string) => {
  return value.match(/[.,\/*#-]/gi);
};

export const validateBlanks = (value: string) => {
  let blanksTest = new RegExp(BLANKS_REGEX);
  return blanksTest.test(value);
};
