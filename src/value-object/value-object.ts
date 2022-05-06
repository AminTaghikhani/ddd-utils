import * as lodash from 'lodash';
import { IEqualable } from '../utils';

export abstract class ValueObject implements IEqualable<ValueObject> {
  toEqual(other: ValueObject): boolean {
    return lodash.isEqual(this, other);
  }
}
