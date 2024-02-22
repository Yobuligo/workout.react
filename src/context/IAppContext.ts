import { IDevice } from "../shared/model/exercise/IDevice";
import { IWorkoutType } from "../shared/model/exercise/IWorkoutType";
import { IList } from "../types/IList";
import { IValue } from "../types/IValue";

export interface IAppContext {
  selectedWorkoutType: IValue<IWorkoutType | undefined>;
  selectedDevices: IList<IDevice>;
}
