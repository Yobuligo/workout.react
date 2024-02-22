import { Route } from "../utils/Route";

type Routes<T extends string> = { [key: string]: Route<T> };

export const configure = <T extends Routes<any>>(config: T): T => {
  return config;
};
