import { IMeta } from "../../types/IMeta";
import { WorkoutType } from "../../types/WorkoutType";
import { IEntity } from "../core/IEntity";

export interface IWorkoutType extends IEntity {
  description: string;
  type: WorkoutType;
}

export const WorkoutTypeMeta: IMeta<IWorkoutType> = {
  path: "/workout-types",
};
