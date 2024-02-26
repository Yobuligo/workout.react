import { texts } from "../../../../i18n/texts";
import { nextId } from "../../../../utils/nextId";
import { WorkoutType } from "../../../types/WorkoutType";
import { configureWorkoutTypes } from "./configureWorkoutTypes";

export const WorkoutTypes = configureWorkoutTypes({
  fascia: {
    id: nextId(),
    description: texts.workoutTypes.fascia,
    type: WorkoutType.FASCIA,
  },
  power: {
    id: nextId(),
    description: texts.workoutTypes.power,
    type: WorkoutType.POWER,
  },
  stretching: {
    id: nextId(),
    description: texts.workoutTypes.stretching,
    type: WorkoutType.STRETCHING,
  },
});
