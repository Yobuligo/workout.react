import { IEntity } from "../../shared/model/core/IEntity";
import { IRepository } from "./IRepository";
import { REST } from "./REST";

export abstract class Repository<T extends IEntity>
  extends REST
  implements IRepository<T>
{
  constructor(protected readonly path: string) {
    super();
  }

  findAll(): Promise<T[]> {
    return this.get(this.path);
  }
}
