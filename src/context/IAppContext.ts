import { IDevice } from "../shared/model/exercise/IDevice";
import { IExerciseType } from "../shared/model/exercise/IExerciseType";
import { IList } from "../types/IList";
import { IValue } from "../types/IValue";

export interface IAppContext {
  selectedExerciseType: IValue<IExerciseType | undefined>;
  selectedDevices: IList<IDevice>;
}
