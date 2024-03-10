/**
 * A workout iteration defines the current iteration and the maximum iteration of a workoutBlock.
 *
 * E.g. a power workout block has to be repeated 3 times.
 * Therefor we have the first, second and third iteration.
 */
export interface IWorkoutBlockIteration {
  current: number;
  max: number;
}
