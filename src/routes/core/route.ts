import { RouteType } from "./RouteType";

export const route = <TPath extends string>(path: TPath): RouteType<TPath> => {
  throw new Error();
};
