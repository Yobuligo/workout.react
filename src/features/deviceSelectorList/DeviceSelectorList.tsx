import { useContext, useState } from "react";
import { DeviceApi } from "../../api/DeviceApi";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { AppContext } from "../../context/AppContext";
import { useInitialize } from "../../hooks/useInitialize";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IDevice } from "../../shared/model/exercise/IDevice";
import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const context = useContext(AppContext);
  const { t } = useTranslation();

  useInitialize(() => context.selectedDevices.removeAll());

  const onSelectDevice = (device: IDevice) =>
    context.selectedDevices.append(device);

  const onUnselectDevice = (device: IDevice) =>
    context.selectedDevices.remove(device);

  const items = devices.map((device) => (
    <div key={device.id}>
      <DeviceSelector
        device={device}
        onSelect={onSelectDevice}
        onUnselect={onUnselectDevice}
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
