import { Composite } from './specification.base';

export class BetweenSpecification extends Composite<number> {
  constructor(protected min: number, protected max: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return this.min <= candidate && candidate <= this.max;
  }
}

export class MinLengthSpecification<
  Candidate extends string | Array<unknown>,
> extends Composite<Candidate> {
  constructor(protected min: number) {
    super();
  }

  isSatisfiedBy(candidate: Candidate): boolean {
    return this.min <= candidate.length;
  }
}

export class GreaterThanSpecification extends Composite<number> {
  constructor(protected min: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return this.min < candidate;
  }
}

export class GreaterThanEqualSpecification extends Composite<number> {
  constructor(protected min: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return this.min <= candidate;
  }
}

export class LessThanSpecification extends Composite<number> {
  constructor(protected max: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return this.max > candidate;
  }
}

export class LessThanEqualSpecification extends Composite<number> {
  constructor(protected max: number) {
    super();
  }

  isSatisfiedBy(candidate: number): boolean {
    return this.max >= candidate;
  }
}
