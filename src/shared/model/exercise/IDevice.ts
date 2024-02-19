import { IMeta } from "../../types/IMeta";
import { IEntity } from "../core/IEntity";
import { IHaveName } from "../core/IHaveName";

export interface IDevice extends IEntity, IHaveName {}

export const DeviceMeta: IMeta<IDevice> = { path: "/devices" };
