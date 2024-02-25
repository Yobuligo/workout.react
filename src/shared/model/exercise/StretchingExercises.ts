import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { Difficulty } from "../../types/Difficulty";
import { MuscleGroup } from "../../types/MuscleGroup";
import { WorkoutType } from "../../types/WorkoutType";
import { configureExercises } from "./configureExercises";

export const StretchingExercises = configureExercises({
  butterFlyStretch: {
    description: texts.stretchExercises.butterflyStretchDescription,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.HIP, MuscleGroup.LEGS],
    title: texts.stretchExercises.butterflyStretch,
    type: WorkoutType.STRETCH,
  },
  cobra: {
    description: texts.stretchExercises.cobraDescription,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK],
    title: texts.stretchExercises.cobra,
    type: WorkoutType.STRETCH,
  },
  lowLunge: {
    description: texts.stretchExercises.lowLungeDescription,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.HIP, MuscleGroup.LEGS],
    title: texts.stretchExercises.lowLunge,
    type: WorkoutType.STRETCH,
  },
  reclinedTwist: {
    description: texts.stretchExercises.reclinedTwistDescription,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK],
    title: texts.stretchExercises.reclinedTwist,
    type: WorkoutType.STRETCH,
  },
  reclinedHeroPose: {
    description: texts.stretchExercises.reclinedHeroPoseDescription,
    devices: undefined,
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS, MuscleGroup.BACK],
    title: texts.stretchExercises.reclinedHeroPose,
    type: WorkoutType.STRETCH,
  },
  sitCrossLegged: {
    description: texts.stretchExercises.sitCrossLegged,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK],
    title: texts.stretchExercises.sitCrossLegged,
    type: WorkoutType.STRETCH,
  },
  sitCrossLeggedToTheSide: {
    description: texts.stretchExercises.sitCrossLeggedToTheSide,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK],
    title: texts.stretchExercises.sitCrossLeggedToTheSide,
    type: WorkoutType.STRETCH,
  },
  sitCrossLeggedWithSoleOfFoot: {
    description: texts.stretchExercises.sitCrossLeggedWithSoleOfFoot,
    devices: undefined,
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK],
    title: texts.stretchExercises.sitCrossLeggedWithSoleOfFoot,
    type: WorkoutType.STRETCH,
  },
});
