import { IRoute } from "./IRoute";
import { RouteHandler } from "./RouterHandler";

/**
 * This class is responsible for creating mock responses for given routes.
 */
export class Router {
  private routes: IRoute[] = [];

  handle(url: string, requestInit?: RequestInit): Promise<Response> {
    return new Promise(async (resolve) => {
      setTimeout(() => {
        const route = this.findRoute(url, requestInit);
        if (!route) {
          throw new Error(
            `Error while calling mock REST handler. No handler found for url ${url} with HTTP method '${requestInit?.method}'.`
          );
        }
        const data = route.handler();
        const blob = new Blob([JSON.stringify(data)], {
          type: "application/json",
        });
        const init = { status: 200, statusText: "Mock data fetched." };
        const response = new Response(blob, init);

        resolve(response);
      }, 1000);
    });
  }

  delete<T>(path: string, handler: RouteHandler<T>) {
    this.routes.push({ path: path, method: "DELETE", handler });
  }

  get<T>(path: string, handler: RouteHandler<T>) {
    this.routes.push({ path: path, method: "GET", handler });
  }

  post<TResult, TData = undefined>(
    path: string,
    handler: RouteHandler<TResult, TData>
  ) {
    this.routes.push({ path: path, method: "POST", handler });
  }

  put<T>(path: string, handler: RouteHandler<T>) {
    this.routes.push({ path: path, method: "PUT", handler });
  }

  private findRoute(
    url: string,
    requestInit?: RequestInit
  ): IRoute | undefined {
    const pathSegments = this.urlToPathSegments(url);
    return this.routes.find((route) => {
      const routeSegments = route.path.split("/");
      return (
        this.fitsPathToRoute(routeSegments, pathSegments) &&
        route.method === requestInit?.method
      );
    });
  }

  private urlToPathSegments(url: string): string[] {
    // delete leading host information
    const [path] = url.split("?");
    return path.split("/");
  }

  private fitsPathToRoute(
    routeSegments: string[],
    pathSegments: string[]
  ): boolean {
    if (routeSegments.length !== pathSegments.length) {
      return false;
    }

    for (let i = 0; i < routeSegments.length; i++) {
      if (routeSegments[i] !== pathSegments[i]) {
        if (!routeSegments[i].startsWith(`:`)) {
          return false;
        }
      }
    }

    return true;
  }
}
