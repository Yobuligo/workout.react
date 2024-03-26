import { useContext, useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { AppContext } from "../../context/AppContext";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IDevice } from "../../shared/model/device/IDevice";
import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const context = useContext(AppContext);
  const { t } = useTranslation();

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
        const devices = await Api.workoutType.findDevices(props.workoutType);
        setDevices(devices);
      }}
    >
      <p>{t(texts.deviceSelectorList.explanation)}</p>
      <div className={styles.items}>{items}</div>
    </AsyncLoad>
  );
};
