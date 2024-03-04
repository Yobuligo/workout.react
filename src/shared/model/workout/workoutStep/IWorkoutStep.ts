import { IWorkoutBlock } from "./../workoutBlock/IWorkoutBlock";
import { IWorkoutExercise } from "./../workoutExercise/IWorkoutExercise";

/**
 * An implementation of this interface represents a step within the execution of a workout.
 * A step is always part of a {@link IWorkoutBlock} and contains a {@link IWorkoutExercise}.
 */
export interface IWorkoutStep {
  readonly workoutBlock: IWorkoutBlock;
  readonly workoutExercise: IWorkoutExercise;
}
