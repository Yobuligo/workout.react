import { useState } from "react";
import { DeviceApi } from "../../api/DeviceApi";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IDevice } from "../../shared/model/exercise/IDevice";
import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const { t } = useTranslation();

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
    <AsyncLoad
      load={async () => {
        const devices = await new DeviceApi().findAll();
        setDevices(devices);
      }}
    >
      <p>{t(texts.deviceSelectorList.explanation)}</p>
      <div className={styles.items}>{items}</div>
    </AsyncLoad>
  );
};
