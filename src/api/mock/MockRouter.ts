import { DeviceMeta, IDevice } from "../../shared/model/exercise/IDevice";
import { ExerciseMeta, IExercise } from "../../shared/model/exercise/IExercise";
import {
  ExerciseTypeMeta,
  IExerciseType,
} from "../../shared/model/exercise/IExerciseType";
import { db } from "./db";
import { Router } from "./router/Router";

export const MockRouter = new Router();

MockRouter.get<IDevice[]>(DeviceMeta.path, () => db.devices);

MockRouter.get<IExercise[]>(ExerciseMeta.path, () => db.exercises);

MockRouter.get<IExerciseType[]>(ExerciseTypeMeta.path, () => db.exerciseTypes);
