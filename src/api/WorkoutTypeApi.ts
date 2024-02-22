import { DeviceMeta, IDevice } from "../shared/model/exercise/IDevice";
import {
  IWorkoutType,
  WorkoutTypeMeta,
} from "../shared/model/exercise/IWorkoutType";
import { WorkoutType } from "../shared/types/WorkoutType";
import { Repository } from "./core/Repository";

export class WorkoutTypeApi extends Repository<IWorkoutType> {
  constructor() {
    super(WorkoutTypeMeta);
  }

  /**
   * Finds all devices of the given {@link workoutType}.
   */
  findDevices(workoutType: WorkoutType): Promise<IDevice[]> {
    return this.get(`${this.url}/${workoutType}${DeviceMeta.path}`);
  }
}
