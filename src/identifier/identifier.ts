export abstract class Identifier<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  abstract toString(): string;

  toEqual(other: Identifier<T>): boolean {
    if (
      this === null ||
      other === null ||
      typeof this !== 'object' ||
      typeof other !== 'object'
    ) {
      return false;
    }
    return this.toString() === this.toString();
  }
}
