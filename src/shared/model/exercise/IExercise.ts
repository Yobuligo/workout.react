import { Difficulty } from "../../types/Difficulty";
import { WorkoutType } from "../../types/WorkoutType";
import { IImage } from "../../types/IImage";
import { IMeta } from "../../types/IMeta";
import { MuscleGroup } from "../../types/MuscleGroup";
import { IEntity } from "../core/IEntity";
import { IHaveDescription } from "../core/IHaveDescription";
import { IHaveTitle } from "../core/IHaveTitle";
import { IDevice } from "../device/IDevice";

export interface IExercise extends IEntity, IHaveTitle, IHaveDescription {
  devices?: IDevice[];
  difficulty: Difficulty;
  image?: IImage;
  muscleGroups: MuscleGroup[];
  type: WorkoutType;
}

export const ExerciseMeta: IMeta<IExercise> = { path: "/exercises" };
