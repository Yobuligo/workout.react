import { IDevice } from "./IDevice";
import { IEntity } from "../core/IEntity";
import { IHaveDescription } from "../core/IHaveDescription";
import { IHaveName } from "../core/IHaveName";

export interface IExercise extends IEntity, IHaveName, IHaveDescription {
  devices: IDevice[];
}
