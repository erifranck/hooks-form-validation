import React, {useState, useEffect} from 'react';
import {composeValidator, findFirstTrue} from './generator';
import {Validator, FormError, ValidatorObject, FormValidator, FieldValidation} from '../types';


export function useForm(validatorObject: ValidatorObject<any>): FormValidator {
  const [state, setState] = useState<FormValidator | undefined>(undefined);
  useEffect(() => {
    const fieldValidators: FieldValidation<(string | boolean | number)>[] = Object.keys(validatorObject).map((key) => {
      const defaultValue = validatorObject[key].value;
      const validator = validatorObject[key].validator;
      return {
        name: key,
        value: defaultValue,
        error: validator(defaultValue),
      }
    });
    setState({
      ...state,
      hasError: findFirstTrue(fieldValidators.map(field => field.error.hasError)),
      fields: fieldValidators
    })
  })
  const fieldValidators: FieldValidation<(string | boolean | number)>[] = Object.keys(validatorObject).map((key, index) => {
    const defaultValue = validatorObject[key].value;
    const validator = validatorObject[key].validator;
    return {
      name: key,
      value: defaultValue,
      error: validator(defaultValue),
      onChange: (value: any)  => {
        const validation = validatorObject[key].validator(value);
        setState({
          ...state,
          fields: state.fields.slice(0, index).concat([
            {
              ...state.fields[key],
              value,
              error: validation,
            }
          ], state.fields.slice(index + 1))
        })
      } 
    }
  })
  return {
    ...state,
    fields: fieldValidators,
  };
}
