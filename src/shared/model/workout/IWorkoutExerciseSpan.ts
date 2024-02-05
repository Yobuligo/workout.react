import { WorkoutExerciseSpanType } from "../../types/WorkoutExerciseSpanType";

/**
 * Defines how long or how often an exercise has to be practiced.
 */
export interface IWorkoutExerciseSpan {
  type: WorkoutExerciseSpanType;
  value: number;
}
