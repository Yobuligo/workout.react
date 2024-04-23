import { IExercise } from "../shared/model/exercise/IExercise";

export interface IExerciseInfo {
  /**
   * Returns if the {@link exercise} needs any device
   */
  needsDevice(exercise: IExercise): boolean;
}
