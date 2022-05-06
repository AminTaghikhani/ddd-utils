import { Identifier } from './identifier';

export class NumericIdentifier extends Identifier<number> {
  constructor(value: number) {
    super(value);
  }

  toString(): string {
    return this._value.toString();
  }
}
