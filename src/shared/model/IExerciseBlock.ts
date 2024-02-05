import { IExercise } from "./IExercise";
import { IHaveName } from "./core/IHaveName";

export interface IExerciseBlock extends IHaveName {
  exercises: IExercise;
}
