import { PowerExercises } from "../../shared/model/exercise/PowerExercises";
import { WorkoutType } from "../../shared/types/WorkoutType";

export const db = {
  devices: [
    { id: "1", title: "Balance board" },
    { id: "2", title: "Dumbbell" },
    { id: "3", title: "Kettle bell" },
    { id: "4", title: "Resistance band" },
    { id: "5", title: "Rope" },
    { id: "6", title: "Weighted vest" },
  ],
  exercises: [PowerExercises.pushUp],
  workoutTypes: [
    { id: "1", type: WorkoutType.FASCIA, description: "Fascia" },
    { id: "2", type: WorkoutType.POWER, description: "Power" },
    { id: "3", type: WorkoutType.STRETCHING, description: "Stretching" },
  ],

  fasciaDevices: [{ id: "7", title: "Fascia role" }],
  powerDevices: [
    { id: "1", title: "Balance board" },
    { id: "2", title: "Dumbbell" },
    { id: "3", title: "Kettle bell" },
    { id: "4", title: "Resistance band" },
    { id: "5", title: "Rope" },
    { id: "6", title: "Weighted vest" },
  ],
  stretchingDevices: [],
};
