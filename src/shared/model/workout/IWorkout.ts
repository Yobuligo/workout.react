import { IWorkoutBlock } from "./workoutBlock/IWorkoutBlock";
import { IEntity } from "../core/IEntity";
import { IMeta } from "../../types/IMeta";

export interface IWorkout extends IEntity {
  readonly blocks: IWorkoutBlock[];
  readonly createdAt: Date;
}

export const WorkoutMeta: IMeta<IWorkout> = { path: "/workouts" };
