import { GenericValueObject } from './generic-value-object';
import { IComparable } from '../utils';

export class BooleanValueObject
  extends GenericValueObject<boolean>
  implements IComparable<BooleanValueObject>
{
  protected constructor(value: boolean) {
    super(value);
  }

  compareTo(other: BooleanValueObject): number {
    if ((this.value && other.value) || (!this.value && !other.value)) return 0;
    if (this.value) {
      return 1;
    }
    return -1;
  }

  toggle(): void {
    this._value = !this._value;
  }

  public static create(value: boolean): BooleanValueObject {
    return new BooleanValueObject(value);
  }
}
