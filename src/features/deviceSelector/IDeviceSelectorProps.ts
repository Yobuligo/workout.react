import { IDevice } from "../../shared/model/exercise/IDevice";

export interface IDeviceSelectorProps {
  device: IDevice;
  selected: boolean;
  onSelect?: (device: IDevice) => void;
  onUnselect?: (device: IDevice) => void;
}
