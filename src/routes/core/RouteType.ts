import { IParamRoute } from "./IParamRoute";
import { IStaticRoute } from "./IStaticRoute";

export type RouteType<TPath extends string> =
  // eslint-disable-next-line
  TPath extends `${infer _TPrefix}:${infer _TParam}`
    ? IParamRoute<TPath>
    : IStaticRoute<TPath>;
