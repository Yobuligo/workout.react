import { DeviceApi } from "./DeviceApi";
import { ExerciseApi } from "./ExerciseApi";
import { WorkoutApi } from "./WorkoutApi";
import { WorkoutTypeApi } from "./WorkoutTypeApi";

export const Api = {
  device: new DeviceApi(),
  exercise: new ExerciseApi(),
  workout: new WorkoutApi(),
  workoutType: new WorkoutTypeApi(),
};
