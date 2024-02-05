import { IDevice } from "../../shared/model/exercise/IDevice";
import { db } from "./db";
import { Router } from "./router/Router";

export const MockRouter = new Router();

MockRouter.get<IDevice[]>("/devices", () => db.devices);
