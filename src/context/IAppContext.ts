import { IDevice } from "../shared/model/device/IDevice";
import { IWorkoutType } from "../shared/model/exercise/IWorkoutType";
import { IWorkout } from "../shared/model/workout/workout/IWorkout";
import { IList } from "../types/IList";
import { IValue } from "../types/IValue";

export interface IAppContext {
  selectedDevices: IList<IDevice>;
  selectedWorkout: IValue<IWorkout | undefined>;
  selectedWorkoutType: IValue<IWorkoutType | undefined>;
}
