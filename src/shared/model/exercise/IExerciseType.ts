import { IHavePath } from "../../types/IHavePath";
import { IEntity } from "../core/IEntity";

export interface IExerciseType extends IEntity {}

export const ExerciseTypeMeta: IHavePath = { path: "/exercise-types" };
