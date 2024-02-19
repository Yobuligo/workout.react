import { IHavePath } from "../../types/IHavePath";
import { IEntity } from "../core/IEntity";
import { IHaveName } from "../core/IHaveName";

export interface IDevice extends IEntity, IHaveName {}

export const DeviceMeta: IHavePath = { path: "/devices" };
