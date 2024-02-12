import { IDevice } from "../../shared/model/exercise/IDevice";

export interface IDevicePickerListProps {
  onSelect?: (device: IDevice) => void;
  onUnselect?: (device: IDevice) => void;
}
