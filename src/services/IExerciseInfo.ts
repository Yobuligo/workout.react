import { IDevice } from "../shared/model/device/IDevice";
import { IExercise } from "../shared/model/exercise/IExercise";

export interface IExerciseInfo {
  /**
   * Returns if all required devices for the {@link exercise} are available in {@link devices}
   */
  hasDevices(exercise: IExercise, devices?: IDevice[]): boolean;

  /**
   * Returns if the {@link exercise} needs any device
   */
  needsDevice(exercise: IExercise): boolean;
}
