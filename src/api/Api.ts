import { DeviceApi } from "./DeviceApi";
import { ExerciseApi } from "./ExerciseApi";
import { WorkoutTypeApi } from "./WorkoutTypeApi";

export const Api = {
  device: new DeviceApi(),
  exercise: new ExerciseApi(),
  workoutType: new WorkoutTypeApi(),
};
