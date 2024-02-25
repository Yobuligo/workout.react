import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { Difficulty } from "../../types/Difficulty";
import { MuscleGroup } from "../../types/MuscleGroup";
import { WorkoutType } from "../../types/WorkoutType";
import { configureExercises } from "./configureExercises";

export const PowerExercises = configureExercises({
  kettleBellDeadLift: {
    description: texts.powerExercises.kettleBellDeadLift,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK, MuscleGroup.LEGS],
    title: texts.powerExercises.kettleBellDeadLift,
    type: WorkoutType.POWER,
  },
  kettleBellGobletSquat: {
    description: texts.powerExercises.kettleBellGobletSquat,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS, MuscleGroup.ARMS],
    title: texts.powerExercises.kettleBellGobletSquat,
    type: WorkoutType.POWER,
  },
  kettleBellSumoDeadLiftHighPull: {
    description: texts.powerExercises.kettleBellSumoDeadLiftHighPull,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.ARMS,
      MuscleGroup.SHOULDER,
      MuscleGroup.LEGS,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.kettleBellSumoDeadLiftHighPull,
    type: WorkoutType.POWER,
  },
  kettleBellSwing: {
    description: texts.powerExercises.kettleBellSwing,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.BACK,
      MuscleGroup.LEGS,
      MuscleGroup.CORE,
      MuscleGroup.SHOULDER,
    ],
    title: texts.powerExercises.kettleBellSwing,
    type: WorkoutType.POWER,
  },
  pushUp: {
    description: texts.powerExercises.pushup,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.ARMS,
      MuscleGroup.CHEST,
      MuscleGroup.SHOULDER,
      MuscleGroup.CORE,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.pushup,
    type: WorkoutType.POWER,
  },
});
