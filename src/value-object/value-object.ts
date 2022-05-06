import * as lodash from 'lodash';
import { IEqualable } from '../utils';

export abstract class ValueObject<T> implements IEqualable<ValueObject<T>> {
  protected _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  toEqual(other: ValueObject<T>): boolean {
    return lodash.isEqual(this, other);
  }
}
