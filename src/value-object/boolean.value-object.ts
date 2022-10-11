import { GenericValueObject } from './generic-value-object';

export class BooleanValueObject extends GenericValueObject<boolean> {
  protected constructor(value: boolean) {
    super(value);
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

  public static create(value: boolean): BooleanValueObject {
    return new BooleanValueObject(value);
  }

  public static createTruthy(): BooleanValueObject {
    return new BooleanValueObject(true);
  }

  public static createFalsy(): BooleanValueObject {
    return new BooleanValueObject(false);
  }

  toEqual(other: BooleanValueObject): boolean {
    return this.value === other.value;
  }
}
