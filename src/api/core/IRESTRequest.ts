export interface IRESTRequest<TParams = undefined, TData = undefined> {
  data?: TData;
  params?: TParams;
}
