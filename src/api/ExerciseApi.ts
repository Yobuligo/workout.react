import { ExerciseMeta, IExercise } from "../shared/model/exercise/IExercise";
import { Repository } from "./core/Repository";

export class ExerciseApi extends Repository<IExercise> {
  constructor() {
    super(ExerciseMeta);
  }
}
