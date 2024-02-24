import { IExercise } from "../exercise/IExercise";
import { IWorkoutExerciseSpan } from "./IWorkoutExerciseSpan";
import { IEntity } from "../core/IEntity";

export interface IWorkoutExercise extends IEntity {
  readonly exercise: IExercise;
  readonly span: IWorkoutExerciseSpan;
}
