import { Identifier } from './identifier';
import * as uuid from 'uuid';

export class UUIDIdentifier extends Identifier<string> {
  constructor(value?: string) {
    super(value || uuid.v4());
  }

  toString(): string {
    return this._value;
  }
}
