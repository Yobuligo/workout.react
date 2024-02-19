import { Difficulty } from "../../shared/types/Difficulty";
import { ExerciseType } from "../../shared/types/ExerciseType";
import { MuscleGroup } from "../../shared/types/MuscleGroup";

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
      type: ExerciseType.POWER,
      muscleGroups: [
        MuscleGroup.ARMS,
        MuscleGroup.CHEST,
        MuscleGroup.SHOULDER,
        MuscleGroup.CORE,
        MuscleGroup.BACK,
      ],
    },
  ],
  exerciseTypes: [
    { id: "1", exerciseType: ExerciseType.FASCIA, description: "Facia" },
    { id: "2", exerciseType: ExerciseType.POWER, description: "Power" },
    { id: "3", exerciseType: ExerciseType.STRETCH, description: "Stretching" },
  ],
};
