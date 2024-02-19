import { IDevice } from "../shared/model/exercise/IDevice";
import {
  ExerciseTypeMeta,
  IExerciseType,
} from "../shared/model/exercise/IExerciseType";
import { Repository } from "./core/Repository";

export class ExerciseTypeApi extends Repository<IExerciseType> {
  constructor() {
    super(ExerciseTypeMeta.path);
  }

  /**
   * Finds all devices of a specific exercise type
   */
  findDevices(): Promise<IDevice[]> {
    return this.get(`${this.path}`);
  }
}
