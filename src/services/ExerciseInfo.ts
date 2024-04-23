import { IDevice } from "../shared/model/device/IDevice";
import { IExercise } from "../shared/model/exercise/IExercise";
import { IExerciseInfo } from "./IExerciseInfo";

class ExerciseInfoDefault implements IExerciseInfo {
  hasDevices(exercise: IExercise, devices?: IDevice[]): boolean {
    if (exercise.devices === undefined || exercise.devices.length === 0) {
      return true;
    }

    if (devices === undefined) {
      return false;
    }

    for (const device of exercise.devices) {
      const index = devices.findIndex((item) => item.id === device.id);
      if (index === -1) {
        return false;
      }
    }

    return true;
  }

  needsDevice(exercise: IExercise): boolean {
    return exercise.devices !== undefined && exercise.devices.length > 0;
  }
}

export const ExerciseInfo = new ExerciseInfoDefault();
