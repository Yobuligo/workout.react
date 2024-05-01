import { IRecord } from "@yobuligo/local-storage-db";

export interface IUserConfig extends IRecord<string> {
  selectedDevices: string[];
}
