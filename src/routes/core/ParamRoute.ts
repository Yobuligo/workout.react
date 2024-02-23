import { IParamRoute } from "./IParamRoute";
import { RouteParams } from "./RouteParams";

export class ParamRoute<TPath extends string> implements IParamRoute<TPath> {
  constructor(readonly origin: TPath) {}

  toPath<TRouteParams extends RouteParams<TPath>>(
    params: TRouteParams
  ): string {
    let path: string = this.origin;
    for (const propName in params) {
      path = path.replaceAll(`:${propName}`, params[propName]);
    }
    return path;
  }
}
