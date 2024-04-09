import { ExerciseMeta, IExercise } from "../shared/model/exercise/IExercise";
import { WorkoutType } from "../shared/types/WorkoutType";
import { Repository } from "./core/Repository";

export class ExerciseApi extends Repository<IExercise> {
  constructor() {
    super(ExerciseMeta);
  }

  findByWorkoutType(workoutType: WorkoutType): Promise<IExercise[]> {
    return this.findByFilter({ type: workoutType });
  }
}
