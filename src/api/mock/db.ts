import { Pushup } from "../../shared/model/exercises/Pushup";
import { WorkoutType } from "../../shared/types/WorkoutType";

export const db = {
  devices: [
    { id: "1", name: "Balance board" },
    { id: "2", name: "Dumbbell" },
    { id: "3", name: "Kettle bell" },
    { id: "4", name: "Resistance band" },
    { id: "5", name: "Rope" },
    { id: "6", name: "Weighted vest" },
  ],
  exercises: [new Pushup()],
  workoutTypes: [
    { id: "1", type: WorkoutType.FASCIA, description: "Fascia" },
    { id: "2", type: WorkoutType.POWER, description: "Power" },
    { id: "3", type: WorkoutType.STRETCH, description: "Stretching" },
  ],

  fasciaDevices: [{ id: "7", name: "Fascia role" }],
  powerDevices: [
    { id: "1", name: "Balance board" },
    { id: "2", name: "Dumbbell" },
    { id: "3", name: "Kettle bell" },
    { id: "4", name: "Resistance band" },
    { id: "5", name: "Rope" },
    { id: "6", name: "Weighted vest" },
  ],
  stretchingDevices: [],
};
