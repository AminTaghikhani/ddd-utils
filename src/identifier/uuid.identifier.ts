import { Identifier } from './identifier';
import uuid from 'uuid';
import { Nullable } from '../utils';

export class UUIDIdentifier extends Identifier<string> {
  constructor(value: Nullable<string>) {
    super(value || uuid.v4());
  }

  toString(): string {
    return this._value;
  }
}
