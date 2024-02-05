import { IDevice } from "../shared/model/exercise/IDevice";

export class DeviceApi {
  findAll(): Promise<IDevice[]> {
    return new Promise(async (resolve) => {
      const response = await fetch("/devices");
      const devices = await response.json();
      resolve(devices);
    });
  }
}
