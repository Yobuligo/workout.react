import { useEffect, useState } from "react";
import { DeviceApi } from "../api/DeviceApi";
import { IDevice } from "../shared/model/exercise/IDevice";
import { request } from "../utils/request";

export const HomePage: React.FC = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);

  useEffect(() => {
    request(async () => {
      const devices = await new DeviceApi().findAll();
      setDevices(devices);
    });
  });

  return (
    <>
      {devices.map((device) => (
        <div>{device.name}</div>
      ))}
    </>
  );
};
