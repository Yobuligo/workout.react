import { Difficulty } from "../../shared/types/Difficulty";
import { MuscleGroup } from "../../shared/types/MuscleGroup";
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
  exercises: [
    {
      id: "123",
      name: "Push-ups",
      description: "Push-ups",
      difficulty: Difficulty.MEDIUM,
      type: WorkoutType.POWER,
      muscleGroups: [
        MuscleGroup.ARMS,
        MuscleGroup.CHEST,
        MuscleGroup.SHOULDER,
        MuscleGroup.CORE,
        MuscleGroup.BACK,
      ],
    },
  ],
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
