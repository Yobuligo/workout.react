import { DeviceApi } from "./DeviceApi";
import { ExerciseApi } from "./ExerciseApi";

export const Api = {
  device: new DeviceApi(),
  exercise: new ExerciseApi(),
};
