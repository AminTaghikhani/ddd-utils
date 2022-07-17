export interface IMapper<Domain, Orm, Dto> {
  fromDTO?(model: Dto): Domain;

  toDTO?(model: Domain): Dto;

  fromORM?(model: Orm): Domain;

  toORM?(model: Domain): Orm;
}
