import { IExercise } from "../shared/model/exercise/IExercise";
import { IExerciseInfo } from "./IExerciseInfo";

class ExerciseInfoDefault implements IExerciseInfo {
  needsDevice(exercise: IExercise): boolean {
    return exercise.devices !== undefined && exercise.devices.length > 0;
  }
}

export const ExerciseInfo = new ExerciseInfoDefault();
