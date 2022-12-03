export interface IPaginate {
  order?: 'asc' | 'desc';
  filter?: string;
  page?: number;
  take?: number;
}

export interface IPaginateResult<T> {
  readonly data: T[];

  readonly meta: {
    readonly page: number;

    readonly take: number;

    readonly itemCount: number;

    readonly pageCount: number;

    readonly hasPreviousPage: boolean;

    readonly hasNextPage: boolean;
  };
}
