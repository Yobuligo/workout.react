import { IWorkoutExercise } from "../workoutExercise/IWorkoutExercise";
import { IEntity } from "../../core/IEntity";
import { IHaveTitle } from "../../core/IHaveTitle";

export interface IWorkoutBlock extends IEntity, IHaveTitle {
  readonly exercises: IWorkoutExercise[];
}
