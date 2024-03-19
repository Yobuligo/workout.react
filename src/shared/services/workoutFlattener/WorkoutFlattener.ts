import { IllegalStateError } from "../../../core/errors/IllegalStateError";
import { repeat } from "../../../core/repeat";
import { IWorkout } from "../../model/workout/workout/IWorkout";
import { IWorkoutBlock } from "../../model/workout/workoutBlock/IWorkoutBlock";
import { isWorkoutExercise } from "../../model/workout/workoutExercise/isWorkoutExercise";
import { IWorkoutStep } from "../../model/workout/workoutStep/IWorkoutStep";
import { WorkoutSpanType } from "../../types/WorkoutSpanType";
import { IWorkoutFlattener } from "./IWorkoutFlattener";

export class WorkoutFlattener implements IWorkoutFlattener {
  constructor(private readonly workout: IWorkout) {}

  toFlat(): IWorkoutStep[] {
    const workoutSteps: IWorkoutStep[] = [];
    for (const workoutBlock of this.workout.blocks) {
      const numberIterations = this.getNumberIterations(workoutBlock);
      // Create workout steps separately for each iteration
      // The power workout has 3 iterations, so create steps triple times
      repeat(numberIterations, (index) => {
        let workoutExercisePosition = 0;
        for (const workoutItem of workoutBlock.items) {
          workoutExercisePosition++;
          if (isWorkoutExercise(workoutItem)) {
            workoutSteps.push({
              workoutBlock: workoutBlock,
              workoutExercise: workoutItem,
              workoutBlockIteration: {
                from: index + 1,
                to: numberIterations,
              },
              workoutExercisePosition: {
                from: workoutExercisePosition,
                to: workoutBlock.items.length,
              },
            });
          } else {
            throw new IllegalStateError(
              `Currently not supported to stack several workout block items.`
            );
          }
        }
      });
    }
    return workoutSteps;
  }

  private getNumberIterations(workoutBlock: IWorkoutBlock): number {
    if (workoutBlock.type === WorkoutSpanType.TIME_BASED) {
      return 1;
    } else {
      return workoutBlock.value;
    }
  }
}
