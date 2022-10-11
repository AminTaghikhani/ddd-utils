import { GenericValueObject } from './generic-value-object';
import { IComparable } from '../utils';

export class NumberValueObject
  extends GenericValueObject<number>
  implements IComparable<NumberValueObject>
{
  protected MAX = Number.MAX_VALUE;
  protected MIN = Number.MIN_VALUE;

  protected constructor(value: number) {
    super(value);
  }

  compareTo(other: NumberValueObject): number {
    return this.value - other.value;
  }

  resetToZero(): void {
    this._value = 0;
  }

  increase(step = 1): void {
    if (typeof step === 'undefined') step = 1;
    if (this.value + step >= this.MAX) throw new Error('Cannot increase value');
    this._value += step;
  }

  decrease(step = 1): void {
    if (typeof step === 'undefined') step = 1;
    if (this.value - step <= this.MIN) throw new Error('Cannot decrease value');
    this._value -= step;
  }

  public static create(value: number): NumberValueObject {
    return new NumberValueObject(value);
  }
}
