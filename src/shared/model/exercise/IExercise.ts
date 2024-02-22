import { Difficulty } from "../../types/Difficulty";
import { WorkoutType } from "../../types/WorkoutType";
import { IImage } from "../../types/IImage";
import { IMeta } from "../../types/IMeta";
import { MuscleGroup } from "../../types/MuscleGroup";
import { IEntity } from "../core/IEntity";
import { IHaveDescription } from "../core/IHaveDescription";
import { IHaveName } from "../core/IHaveName";
import { IDevice } from "./IDevice";

export interface IExercise extends IEntity, IHaveName, IHaveDescription {
  devices?: IDevice[];
  difficulty: Difficulty;
  image?: IImage;
  muscleGroups: MuscleGroup[];
  type: WorkoutType;
}

export const ExerciseMeta: IMeta<IExercise> = { path: "/exercises" };
