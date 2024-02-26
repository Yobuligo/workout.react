import { IDevice } from "../model/device/IDevice";
import { IExercise } from "../model/exercise/IExercise";
import { MuscleGroup } from "../types/MuscleGroup";

export interface IExerciseFinder {
  findByMuscleGroup(muscleGroup: MuscleGroup, devices: IDevice[]): IExercise;
}
