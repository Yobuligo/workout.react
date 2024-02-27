import { IMeta } from "../../../types/IMeta";
import { IEntity } from "../../core/IEntity";
import { IWorkoutBlock } from "../workoutBlock/IWorkoutBlock";

export interface IWorkout extends IEntity {
  readonly blocks: IWorkoutBlock[];
  readonly createdAt: Date;
}

export const WorkoutMeta: IMeta<IWorkout> = { path: "/workouts" };
