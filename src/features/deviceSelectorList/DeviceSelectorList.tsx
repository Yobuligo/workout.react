import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const items = props.devices.map((device) => (
    <div key={device.id}>
      <DeviceSelector device={device} />
    </div>
  ));
  return <>{items}</>;
};
