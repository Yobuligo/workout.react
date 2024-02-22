import { IEntity } from "../../shared/model/core/IEntity";

export interface IRepository<T extends IEntity> {
  findAll(): Promise<T[]>;
}
