import { IDevice } from "../../shared/model/exercise/IDevice";

export interface IDevicePickerListProps {
  devices: IDevice[];
  onSelect?: (device: IDevice) => void;
  onUnselect?: (device: IDevice) => void;
}
