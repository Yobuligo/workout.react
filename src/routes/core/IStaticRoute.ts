import { IRoute } from "./IRoute";

export interface IStaticRoute<TPath extends string> extends IRoute<TPath> {
  toPath(): string;
}
