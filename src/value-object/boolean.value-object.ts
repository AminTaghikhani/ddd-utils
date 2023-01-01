import { GenericValueObject } from './generic-value-object';
import { IComparable } from '../utils';

export class BooleanValueObject
  extends GenericValueObject<boolean>
  implements IComparable<BooleanValueObject>
{
  constructor(value: boolean | unknown) {
    super(value);
  }

  protected parseValue(value: unknown): boolean {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    if (typeof value === 'number') {
      return value !== 0;
    }
    throw new TypeError('invalid value for boolean value object');
  }

  compareTo(other: BooleanValueObject): number {
    if ((this.value && other.value) || (!this.value && !other.value)) return 0;
    if (this.value) {
      return -1;
    }
    return 1;
  }

  toggle(): void {
    this._value = !this._value;
  }

  public static createTruthy(): BooleanValueObject {
    return new BooleanValueObject(true);
  }

  public static createFalsy(): BooleanValueObject {
    return new BooleanValueObject(false);
  }
}
