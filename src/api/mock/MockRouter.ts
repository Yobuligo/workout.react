import { IDevice } from "../../shared/model/exercise/IDevice";
import { IExercise } from "../../shared/model/exercise/IExercise";
import { db } from "./db";
import { Router } from "./router/Router";

export const MockRouter = new Router();

MockRouter.get<IDevice[]>("/devices", () => db.devices);

MockRouter.get<IExercise[]>("/exercises", () => db.exercises);
