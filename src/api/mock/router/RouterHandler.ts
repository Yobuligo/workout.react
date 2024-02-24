export type RouteHandler<TResult, TData = undefined> = (
  data?: TData
) => TResult;
