import { Action } from 'src/utils';

export interface IIterator<Type> {
  hasNext(): boolean;

  getNext(): Type;
}

export interface IIteratorAggregator<Type> {
  getIterator(): IIterator<Type>;

  forEach?(action: Action<Type>): void;
}
