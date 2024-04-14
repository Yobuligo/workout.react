import { RESTParams } from "../../shared/types/RESTParams";
import { IFilter } from "../../types/IFilter";
import { IRESTParameter } from "./IRESTParameter";

class RESTParameterDefault implements IRESTParameter {
  filterToPath<T>(filter: IFilter<T>): string {
    let result = "";
    for (const propName in filter) {
      const propValue = filter[propName];
      const expression = `${propName}=${propValue}`;
      if (result.length === 0) {
        result = expression;
      } else {
        result += `&${propName}=${propValue}`;
      }
    }

    return result;
  }

  toParams<T extends RESTParams>(url: string): T | undefined {
    const [, pathParams] = url.split("?");
    if (!pathParams) {
      return;
    }

    const nameValuePairs = pathParams.split("&");
    const params = {} as T;
    for (const nameValuePair of nameValuePairs) {
      const [first, second] = nameValuePair.split("=");
      (params as any)[first] = second;
    }
    return params;
  }
}

export const RESTParameter = new RESTParameterDefault();
