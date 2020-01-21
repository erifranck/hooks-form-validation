import {emailValidator} from '../validators/email';
import {FormError} from '../types';

describe('email validator functionality', () => {
  it('when the email has an error format return the message in the params', () => {
    const email = 'erifranck @gmail.com'
    const errorMessage = 'error de formato'
    const formError: FormError = {
      hasError: true,
      shake: false,
      message: errorMessage
    }
    expect(emailValidator(errorMessage)(email)).toEqual(formError);
  })
  it('when the email has an error format return a generic message ', () => {
    const email = 'erifranck @gmail.com'
    const formError: FormError = {
      hasError: true,
      shake: false,
      message: 'inserte un formato adecuado'
    }
    expect(emailValidator()(email)).toEqual(formError);
  })
  it('when the email has a right format', () => {
    const email = 'erifranck@gmail.com'
    const formError: FormError = {
      hasError: false,
      shake: false
    }
    expect(emailValidator()(email)).toEqual(formError);
  })
});
