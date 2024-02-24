import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";

export interface IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout;
}
