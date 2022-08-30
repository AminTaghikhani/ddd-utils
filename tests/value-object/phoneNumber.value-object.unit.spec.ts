import { PhoneNumberValueObject } from '../../src/value-object';

describe('phoneNumber value object', function () {
  it('should create a value object', function () {
    const obj = PhoneNumberValueObject.create('09359395520');
    expect(obj).toBeDefined();
  });

  it('should throw exception for undefined value', function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => PhoneNumberValueObject.create(undefined)).toThrowError(
      'PhoneNumber cannot be undefined',
    );
  });

  it('should throw exception for un acceptable value', function () {
    expect(() => PhoneNumberValueObject.create('0935')).toThrowError(
      'PhoneNumber length is not valid 4 (11,11)',
    );
    expect(() => PhoneNumberValueObject.create('093593955201')).toThrowError(
      'PhoneNumber length is not valid 12 (11,11)',
    );
  });
});
