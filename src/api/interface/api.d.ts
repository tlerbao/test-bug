declare namespace API {
  type ResultData<T = any> = {
    code: string;
    message: string;
    data: T;
  };
  namespace Common {
    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      current: number;
      /** page size */
      limit: number;
      /** total count */
      count: number;
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T extends NonNullable<unknown>> extends PaginatingCommonParams {
      list: T[];
    }
    /** common search params */
    type CommonSearchParams = Pick<PaginatingCommonParams, "limit"> & { page: number };
    /** common record */
    type CommonRecord<T extends NonNullable<unknown>> = {
      id: number;
      creator_id: number;
      created_at: string;
      updated_at: string;
      deleted_at: string;
    } & T;
  }
}
