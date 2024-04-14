import { FasciaDevices } from "../../shared/model/device/FasciaDevices";
import { IDevice } from "../../shared/model/device/IDevice";
import { PowerDevices } from "../../shared/model/device/PowerDevices";
import { IExercise } from "../../shared/model/exercise/IExercise";
import { PowerExercises } from "../../shared/model/exercise/PowerExercises";
import { WorkoutTypes } from "../../shared/model/workout/workoutTypes/WorkoutTypes";
import { Pool } from "../../shared/types/Pool";
import { poolToArray } from "../../shared/utils/poolToArray";
import { IWorkoutType } from "./../../shared/model/exercise/IWorkoutType";

const toExercises = (): IExercise[] => {
  let exercises: IExercise[] = [];
  for (const exerciseName in PowerExercises) {
    const exercise = (PowerExercises as any)[exerciseName];
    exercises.push(exercise);
  }
  return exercises;
};

export const db = {
  devices: poolToArray<IDevice, Pool<IDevice>>(PowerDevices),
  exercises: toExercises(),
  workoutTypes: poolToArray<IWorkoutType, Pool<IWorkoutType>>(WorkoutTypes),
  fasciaDevices: poolToArray<IDevice, Pool<IDevice>>(FasciaDevices),
  powerDevices: poolToArray<IDevice, Pool<IDevice>>(PowerDevices),
  stretchingDevices: [],
};
