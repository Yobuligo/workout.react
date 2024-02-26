import { DevicePool } from "./DevicePool";

export const configureDevices = <TDevicePool extends DevicePool>(
  pool: TDevicePool
): TDevicePool => {
  return pool;
};
