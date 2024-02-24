import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { Difficulty } from "../../types/Difficulty";
import { IImage } from "../../types/IImage";
import { MuscleGroup } from "../../types/MuscleGroup";
import { WorkoutType } from "../../types/WorkoutType";
import { IDevice } from "../exercise/IDevice";
import { IExercise } from "../exercise/IExercise";

export class Pushup implements IExercise {
  devices?: IDevice[] | undefined = undefined;
  difficulty: Difficulty = Difficulty.MEDIUM;
  image?: IImage | undefined = undefined;
  muscleGroups: MuscleGroup[] = [
    MuscleGroup.ARMS,
    MuscleGroup.CHEST,
    MuscleGroup.SHOULDER,
    MuscleGroup.CORE,
    MuscleGroup.BACK,
  ];
  type: WorkoutType = WorkoutType.POWER;
  id: string = nextId();
  name: string = texts.powerExercises.pushup;
  description: string = texts.powerExercises.pushup;
}
