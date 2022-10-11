import { ResponseStatusCodes } from './status.enum';
import { Nullable } from '../utils';
import { Pagination, PaginationInfo } from '../pagination';

export class ResponseWrapper<T> {
  private readonly statusCode: ResponseStatusCodes;
  private readonly message: string;
  private readonly data: Nullable<T>;
  private readonly paginationInfo: Nullable<PaginationInfo>;

  private constructor(
    data: Nullable<T>,
    statusCode: ResponseStatusCodes,
    message: string,
    paginationInfo: Nullable<PaginationInfo>,
  ) {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.paginationInfo = paginationInfo;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      paginationInfo: this.paginationInfo,
      data: this.data,
    };
  }

  public static OK<T>({
    data,
    message = 'عملیات با موفقیت انجام شد.',
    paginationInfo = null,
  }: {
    data: T;
    message?: string;
    paginationInfo?: Nullable<PaginationInfo>;
  }) {
    return new ResponseWrapper<T>(
      data,
      ResponseStatusCodes.OK,
      message,
      paginationInfo,
    );
  }

  public static CREATED<T>({
    data,
    message = 'عملیات با موفقیت انجام شد.',
    paginationInfo = null,
  }: {
    data: T;
    message?: string;
    paginationInfo?: Nullable<PaginationInfo>;
  }) {
    return new ResponseWrapper<T>(
      data,
      ResponseStatusCodes.CREATED,
      message,
      paginationInfo,
    );
  }

  public static ACCEPTED(message: string) {
    return new ResponseWrapper<string>(
      null,
      ResponseStatusCodes.ACCEPTED,
      message,
      null,
    );
  }

  public static NO_CONTENT(message: string) {
    return new ResponseWrapper<string>(
      null,
      ResponseStatusCodes.NO_CONTENT,
      message,
      null,
    );
  }

  public static ERROR({
    statusCode,
    message,
  }: {
    statusCode: ResponseStatusCodes;
    message: string;
  }) {
    return new ResponseWrapper<string>(null, statusCode, message, null);
  }

  public static BAD_REQUEST<T>({
    data,
    message = 'خطایی رخ داده است.',
  }: {
    data: T;
    message?: string;
  }) {
    return new ResponseWrapper<T>(
      data,
      ResponseStatusCodes.BAD_REQUEST,
      message,
      null,
    );
  }

  public static NOT_FOUND(message = 'اطلاعات مورد نظر یافت نشد.') {
    return new ResponseWrapper<string>(
      null,
      ResponseStatusCodes.NOT_FOUND,
      message,
      null,
    );
  }

  public static PAGINATION<T>({
    data,
    message = 'عملیات با موفقیت انجام شد.',
  }: {
    data: Pagination<T>;
    message?: string;
  }) {
    return new ResponseWrapper<T[]>(
      data.items,
      ResponseStatusCodes.OK,
      message,
      {
        page: data.page,
        size: data.size,
        totalCount: data.totalCount,
        totalPage: data.totalPage,
      },
    );
  }
}
