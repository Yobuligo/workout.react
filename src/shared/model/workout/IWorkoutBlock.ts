import { IWorkoutExercise } from "./IWorkoutExercise";
import { IEntity } from "../core/IEntity";
import { IHaveName } from "../core/IHaveName";

export interface IWorkoutBlock extends IEntity, IHaveName {
  exercises: IWorkoutExercise[];
}
