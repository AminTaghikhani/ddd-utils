import { UUIDIdentifier } from '../identifier';
import { IEqualable } from '../utils';
import * as lodash from 'lodash';

export abstract class DomainEntity implements IEqualable<DomainEntity> {
  protected readonly _id: UUIDIdentifier;

  protected constructor(id: UUIDIdentifier) {
    this._id = id;
  }

  get id(): UUIDIdentifier {
    return this._id;
  }

  toEqual(other: DomainEntity): boolean {
    return lodash.isEqual(this, other);
  }
}
