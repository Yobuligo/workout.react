import { IEntity } from "../../core/IEntity";
import { IWorkoutBlockItem } from "./IWorkoutBlockItem";

export interface IWorkoutBlock extends IEntity, IWorkoutBlockItem {
  readonly items: IWorkoutBlockItem[];
}
