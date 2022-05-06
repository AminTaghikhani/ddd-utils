import * as lodash from 'lodash';
import { IEqualable, isNull, Nullable } from '../utils';

interface IMaybe<T> {
  get hasValue(): boolean;

  get hasNoValue(): boolean;

  get value(): Nullable<T>;
}

export class Maybe<T> implements IMaybe<T>, IEqualable<Maybe<T>> {
  private readonly _value: Nullable<T>;
  private readonly _hasValue: boolean;

  private constructor(value: Nullable<T>) {
    if (isNull(value)) {
      this._value = null;
      this._hasValue = false;
    }
    this._value = value;
    this._hasValue = true;
  }

  get hasNoValue(): boolean {
    return !this.hasValue;
  }

  get hasValue(): boolean {
    return this._hasValue;
  }

  get value(): Nullable<T> {
    return this._value;
  }

  getValueOrDefault(defaultValue: T): T {
    if (this.hasNoValue) {
      return defaultValue;
    }
    return this._value as T;
  }

  getValueOrThrow(message: string): T {
    if (this.hasNoValue) {
      throw new Error(message);
    }
    return this._value as T;
  }

  toEqual(other: Maybe<T>): boolean {
    return lodash.isEqual(this, other);
  }

  public static from<T>(value: Nullable<T>): Maybe<T> {
    return new Maybe<T>(value);
  }
}
