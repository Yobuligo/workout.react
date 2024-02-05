import { IDevice } from "../../shared/model/exercise/IDevice";

export interface IDeviceSelectorProps {
  device: IDevice;
  onselect?: (device: IDevice) => void;
}
