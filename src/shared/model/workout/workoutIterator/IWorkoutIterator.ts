import { IWorkoutStep } from "../workoutStep/IWorkoutStep";

export interface IWorkoutIterator {
  readonly hasNext: boolean;
  next(): IWorkoutStep;
}
