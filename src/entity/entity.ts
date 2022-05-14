import { UUIDIdentifier } from '../identifier';
import { IEqualable } from '../utils';
import * as lodash from 'lodash';

export abstract class Entity implements IEqualable<Entity> {
  protected readonly _id: UUIDIdentifier;

  protected constructor(id: UUIDIdentifier) {
    this._id = id;
  }

  get id(): UUIDIdentifier {
    return this._id;
  }

  toEqual(other: Entity): boolean {
    return lodash.isEqual(this, other);
  }
}
