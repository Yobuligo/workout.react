import { IWorkoutBlock } from "./IWorkoutBlock";
import { IEntity } from "../core/IEntity";
import { IMeta } from "../../types/IMeta";

export interface IWorkout extends IEntity {
  blocks: IWorkoutBlock[];
  createdAt: Date;
}

export const WorkoutMeta: IMeta<IWorkout> = { path: "/workouts" };
