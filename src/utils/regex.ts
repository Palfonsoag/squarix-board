export const EMAIL_REGEX: string =
  '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\0-9]+\\.)+[a-zA-Z]{2,}))$';

export const PASSWORD_REGEX: string =
  "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[.,/*#-])[A-Za-z-0-9$*$/$.,/*#-]{8,8}$";
export const ONLY_NUMBER_REGEX: string = "^[0-9]+$";

export const ONLY_LETTER_REGEX: string = "^[a-zA-Z]+$";

export const ONLY_LETTER_ACCENT_REGEX: string = "^[a-zA-ZñáéíóúÁÉÍÓÚ ]*$";

export const BLANKS_REGEX: string = "\\s";
