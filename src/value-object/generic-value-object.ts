import { ValueObject } from './value-object';

export abstract class GenericValueObject<T> extends ValueObject {
  protected _value: T;

  protected constructor(value: T) {
    super();
    this._value = value;
  }

  get value(): T {
    return this._value;
  }
}
