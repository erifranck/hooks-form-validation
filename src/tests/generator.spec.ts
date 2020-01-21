import {composeValidator} from '../lib/generator';
import {maxLength, minLength} from  '../validators'
import {FormError} from '../types';

describe('create validator', () => {
  let validator;
  const maxLengthError = 'max length error';
  const minLengthError = 'min length error';
  beforeEach( () => {
    validator = composeValidator([
      maxLength(20, maxLengthError),
      minLength(1, minLengthError),
    ])
  })
  it('the validator is working', () => {
    expect(validator).toBeTruthy();
  });
  it('check validator response by max length error', () => {
    const name = "Erifranck Jose Nuñez Berroteran Frontend Developer at Belatrix";
    const formError: FormError = {
      hasError: true,
      shake: true,
      message: maxLengthError
    }
    expect(validator(name)).toEqual(formError);
  })
  it('check validator response by min length error', () => {
    const name = "";
    const formError: FormError = {
      hasError: true,
      shake: false,
      message: minLengthError
    }
    expect(validator(name)).toEqual(formError);
  })
});
