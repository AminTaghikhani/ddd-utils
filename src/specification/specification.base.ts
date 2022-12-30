export interface ISpecification<Candidate> {
  isSatisfiedBy(candidate: Candidate): boolean;
  and(other: ISpecification<Candidate>): ISpecification<Candidate>;
  or(other: ISpecification<Candidate>): ISpecification<Candidate>;
  andNot(other: ISpecification<Candidate>): ISpecification<Candidate>;
  orNot(other: ISpecification<Candidate>): ISpecification<Candidate>;
  not(): ISpecification<Candidate>;
}

export abstract class Composite<Candidate>
  implements ISpecification<Candidate>
{
  abstract isSatisfiedBy(candidate: Candidate): boolean;

  and(other: ISpecification<Candidate>): ISpecification<Candidate> {
    return new AndSpecification<Candidate>(this, other);
  }
  or(other: ISpecification<Candidate>): ISpecification<Candidate> {
    return new OrSpecification<Candidate>(this, other);
  }
  andNot(other: ISpecification<Candidate>): ISpecification<Candidate> {
    return new AndNotSpecification<Candidate>(this, other);
  }
  orNot(other: ISpecification<Candidate>): ISpecification<Candidate> {
    return new OrNotSpecification<Candidate>(this, other);
  }
  not(): ISpecification<Candidate> {
    return new NotSpecification<Candidate>(this);
  }
}

export class AndSpecification<Candidate> extends Composite<Candidate> {
  constructor(
    protected left: ISpecification<Candidate>,
    protected right: ISpecification<Candidate>,
  ) {
    super();
  }

  isSatisfiedBy(candidate: Candidate): boolean {
    return (
      this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate)
    );
  }
}

export class OrSpecification<Candidate> extends Composite<Candidate> {
  constructor(
    protected left: ISpecification<Candidate>,
    protected right: ISpecification<Candidate>,
  ) {
    super();
  }

  isSatisfiedBy(candidate: Candidate): boolean {
    return (
      this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate)
    );
  }
}

export class AndNotSpecification<Candidate> extends Composite<Candidate> {
  constructor(
    protected left: ISpecification<Candidate>,
    protected right: ISpecification<Candidate>,
  ) {
    super();
  }

  isSatisfiedBy(candidate: Candidate): boolean {
    return (
      this.left.isSatisfiedBy(candidate) && !this.right.isSatisfiedBy(candidate)
    );
  }
}

export class OrNotSpecification<Candidate> extends Composite<Candidate> {
  constructor(
    protected left: ISpecification<Candidate>,
    protected right: ISpecification<Candidate>,
  ) {
    super();
  }

  isSatisfiedBy(candidate: Candidate): boolean {
    return (
      this.left.isSatisfiedBy(candidate) || !this.right.isSatisfiedBy(candidate)
    );
  }
}

export class NotSpecification<Candidate> extends Composite<Candidate> {
  constructor(protected other: ISpecification<Candidate>) {
    super();
  }

  isSatisfiedBy(candidate: Candidate): boolean {
    return !this.other.isSatisfiedBy(candidate);
  }
}

