import { DeviceMeta, IDevice } from "../../shared/model/exercise/IDevice";
import { ExerciseMeta, IExercise } from "../../shared/model/exercise/IExercise";
import { IWorkoutType } from "../../shared/model/exercise/IWorkoutType";
import { WorkoutType } from "../../shared/types/WorkoutType";
import { WorkoutTypeMeta } from "../../shared/model/exercise/IWorkoutType";
import { db } from "./db";
import { Router } from "./router/Router";

export const MockRouter = new Router();

MockRouter.get<IDevice[]>(DeviceMeta.path, () => db.devices);

MockRouter.get<IExercise[]>(ExerciseMeta.path, () => db.exercises);

MockRouter.get<IWorkoutType[]>(WorkoutTypeMeta.path, () => db.workoutTypes);

MockRouter.get<IDevice[]>(
  `${WorkoutTypeMeta.path}/${WorkoutType.FASCIA}${DeviceMeta.path}`,
  () => db.fasciaDevices
);

MockRouter.get<IDevice[]>(
  `${WorkoutTypeMeta.path}/${WorkoutType.POWER}${DeviceMeta.path}`,
  () => db.powerDevices
);

MockRouter.get<IDevice[]>(
  `${WorkoutTypeMeta.path}/${WorkoutType.STRETCH}${DeviceMeta.path}`,
  () => db.stretchingDevices
);
