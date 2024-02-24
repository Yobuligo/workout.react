import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";
import { Workout } from "../model/workout/Workout";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    return new Workout();
  }
}
