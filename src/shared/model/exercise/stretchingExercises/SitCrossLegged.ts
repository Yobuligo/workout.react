import { texts } from "../../../../i18n/texts";
import { nextId } from "../../../../utils/nextId";
import { Difficulty } from "../../../types/Difficulty";
import { IImage } from "../../../types/IImage";
import { MuscleGroup } from "../../../types/MuscleGroup";
import { WorkoutType } from "../../../types/WorkoutType";
import { IDevice } from "../IDevice";
import { IExercise } from "../IExercise";

export class SitCrossLegged implements IExercise {
  devices?: IDevice[] | undefined = [];
  difficulty: Difficulty = Difficulty.EASY;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [MuscleGroup.BACK];
  type: WorkoutType = WorkoutType.STRETCH;
  id: string = nextId();
  title: string = texts.stretchExercises.sitCrossLegged;
  description: string = texts.stretchExercises.sitCrossLegged;
}
