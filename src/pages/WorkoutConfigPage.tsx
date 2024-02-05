import { useEffect, useState } from "react";
import { DeviceApi } from "../api/DeviceApi";
import { Page } from "../components/pages/Page";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
import { IDevice } from "../shared/model/exercise/IDevice";
import { request } from "../utils/request";

export const WorkoutConfigPage: React.FC = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);

  useEffect(() => {
    request(async () => {
      const devices = await new DeviceApi().findAll();
      setDevices(devices);
    });
  });

  return (
    <Page>
      <DeviceSelectorList devices={devices} />
    </Page>
  );
};
