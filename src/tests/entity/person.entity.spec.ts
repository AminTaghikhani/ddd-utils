import { BaseDate } from '../../utils';
import { UUIDIdentifier } from '../../identifier';
import { DomainEntity } from '../../entity';

interface PersonDomainProps {
  firstName: string;
  lastName: string;
}

export class PersonDomain extends DomainEntity<PersonDomainProps> {
  private constructor(
    props: PersonDomainProps,
    id?: UUIDIdentifier,
    createdAt?: BaseDate,
    updatedAt?: BaseDate,
  ) {
    super(props, id, createdAt, updatedAt);
  }

  public static create(
    props: PersonDomainProps,
    id?: UUIDIdentifier,
    createdAt?: BaseDate,
    updatedAt?: BaseDate,
  ): PersonDomain {
    return new PersonDomain(props, id, createdAt, updatedAt);
  }

  get firstName(): string {
    return this._props.firstName;
  }

  get lastName(): string {
    return this._props.lastName;
  }
}

describe('Person domain entity test suite', function () {
  it('should create a value object', function () {
    const obj = PersonDomain.create({
      firstName: 'Amin',
      lastName: 'Taghikhani',
    });
    expect(obj).toBeDefined();
  });
});
