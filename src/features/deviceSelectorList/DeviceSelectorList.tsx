import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const { t } = useTranslation();

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
  return (
    <div>
      <p>{t(texts.deviceSelectorList.explanation)}</p>
      <div className={styles.items}>{items}</div>
    </div>
  );
};
