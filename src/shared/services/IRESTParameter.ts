import { IFilter } from "../../types/IFilter";
import { RESTParams } from "../types/RESTParams";

export interface IRESTParameter {
  filterToPath<T>(filter: IFilter<T>): string;
  toParams<T extends RESTParams>(url: string): T;
}
