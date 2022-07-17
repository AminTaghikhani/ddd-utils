export interface IPagination {
  page: number;
  size: number;
}

export interface PaginationInfo {
  page: number;
  size: number;
  totalPage: number;
  totalCount: number;
}

export function getPaginationInfo(
  page: number,
  size: number,
  totalCount: number,
) {
  return {
    page: page,
    size: size,
    totalPage: Math.max(totalCount / size, 1),
    totalCount: totalCount,
  };
}
