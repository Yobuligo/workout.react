import { IRoute } from "./IRoute";
import { RouteParams } from "./RouteParams";

export interface IParamRoute<TPath extends string> extends IRoute<TPath> {
  toPath<TRouteParams extends RouteParams<TPath>>(params: TRouteParams): string;
}
