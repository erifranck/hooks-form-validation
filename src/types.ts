export interface FormError {
  shake: boolean;
  hasError: boolean;
  message?: string;
}

export type Validator = (value: string) => FormError;
