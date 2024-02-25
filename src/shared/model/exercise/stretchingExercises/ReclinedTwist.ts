import { texts } from "../../../../i18n/texts";
import { Difficulty } from "../../../types/Difficulty";
import { IImage } from "../../../types/IImage";
import { MuscleGroup } from "../../../types/MuscleGroup";
import { WorkoutType } from "../../../types/WorkoutType";
import { IDevice } from "../IDevice";
import { IExercise } from "../IExercise";
import { nextId } from "./../../../../utils/nextId";

export class ReclinedTwist implements IExercise {
  devices?: IDevice[] | undefined = undefined;
  difficulty: Difficulty = Difficulty.EASY;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [MuscleGroup.BACK];
  type: WorkoutType = WorkoutType.STRETCH;
  id: string = nextId();
  title: string = texts.stretchExercises.reclinedTwist;
  description: string = texts.stretchExercises.reclinedTwistDescription;
}
