import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { Difficulty } from "../../types/Difficulty";
import { IImage } from "../../types/IImage";
import { MuscleGroup } from "../../types/MuscleGroup";
import { WorkoutType } from "../../types/WorkoutType";
import { IDevice } from "../exercise/IDevice";
import { IExercise } from "../exercise/IExercise";

export class KettleBellDeadLift implements IExercise {
  devices?: IDevice[] | undefined = [];
  difficulty: Difficulty = Difficulty.EASY;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [MuscleGroup.BACK, MuscleGroup.LEGS];
  type: WorkoutType = WorkoutType.POWER;
  id: string = nextId();
  title: string = texts.powerExercises.kettleBellDeadLift;
  description: string = texts.powerExercises.kettleBellDeadLift;
}
