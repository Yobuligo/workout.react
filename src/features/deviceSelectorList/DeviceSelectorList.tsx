import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const items = props.devices.map((device) => (
    <div key={device.id}>
      <DeviceSelector
        device={device}
        onSelect={props.onSelect}
        onUnselect={props.onUnselect}
        selected={false}
      />
    </div>
  ));
  return <div className={styles.deviceSelectorList}>{items}</div>;
};
