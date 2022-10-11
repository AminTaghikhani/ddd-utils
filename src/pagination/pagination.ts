import { PaginationInfo } from './info';

export class Pagination<ItemType> {
  public readonly items: ItemType[];
  public readonly page: number;
  public readonly size: number;
  public readonly totalPage: number;
  public readonly totalCount: number;

  constructor(items: ItemType[], options: Omit<PaginationInfo, 'totalPage'>) {
    this.items = items;
    this.page = options.page;
    this.size = options.size;
    this.totalPage = Math.ceil((options.totalCount || 1) / (options.size || 1));
    this.totalCount = options.totalCount;
  }
}
