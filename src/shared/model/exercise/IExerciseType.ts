import { ExerciseType } from "../../types/ExerciseType";
import { IMeta } from "../../types/IMeta";
import { IEntity } from "../core/IEntity";

export interface IExerciseType extends IEntity {
  exerciseType: ExerciseType;
}

export const ExerciseTypeMeta: IMeta<IExerciseType> = {
  path: "/exercise-types",
};
