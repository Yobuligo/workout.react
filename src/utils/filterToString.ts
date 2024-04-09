import { IFilter } from "../types/IFilter";

export const filterToString = <T>(filter: IFilter<T>): string => {
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
};
