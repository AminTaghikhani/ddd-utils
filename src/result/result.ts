import { Maybe } from '../maybe';

export class Result<T> {
  private readonly _isOk: boolean;

  private readonly _error: Maybe<string>;
  private readonly _value: Maybe<T>;

  private constructor(isOk: boolean, error: Maybe<string>, value: Maybe<T>) {
    if (error.hasValue && value.hasValue) {
      throw new Error('Result cannot have both value and error');
    }
    this._error = error;
    this._value = value;
    this._isOk = isOk;
  }

  get value(): T {
    if (this.isOK()) return this._value.value as T;
    throw new Error('It is a failed result check error method');
  }

  get error(): string {
    if (this.isNotOK()) return this._error.value as string;
    throw new Error('It is a success result check value method');
  }

  isOK(): boolean {
    return this._isOk;
  }

  isNotOK(): boolean {
    return !this._isOk;
  }

  public static ok<T>(value?: T): Result<T> {
    return new Result<T>(true, Maybe.None, Maybe.from(value));
  }

  public static fail(error: string): Result<any> {
    return new Result(false, Maybe.from(error), Maybe.None);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (let i = 0; i < results.length; i++) {
      if (results[i].isNotOK()) {
        return results[i];
      }
    }
    return Result.ok();
  }
}
