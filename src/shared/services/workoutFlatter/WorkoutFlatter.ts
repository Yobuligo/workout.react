import { IllegalStateError } from "../../../error/IllegalStateError";
import { IWorkout } from "../../model/workout/workout/IWorkout";
import { isWorkoutExercise } from "../../model/workout/workoutExercise/isWorkoutExercise";
import { IWorkoutStep } from "../../model/workout/workoutStep/IWorkoutStep";
import { IWorkoutFlatter } from "./IWorkoutFlatter";

export class WorkoutFlatter implements IWorkoutFlatter {
  constructor(private readonly workout: IWorkout) {}

  toFlat(): IWorkoutStep[] {
    const workoutSteps: IWorkoutStep[] = [];
    for (const workoutBlock of this.workout.blocks) {
      for (const workoutItem of workoutBlock.items) {
        if (isWorkoutExercise(workoutItem)) {
          workoutSteps.push({
            workoutBlock: workoutBlock,
            workoutExercise: workoutItem,
          });
        } else {
          throw new IllegalStateError(
            `Currently not supported to stack several workout block items.`
          );
        }
      }
    }
    return workoutSteps;
  }
}
