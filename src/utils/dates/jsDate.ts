import { BaseDate } from './base';

export class JsDate extends BaseDate {
  private readonly value: Date;

  constructor(date?: Date) {
    super();
    this.value = date || new Date();
  }

  getValue(): Date {
    return this.value;
  }

  toDate(): Date {
    return this.value;
  }

  static fromDate(date: Date): JsDate {
    return new JsDate(date);
  }

  toISO(): string {
    return this.value.toISOString();
  }

  static fromISO(date: string): JsDate {
    return new JsDate(new Date(date));
  }

  toUTC(): string {
    return this.value.toUTCString();
  }

  static fromUTC(date: string): JsDate {
    return new JsDate(new Date(date));
  }

  toUNIX(): number {
    return Math.floor(this.value.getTime() / 1000);
  }

  static fromUNIX(date: number): JsDate {
    return new JsDate(new Date(date * 1000));
  }
}
