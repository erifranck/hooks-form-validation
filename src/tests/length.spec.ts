import {maxLength, minLength} from '../validators/length';
import {FormError} from '../types';

describe('validate max length functionality', () => {
  it('if the number of characters is highter than the value defined should return an error', () => {
    const greeting = "hello";
    const error = "the number of characters has been exceded";
    const formError: FormError = {
      hasError: true,
      shake: true,
      message: error

    }
    expect(maxLength(3, error)(greeting)).toEqual(formError);
  })
  it('if the number of characters if less than the value defined should not rerturn any error', () => {
    const greeting = "hi";
    const formError: FormError = {
      hasError: false,
      shake: false,
    }
    expect(maxLength(3)(greeting)).toEqual(formError);
  })
})

describe('validate min length functionality', () => {
  it('if the number of characters is less than the value defined should return an error', () => {
    const greeting = "hi";
    const error = "the number of characters should be 3";
    const formError: FormError = {
      hasError: true,
      shake: false,
      message: error

    }
    expect(minLength(3, error)(greeting)).toEqual(formError);
  })
  it('if the number of characters if highter than the value defined should not rerturn any error', () => {
    const greeting = "hello";
    const formError: FormError = {
      hasError: false,
      shake: false,
    }
    expect(minLength(3)(greeting)).toEqual(formError);
  })
})
