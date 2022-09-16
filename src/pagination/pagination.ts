import { PaginationInfo } from './info';

export class Pagination<ItemType> {
  public readonly items: ItemType[];
  public readonly currentPage: number;
  public readonly pageSize: number;
  public readonly totalPage: number;
  public readonly totalCount: number;

  constructor(items: ItemType[], options: PaginationInfo) {
    this.items = items;
    this.currentPage = options.currentPage;
    this.pageSize = options.pageSize;
    this.totalPage = options.totalPage;
    this.totalCount = options.totalCount;
  }
}
