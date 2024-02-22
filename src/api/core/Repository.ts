import { IEntity } from "../../shared/model/core/IEntity";
import { IMeta } from "../../shared/types/IMeta";
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

  protected get url() {
    return this.meta.path;
  }
}
