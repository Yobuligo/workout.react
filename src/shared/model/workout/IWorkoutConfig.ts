import { WorkoutType } from "../../types/WorkoutType";
import { IDevice } from "../device/IDevice";

export interface IWorkoutConfig {
  readonly devices: IDevice[];
  workoutType: WorkoutType;
}
