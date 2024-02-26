import { FasciaDevices } from "../../shared/model/device/FasciaDevices";
import { IDevice } from "../../shared/model/device/IDevice";
import { PowerDevices } from "../../shared/model/device/PowerDevices";
import { PowerExercises } from "../../shared/model/exercise/PowerExercises";
import { WorkoutTypes } from "../../shared/model/workout/workoutTypes/WorkoutTypes";
import { Pool } from "../../shared/types/Pool";
import { poolToArray } from "../../shared/utils/poolToArray";
import { IWorkoutType } from "./../../shared/model/exercise/IWorkoutType";

export const db = {
  devices: poolToArray<IDevice, Pool<IDevice>>(PowerDevices),
  exercises: [PowerExercises.pushUp],
  workoutTypes: poolToArray<IWorkoutType, Pool<IWorkoutType>>(WorkoutTypes),
  fasciaDevices: poolToArray<IDevice, Pool<IDevice>>(FasciaDevices),
  powerDevices: poolToArray<IDevice, Pool<IDevice>>(PowerDevices),
  stretchingDevices: [],
};
