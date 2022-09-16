export interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalPage: number;
  totalCount: number;
}

export class Pagination {
  public readonly currentPage: number;
  public readonly pageSize: number;
  public readonly totalPage: number;
  public readonly totalCount: number;

  constructor(options: PaginationInfo) {
    this.currentPage = options.currentPage;
    this.pageSize = options.pageSize;
    this.totalPage = options.totalPage;
    this.totalCount = options.totalCount;
  }
}
