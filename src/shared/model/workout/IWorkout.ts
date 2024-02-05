import { IWorkoutBlock } from "./IWorkoutBlock";
import { IEntity } from "../core/IEntity";

export interface IWorkout extends IEntity {
  blocks: IWorkoutBlock[];
  createdAt: Date;
}
