import { RouteHandler } from "./RouterHandler";

export interface IRESTRoute {
  path: string;
  method: string;
  handler: RouteHandler<any, any, any>;
}
