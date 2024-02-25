import { texts } from "../../../../i18n/texts";
import { nextId } from "../../../../utils/nextId";
import { Difficulty } from "../../../types/Difficulty";
import { IImage } from "../../../types/IImage";
import { MuscleGroup } from "../../../types/MuscleGroup";
import { WorkoutType } from "../../../types/WorkoutType";
import { IDevice } from "../IDevice";
import { IExercise } from "../IExercise";

export class KettleBellSwing implements IExercise {
  devices?: IDevice[] | undefined = [];
  difficulty: Difficulty = Difficulty.EASY;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [
    MuscleGroup.BACK,
    MuscleGroup.LEGS,
    MuscleGroup.CORE,
    MuscleGroup.SHOULDER,
  ];
  type: WorkoutType = WorkoutType.POWER;
  id: string = nextId();
  title: string = texts.powerExercises.kettleBellSwing;
  description: string = texts.powerExercises.kettleBellSwing;
}
