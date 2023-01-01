import { ValueObject } from './value-object';

export abstract class GenericValueObject<T> extends ValueObject {
  protected _value: T;

  protected constructor(value: unknown) {
    super();
    this._value = this.parseValue(value);
    this.validate();
  }

  protected abstract parseValue(value: unknown): T;
  protected validate(): void {
    // do nothing
  }

  get value(): T {
    return this._value;
  }
}
