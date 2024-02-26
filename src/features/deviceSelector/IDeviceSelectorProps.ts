import { IDevice } from "../../shared/model/device/IDevice";

export interface IDeviceSelectorProps {
  device: IDevice;
  selected: boolean;
  onSelect?: (device: IDevice) => void;
  onUnselect?: (device: IDevice) => void;
}
