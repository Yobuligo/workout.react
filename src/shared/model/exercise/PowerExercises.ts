import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { Difficulty } from "../../types/Difficulty";
import { MuscleGroup } from "../../types/MuscleGroup";
import { WorkoutType } from "../../types/WorkoutType";
import { configureExercises } from "./configureExercises";

export const PowerExercises = configureExercises({
  bicycleCrunches: {
    description: texts.powerExercises.bicycleCrunches,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.CORE, MuscleGroup.LEGS],
    title: texts.powerExercises.bicycleCrunches,
    type: WorkoutType.POWER,
  },
  burpee: {
    description: texts.powerExercises.burpee,
    devices: [],
    difficulty: Difficulty.HARD,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.LEGS,
      MuscleGroup.ARMS,
      MuscleGroup.CHEST,
      MuscleGroup.SHOULDER,
      MuscleGroup.CORE,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.burpee,
    type: WorkoutType.POWER,
  },
  downUp: {
    description: texts.powerExercises.downUpDescription,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.LEGS,
      MuscleGroup.ARMS,
      MuscleGroup.SHOULDER,
      MuscleGroup.CORE,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.downUp,
    type: WorkoutType.POWER,
  },
  forwardLunge: {
    description: texts.powerExercises.forwardLungeDescription,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.forwardLunge,
    type: WorkoutType.POWER,
  },
  highKnees: {
    description: texts.powerExercises.highKnees,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.highKnees,
    type: WorkoutType.POWER,
  },
  hollowBody: {
    description: texts.powerExercises.hollowBody,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.CORE],
    title: texts.powerExercises.hollowBody,
    type: WorkoutType.POWER,
  },
  jumpingJack: {
    description: texts.powerExercises.jumpingJack,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS, MuscleGroup.ARMS, MuscleGroup.SHOULDER],
    title: texts.powerExercises.jumpingJack,
    type: WorkoutType.POWER,
  },
  jumpingRope: {
    description: texts.powerExercises.jumpingRope,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.LEGS,
      MuscleGroup.ARMS,
      MuscleGroup.SHOULDER,
      MuscleGroup.CORE,
    ],
    title: texts.powerExercises.jumpingRope,
    type: WorkoutType.POWER,
  },
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
  lateralJumpAndTap: {
    description: texts.powerExercises.lateralJumpAndTap,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.lateralJumpAndTap,
    type: WorkoutType.POWER,
  },
  lunge: {
    description: texts.powerExercises.lungeDescription,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.lunge,
    type: WorkoutType.POWER,
  },
  lungeJump: {
    description: texts.powerExercises.lungeJump,
    devices: [],
    difficulty: Difficulty.HARD,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.lungeJump,
    type: WorkoutType.POWER,
  },
  mountainClimber: {
    description: texts.powerExercises.mountainClimber,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.SHOULDER,
      MuscleGroup.CORE,
      MuscleGroup.LEGS,
      MuscleGroup.ARMS,
      MuscleGroup.CHEST,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.mountainClimber,
    type: WorkoutType.POWER,
  },
  pelvicLift: {
    description: texts.powerExercises.pelvicLiftDescription,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.pelvicLift,
    type: WorkoutType.POWER,
  },
  pelvicLiftSingleLeg: {
    description: texts.powerExercises.pelvicLiftSingleLegDescription,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.pelvicLiftSingleLeg,
    type: WorkoutType.POWER,
  },
  plank: {
    description: texts.powerExercises.plank,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.CORE,
      MuscleGroup.SHOULDER,
      MuscleGroup.ARMS,
      MuscleGroup.LEGS,
      MuscleGroup.CHEST,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.plank,
    type: WorkoutType.POWER,
  },
  pushUp: {
    description: texts.powerExercises.pushUp,
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
    title: texts.powerExercises.pushUp,
    type: WorkoutType.POWER,
  },
  pushUpHigh: {
    description: texts.powerExercises.pushUpHigh,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.ARMS,
      MuscleGroup.CHEST,
      MuscleGroup.SHOULDER,
      MuscleGroup.CORE,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.pushUpHigh,
    type: WorkoutType.POWER,
  },
  russianTwist: {
    description: texts.powerExercises.russianTwist,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.CORE],
    title: texts.powerExercises.russianTwist,
    type: WorkoutType.POWER,
  },
  scale: {
    description: texts.powerExercises.scale,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS, MuscleGroup.SHOULDER, MuscleGroup.CORE],
    title: texts.powerExercises.scale,
    type: WorkoutType.POWER,
  },
  shoulderTaps: {
    description: texts.powerExercises.shoulderTaps,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.SHOULDER,
      MuscleGroup.ARMS,
      MuscleGroup.CORE,
      MuscleGroup.CHEST,
      MuscleGroup.BACK,
    ],
    title: texts.powerExercises.shoulderTaps,
    type: WorkoutType.POWER,
  },
  sidePlank: {
    description: texts.powerExercises.sidePlank,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [
      MuscleGroup.CORE,
      MuscleGroup.SHOULDER,
      MuscleGroup.ARMS,
      MuscleGroup.LEGS,
    ],
    title: texts.powerExercises.sidePlank,
    type: WorkoutType.POWER,
  },
  sitUp: {
    description: texts.powerExercises.sitUp,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.CORE],
    title: texts.powerExercises.sitUp,
    type: WorkoutType.POWER,
  },
  skipping: {
    description: texts.powerExercises.skippingDescription,
    devices: [],
    difficulty: Difficulty.HARD,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.skipping,
    type: WorkoutType.POWER,
  },
  squat: {
    description: texts.powerExercises.squat,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.LEGS],
    title: texts.powerExercises.squat,
    type: WorkoutType.POWER,
  },
  superman: {
    description: texts.powerExercises.superman,
    devices: [],
    difficulty: Difficulty.EASY,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.BACK, MuscleGroup.SHOULDER, MuscleGroup.CORE],
    title: texts.powerExercises.superman,
    type: WorkoutType.POWER,
  },
  tricepDip: {
    description: texts.powerExercises.tricepDip,
    devices: [],
    difficulty: Difficulty.MEDIUM,
    id: nextId(),
    image: undefined,
    muscleGroups: [MuscleGroup.ARMS],
    title: texts.powerExercises.tricepDip,
    type: WorkoutType.POWER,
  },
});