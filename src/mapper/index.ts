import { Nullable, Optional } from '../utils';

export interface IMapper<Domain, Orm, Dto> {
  fromDTO?(model: Optional<Dto>): Nullable<Domain>;

  toDTO?(model: Optional<Domain>): Nullable<Dto>;

  fromORM?(model: Optional<Orm>): Nullable<Domain>;

  toORM?(model: Optional<Domain>): Nullable<Orm>;
}
