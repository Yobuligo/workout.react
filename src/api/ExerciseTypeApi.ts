import { IDevice } from "../shared/model/exercise/IDevice";
import {
  ExerciseTypeMeta,
  IExerciseType,
} from "../shared/model/exercise/IExerciseType";
import { ExerciseType } from "../shared/types/ExerciseType";
import { Repository } from "./core/Repository";

export class ExerciseTypeApi extends Repository<IExerciseType> {
  constructor() {
    super(ExerciseTypeMeta);
  }

  /**
   * Finds all devices of a specific {@link exerciseType}.
   */
  findDevices(exerciseType: ExerciseType): Promise<IDevice[]> {
    return this.get(`${this.url}/${exerciseType}/devices`);
  }
}
