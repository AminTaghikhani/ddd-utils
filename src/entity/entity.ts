import { UUIDIdentifier } from '../identifier';
import { IEqualable } from '../utils';
import * as lodash from 'lodash';

export abstract class DomainEntity<PropertyInterface>
  implements IEqualable<DomainEntity<PropertyInterface>>
{
  protected readonly _id: UUIDIdentifier;
  protected readonly _createdAt: Date;
  protected readonly _updatedAt: Date;
  protected _props: PropertyInterface;

  protected constructor(
    props: PropertyInterface,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this._props = props;
    this._id = new UUIDIdentifier(id);
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }

  get id(): UUIDIdentifier {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  toEqual(other: DomainEntity<PropertyInterface>): boolean {
    return lodash.isEqual(this, other);
  }
}
