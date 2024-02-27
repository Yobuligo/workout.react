import { WorkoutExerciseSpanType } from "../../../types/WorkoutExerciseSpanType";
import { IHaveTitle } from "../../core/IHaveTitle";

export interface IWorkoutBlockItem extends IHaveTitle {
  readonly type: WorkoutExerciseSpanType;
  readonly value: number;
}
