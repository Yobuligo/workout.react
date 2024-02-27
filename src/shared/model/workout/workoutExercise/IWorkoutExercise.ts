import { IEntity } from "../../core/IEntity";
import { IExercise } from "../../exercise/IExercise";
import { IWorkoutBlockItem } from "../workoutBlock/IWorkoutBlockItem";

export interface IWorkoutExercise extends IEntity, IWorkoutBlockItem {
  readonly exercise: IExercise;
}
