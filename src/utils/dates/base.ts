export interface IBaseDate {
  toDate(): Date;
  toISO(): string;
  toUTC(): string;
  toUNIX(): number;
}

export abstract class BaseDate implements IBaseDate {
  abstract toDate(): Date;
  abstract toISO(): string;
  abstract toUTC(): string;
  abstract toUNIX(): number;
}
