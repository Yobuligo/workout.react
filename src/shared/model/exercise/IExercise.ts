import { Difficulty } from "../../types/Difficulty";
import { MuscleGroup } from "../../types/MuscleGroup";
import { IEntity } from "../core/IEntity";
import { IHaveDescription } from "../core/IHaveDescription";
import { IHaveName } from "../core/IHaveName";
import { IDevice } from "./IDevice";

export interface IExercise extends IEntity, IHaveName, IHaveDescription {
  devices: IDevice[];
  difficulty: Difficulty;
  muscleGroups: MuscleGroup[];
}
