import { texts } from "../../../../i18n/texts";
import { nextId } from "../../../../utils/nextId";
import { Difficulty } from "../../../types/Difficulty";
import { IImage } from "../../../types/IImage";
import { MuscleGroup } from "../../../types/MuscleGroup";
import { WorkoutType } from "../../../types/WorkoutType";
import { IDevice } from "../IDevice";
import { IExercise } from "../IExercise";

export class KettleBellGobletSquat implements IExercise {
  devices?: IDevice[] | undefined = [];
  difficulty: Difficulty = Difficulty.MEDIUM;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [MuscleGroup.LEGS, MuscleGroup.ARMS];
  type: WorkoutType = WorkoutType.POWER;
  id: string = nextId();
  title: string = texts.powerExercises.kettleBellGobletSquat;
  description: string = texts.powerExercises.kettleBellGobletSquat;
}
