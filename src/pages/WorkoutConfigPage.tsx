import { useEffect, useState } from "react";
import { DeviceApi } from "../api/DeviceApi";
import { Page } from "../components/pages/Page";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
import { IDevice } from "../shared/model/exercise/IDevice";
import { request } from "../utils/request";

export const WorkoutConfigPage: React.FC = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [selectedDevices, setSelectedDevices] = useState<IDevice[]>([]);

  useEffect(() => {
    request(async () => {
      const devices = await new DeviceApi().findAll();
      setDevices(devices);
    });
  });

  const onSelectDevice = (device: IDevice) =>
    setSelectedDevices((previous) => [...previous, device]);

  const onUnselectDevice = (device: IDevice) =>
    setSelectedDevices((previous) => {
      const index = previous.findIndex((item) => (item.id = device.id));
      if (index !== -1) {
        previous.splice(index, 1);
      }
      return previous;
    });

  return (
    <Page subTitle="Pick your available training devices" title={"Workout App"}>
      <DeviceSelectorList
        devices={devices}
        onSelect={onSelectDevice}
        onUnselect={onUnselectDevice}
      />
    </Page>
  );
};
