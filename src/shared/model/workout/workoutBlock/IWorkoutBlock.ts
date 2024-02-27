import { IEntity } from "../../core/IEntity";
import { IHaveTitle } from "../../core/IHaveTitle";
import { IWorkoutBlockItem } from "./IWorkoutBlockItem";

export interface IWorkoutBlock extends IEntity, IHaveTitle {
  readonly items: IWorkoutBlockItem[];
}
