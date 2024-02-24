import { WorkoutExerciseSpanType } from "../../../types/WorkoutExerciseSpanType";
import { IEntity } from "../../core/IEntity";
import { IExercise } from "../../exercise/IExercise";

export interface IWorkoutExercise extends IEntity {
  readonly exercise: IExercise;
  readonly type: WorkoutExerciseSpanType;
  readonly value: number;
}
