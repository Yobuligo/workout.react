import { IEntity } from "../../shared/model/core/IEntity";
import { RESTParameter } from "../../shared/services/RESTParameter";
import { IMeta } from "../../shared/types/IMeta";
import { IFilter } from "../../types/IFilter";
import { IRepository } from "./IRepository";
import { RESTApi } from "./RESTApi";

export abstract class Repository<T extends IEntity>
  extends RESTApi
  implements IRepository<T>
{
  constructor(protected readonly meta: IMeta<T>) {
    super();
  }

  findAll(): Promise<T[]> {
    return this.get(this.meta.path);
  }

  findByFilter(filter: IFilter<T>): Promise<T[]> {
    return this.get(this.filterToPath(filter));
  }

  protected get url() {
    return this.meta.path;
  }

  private filterToPath(filter: IFilter<T>): string {
    const pathParams = RESTParameter.filterToPath(filter);
    return `${this.meta.path}?${pathParams}`;
  }
}
