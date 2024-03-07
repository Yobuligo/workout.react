import { IllegalStateError } from "../../../error/IllegalStateError";
import { error } from "../../utils/error";
import { IWorkout } from "../../model/workout/workout/IWorkout";
import { IWorkoutBlock } from "../../model/workout/workoutBlock/IWorkoutBlock";
import { IWorkoutBlockItem } from "../../model/workout/workoutBlock/IWorkoutBlockItem";
import { IWorkoutExercise } from "../../model/workout/workoutExercise/IWorkoutExercise";
import { isWorkoutExercise } from "../../model/workout/workoutExercise/isWorkoutExercise";
import { IWorkoutStep } from "../../model/workout/workoutStep/IWorkoutStep";
import { IWorkoutIterator } from "./IWorkoutIterator";

export class WorkoutIterator implements IWorkoutIterator {
  private workoutBlockCursor = 0;
  private workoutExerciseCursor = 0;

  constructor(private readonly workout: IWorkout) {}

  get hasNext(): boolean {
    return (
      this.getNextFromCurrentBlock() !== undefined ||
      this.getNextFromNextBlock() !== undefined
    );
  }

  next(): IWorkoutStep {
    let workoutExercise = this.getNextFromCurrentBlock();
    if (workoutExercise) {
      const workoutBlock = this.getWorkoutBlock();
      this.workoutExerciseCursor++;
      return {
        workoutBlock,
        workoutExercise,
      };
    }

    workoutExercise = this.getNextFromNextBlock();
    if (workoutExercise) {
      this.workoutBlockCursor++;
      this.workoutExerciseCursor = 1;
      return {
        workoutBlock: this.getWorkoutBlock(),
        workoutExercise: workoutExercise,
      };
    }

    throw new IllegalStateError(
      `Error while getting next workout exercise. No next exercise workout exercise found. Use hasNext to check if another workout exercise is available.`
    );
  }

  private getNextFromCurrentBlock(): IWorkoutExercise | undefined {
    const workoutBlock = this.getWorkoutBlock();
    const workoutBlockItem = workoutBlock.items[this.workoutExerciseCursor];
    return this.extractWorkoutExercise(workoutBlockItem);
  }

  private getNextFromNextBlock(): IWorkoutExercise | undefined {
    const workoutBlock = this.workout.blocks[this.workoutBlockCursor + 1];
    if (!workoutBlock) {
      return undefined;
    }

    const workoutBlockItem = workoutBlock.items[0];
    return this.extractWorkoutExercise(workoutBlockItem);
  }

  private getWorkoutBlock(): IWorkoutBlock {
    return (
      this.workout.blocks[this.workoutBlockCursor] ??
      error(
        `Error while getting next workout block. Workout block not found. Workout block at position '${this.workoutBlockCursor}' must be available.`
      )
    );
  }

  private extractWorkoutExercise(
    workoutBlockItem: IWorkoutBlockItem
  ): IWorkoutExercise | undefined {
    if (workoutBlockItem && !isWorkoutExercise(workoutBlockItem)) {
      throw new IllegalStateError(`Error while getting next workout Exercise.`);
    }
    return workoutBlockItem;
  }
}
