import { RouteConfig } from "./RouteConfig";

export const configure = <TRouteConfig extends RouteConfig>(
  config: TRouteConfig
): TRouteConfig => {
  return config;
};
