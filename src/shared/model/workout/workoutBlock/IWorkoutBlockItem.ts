import { WorkoutSpanType } from "../../../types/WorkoutExerciseSpanType";
import { IHaveTitle } from "../../core/IHaveTitle";

export interface IWorkoutBlockItem extends IHaveTitle {
  readonly type: WorkoutSpanType;
  readonly value: number;
}
