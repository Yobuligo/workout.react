import { IWorkoutStep } from "../../model/workout/workoutStep/IWorkoutStep";

/**
 * Responsible for flatten the workout blocks and exercises to a list
 */
export interface IWorkoutFlatter {
  toFlat(): IWorkoutStep[];
}
