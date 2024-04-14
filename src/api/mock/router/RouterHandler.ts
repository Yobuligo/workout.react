import { IRESTRequest } from "./../../core/IRESTRequest";

export type RouteHandler<TResult, TParams = undefined, TData = undefined> = (
  request?: IRESTRequest<TParams, TData>
) => TResult;
