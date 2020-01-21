import {FormError} from '../types';
export const emailValidator = (message?: string) => (value: string): FormError => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return {
       hasError: true,
       shake: false,
       message: message || 'inserte un formato adecuado',
    }
  }
  return {
     hasError: false,
     shake: false,
  }
}
