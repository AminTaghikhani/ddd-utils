export interface IEqualable<T> {
  toEqual(other: T): boolean;
}
