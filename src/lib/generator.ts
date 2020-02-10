import {Validator, FormError} from '../types';

export function composeValidator(validators: Validator[]) : Validator{
  return (value: string): FormError => {
    for (var i = 0, len = validators.length; i < len; i++) {
      const error = validators[i](value);
      if(error.hasError) {
        return error;
      }
    }
    return null;
  }
}

export function findFirstTrue(errors: boolean[] ) : boolean {
  for (var i = 0, len = errors.length; i < len; i++) {
    const error = errors[i];
    if(error) {
      return error;
    }
  }
  return false;
}