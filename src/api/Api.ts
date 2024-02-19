import { DeviceApi } from "./DeviceApi";
import { ExerciseApi } from "./ExerciseApi";
import { ExerciseTypeApi } from "./ExerciseTypeApi";

export const Api = {
  device: new DeviceApi(),
  exercise: new ExerciseApi(),
  exerciseType: new ExerciseTypeApi(),
};
