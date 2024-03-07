import { IWorkoutStep } from "../../model/workout/workoutStep/IWorkoutStep";

export interface IWorkoutIterator {
  readonly hasNext: boolean;
  next(): IWorkoutStep;
}
