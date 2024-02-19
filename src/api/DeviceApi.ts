import { DeviceMeta, IDevice } from "../shared/model/exercise/IDevice";
import { Repository } from "./core/Repository";

export class DeviceApi extends Repository<IDevice> {
  constructor() {
    super(DeviceMeta.path);
  }
}
