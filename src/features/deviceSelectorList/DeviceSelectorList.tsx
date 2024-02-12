import { useEffect, useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";
import { IDevice } from "../../shared/model/exercise/IDevice";
import { request } from "../../core/request";
import { DeviceApi } from "../../api/DeviceApi";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    request(async () => {
      const devices = await new DeviceApi().findAll();
      setDevices(devices);
    });
  }, []);

  const items = devices.map((device) => (
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
