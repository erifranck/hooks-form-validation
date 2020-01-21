import {FormError, Validator} from '../types';
export function maxLength(maxValue: number, message?: string) : Validator {
  return (value: string): FormError => {
    if (value.length > maxValue) {
      return {
        hasError: true,
        shake: true,
        message: message || 'max value',
      }
    }
    return {
      hasError: false,
      shake: false
    }
  }
}

export function minLength(minValue: number, message?: string) : Validator {
  return (value: string): FormError => {
    if (value.length < minValue) {
      return {
        hasError: true,
        shake: false,
        message: message || 'max value',
      }
    }
    return {
      hasError: false,
      shake: false
    }
  }
}
