import { IMeta } from "../../types/IMeta";
import { IEntity } from "../core/IEntity";
import { IHaveTitle } from "../core/IHaveTitle";

export interface IDevice extends IEntity, IHaveTitle {}

export const DeviceMeta: IMeta<IDevice> = { path: "/devices" };
