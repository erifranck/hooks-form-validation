export interface FormError {
  shake: boolean;
  hasError: boolean;
  message?: string;
}

export type Validator = (value: string) => FormError;

export interface ValidatorObject<t> {
  [key: string]: {
    validator: Validator;
    type: string;
    value: t;
  };
}

export interface FieldValidation<t> {
  name: string;
  value: t;
  error: FormError;
  onChange?: (value: t) => void;
}

export interface FormValidator {
  hasError: boolean;
  fields: FieldValidation<(string | boolean | number)>[];
}