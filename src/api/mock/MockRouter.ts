import { DeviceMeta, IDevice } from "../../shared/model/device/IDevice";
import { ExerciseMeta, IExercise } from "../../shared/model/exercise/IExercise";
import {
  IWorkoutType,
  WorkoutTypeMeta,
} from "../../shared/model/exercise/IWorkoutType";
import {
  IWorkout,
  WorkoutMeta,
} from "../../shared/model/workout/workout/IWorkout";
import { IWorkoutConfig } from "../../shared/model/workout/workout/IWorkoutConfig";
import { WorkoutGenerator } from "../../shared/services/WorkoutGenerator";
import { WorkoutType } from "../../shared/types/WorkoutType";
import { filterData } from "../core/filterData";
import { db } from "./db";
import { Router } from "./router/Router";

export const MockRouter = new Router();

MockRouter.get<IDevice[]>(DeviceMeta.path, () => db.devices);

MockRouter.get<IExercise[], { type: WorkoutType }>(
  ExerciseMeta.path,
  (request) => {
    if (request?.params) {
      return filterData(db.exercises, request.params);
    } else {
      return db.exercises;
    }
  }
);

MockRouter.get<IDevice[]>(
  `${WorkoutTypeMeta.path}/${WorkoutType.FASCIA}${DeviceMeta.path}`,
  () => db.fasciaDevices
);

MockRouter.post<IWorkout, IWorkoutConfig>(
  `${WorkoutMeta.path}/generate`,
  (request) => {
    if (!request?.data) {
      throw new Error(
        `Error while mocking generation of workout. WorkoutConfig must not be null.`
      );
    }
    const workoutGenerator = new WorkoutGenerator();
    return workoutGenerator.generate(request.data);
  }
);

MockRouter.get<IDevice[]>(
  `${WorkoutTypeMeta.path}/${WorkoutType.POWER}${DeviceMeta.path}`,
  () => db.powerDevices
);

MockRouter.get<IDevice[]>(
  `${WorkoutTypeMeta.path}/${WorkoutType.STRETCHING}${DeviceMeta.path}`,
  () => db.stretchingDevices
);

MockRouter.get<IWorkoutType[]>(WorkoutTypeMeta.path, () => db.workoutTypes);
