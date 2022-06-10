import { UUIDIdentifier } from '../identifier';
import { BaseDate, IEqualable, JsDate } from '../utils';
import * as lodash from 'lodash';

export abstract class DomainEntity<PropertyInterface>
  implements IEqualable<DomainEntity<PropertyInterface>>
{
  protected readonly _id: UUIDIdentifier;
  protected readonly _createdAt: BaseDate;
  protected readonly _updatedAt: BaseDate;
  protected _props: PropertyInterface;

  protected constructor(
    props: PropertyInterface,
    id?: UUIDIdentifier,
    createdAt?: BaseDate,
    updatedAt?: BaseDate,
  ) {
    this._props = props;
    this._id = id || new UUIDIdentifier();
    this._createdAt = createdAt || new JsDate();
    this._updatedAt = updatedAt || new JsDate();
  }

  get id(): UUIDIdentifier {
    return this._id;
  }

  toEqual(other: DomainEntity<PropertyInterface>): boolean {
    return lodash.isEqual(this, other);
  }
}
