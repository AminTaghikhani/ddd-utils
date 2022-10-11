import { GenericValueObject } from './generic-value-object';

export class PhoneNumberValueObject extends GenericValueObject<string> {
  private static MAX_LENGTH = 11;
  private static MIN_LENGTH = 11;

  protected constructor(phoneNumber: string) {
    super(phoneNumber);
  }

  public static create(phoneNumber: string): PhoneNumberValueObject {
    if (phoneNumber === undefined) {
      throw new Error('PhoneNumber cannot be undefined');
    }
    if (
      phoneNumber.length > PhoneNumberValueObject.MAX_LENGTH ||
      phoneNumber.length < PhoneNumberValueObject.MIN_LENGTH
    ) {
      throw new Error(
        `PhoneNumber length is not valid ${phoneNumber.length} (${PhoneNumberValueObject.MIN_LENGTH},${PhoneNumberValueObject.MAX_LENGTH})`,
      );
    }
    return new PhoneNumberValueObject(phoneNumber);
  }

  toEqual(other: PhoneNumberValueObject): boolean {
    return this.value === other.value;
  }
}
