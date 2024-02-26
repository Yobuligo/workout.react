import { Pool } from "../../types/Pool";
import { IDevice } from "./IDevice";

export const configureDevices = <TDevicePool extends Pool<IDevice>>(
  pool: TDevicePool
): TDevicePool => {
  return pool;
};
