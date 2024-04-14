import { IFilter } from "../../types/IFilter";
import { RESTParams } from "../types/RESTParams";
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

  toParams<T extends RESTParams>(url: string): T {
    const segments = url.split("?");
    throw new Error();
  }
}

export const RESTParameter = new RESTParameterDefault();
