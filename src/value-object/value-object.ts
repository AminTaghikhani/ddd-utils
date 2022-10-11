import * as lodash from 'lodash';

export abstract class ValueObject {
  toEqual(other: ValueObject): boolean {
    return lodash.isEqual(this, other);
  }
}
