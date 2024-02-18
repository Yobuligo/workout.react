import { Difficulty } from "../../types/Difficulty";
import { IImage } from "../../types/IImage";
import { MuscleGroup } from "../../types/MuscleGroup";
import { IEntity } from "../core/IEntity";
import { IHaveDescription } from "../core/IHaveDescription";
import { IHaveName } from "../core/IHaveName";
import { IDevice } from "./IDevice";

export interface IExercise extends IEntity, IHaveName, IHaveDescription {
  devices: IDevice[];
  difficulty: Difficulty;
  image?: IImage;
  muscleGroups: MuscleGroup[];
}
