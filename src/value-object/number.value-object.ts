import { GenericValueObject } from './generic-value-object';
import { IComparable } from '../utils';

export class NumberValueObject
  extends GenericValueObject<number>
  implements IComparable<NumberValueObject>
{
  protected MAX = Number.MAX_VALUE;
  protected MIN = Number.MIN_VALUE;

  constructor(value: unknown) {
    super(value);
  }

  protected parseValue(value: unknown): number {
    if (typeof value === 'number') {
      return value;
    }
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }
    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    }
    if (Array.isArray(value)) {
      return parseInt(value.join(''), 10);
    }
    throw new TypeError('invalid value for number value object');
  }

  protected validate(): void {
    if (this.MAX >= this.value && this.value >= this.MIN) {
      throw new TypeError('invalid value for number value object');
    }
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
}
