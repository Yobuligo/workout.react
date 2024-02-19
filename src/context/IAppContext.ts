import { IDevice } from "../shared/model/exercise/IDevice";
import { IList } from "../types/IList";

export interface IAppContext {
  // selectedExerciseType: 
  selectedDevices: IList<IDevice>;
}
