import { IWorkoutExercise } from "../workoutExercise/IWorkoutExercise";
import { IEntity } from "../../core/IEntity";
import { IHaveName } from "../../core/IHaveName";

export interface IWorkoutBlock extends IEntity, IHaveName {
  readonly exercises: IWorkoutExercise[];
}
