import { IDevice } from "../shared/model/exercise/IDevice";
import { IValue } from "../types/IValue";

export interface IAppContext {
  selectedDevices: IValue<IDevice[]>;
}
