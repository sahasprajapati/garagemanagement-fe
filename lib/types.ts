export interface IPaginate {
  order?: 'asc' | 'desc';
  filter?: string;
  page?: number;
  take?: number;
}
