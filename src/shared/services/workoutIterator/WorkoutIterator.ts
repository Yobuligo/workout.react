import { IllegalStateError } from "../../../core/errors/IllegalStateError";
import { IWorkout } from "../../model/workout/workout/IWorkout";
import { IWorkoutStep } from "../../model/workout/workoutStep/IWorkoutStep";
import { WorkoutFlattener } from "../workoutFlattener/WorkoutFlattener";
import { IWorkoutIterator } from "./IWorkoutIterator";

export class WorkoutIterator implements IWorkoutIterator {
  private cursor = 0;
  private readonly workoutSteps: IWorkoutStep[];

  constructor(workout: IWorkout) {
    const workoutFlatter = new WorkoutFlattener(workout);
    this.workoutSteps = workoutFlatter.toFlat();
  }

  get hasNext(): boolean {
    return this.workoutSteps[this.cursor] !== undefined;
  }

  next(): IWorkoutStep {
    const workoutStep = this.workoutSteps[this.cursor];
    if (!workoutStep) {
      throw new IllegalStateError(
        `Error while getting next workout exercise. No next exercise workout exercise found. Use hasNext to check if another workout exercise is available.`
      );
    }

    this.cursor++;
    return workoutStep;
  }
}
