export abstract class ValueObject {
  abstract toEqual(other: ValueObject): boolean;
}
