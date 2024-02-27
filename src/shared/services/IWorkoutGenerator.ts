import { IWorkout } from "../model/workout/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/workout/IWorkoutConfig";

export interface IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout;
}
