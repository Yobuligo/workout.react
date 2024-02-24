import { RouteHandler } from "./RouterHandler";

export interface IRoute {
  path: string;
  method: string;
  handler: RouteHandler<any, any>;
}
