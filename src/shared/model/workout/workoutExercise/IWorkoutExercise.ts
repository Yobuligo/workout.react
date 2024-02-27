import { WorkoutSpanType } from "../../../types/WorkoutSpanType";
import { IEntity } from "../../core/IEntity";
import { IExercise } from "../../exercise/IExercise";
import { IWorkoutBlockItem } from "../workoutBlock/IWorkoutBlockItem";

export interface IWorkoutExercise extends IEntity, IWorkoutBlockItem {
  readonly exercise: IExercise;
  readonly type: WorkoutSpanType;
  readonly value: number;
}
