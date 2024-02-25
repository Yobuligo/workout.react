import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { Difficulty } from "../../types/Difficulty";
import { IImage } from "../../types/IImage";
import { MuscleGroup } from "../../types/MuscleGroup";
import { WorkoutType } from "../../types/WorkoutType";
import { IDevice } from "../exercise/IDevice";
import { IExercise } from "../exercise/IExercise";

export class KettleBellSumoDeadLiftHighPull implements IExercise {
  devices?: IDevice[] | undefined = [];
  difficulty: Difficulty = Difficulty.MEDIUM;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [
    MuscleGroup.ARMS,
    MuscleGroup.SHOULDER,
    MuscleGroup.LEGS,
    MuscleGroup.BACK,
  ];
  type: WorkoutType = WorkoutType.POWER;
  id: string = nextId();
  title: string = texts.powerExercises.kettleBellSumoDeadLiftHighPull;
  description: string = texts.powerExercises.kettleBellSumoDeadLiftHighPull;
}
