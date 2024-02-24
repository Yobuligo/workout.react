import { IWorkout } from "../model/workout/IWorkout";
import { IWorkoutConfig } from "../model/workout/IWorkoutConfig";
import { Workout } from "../model/workout/Workout";
import { IWorkoutGenerator } from "./IWorkoutGenerator";

export class WorkoutGenerator implements IWorkoutGenerator {
  generate(workoutConfig: IWorkoutConfig): IWorkout {
    // 1. Would be like to generate several workout blocks? E.g. power and conditional
    // 2. Whenever getter Exercises, consider the devices, which can be used

    

    return new Workout();
  }
}
