import { IWorkoutConfig } from "../shared/model/workout/IWorkoutConfig";
import { IWorkout, WorkoutMeta } from "./../shared/model/workout/IWorkout";
import { Repository } from "./core/Repository";

export class WorkoutApi extends Repository<IWorkout> {
  constructor() {
    super(WorkoutMeta);
  }

  generateWorkout(workoutConfig: IWorkoutConfig): Promise<IWorkout> {
    return this.post(`${this.url}/generate`, workoutConfig);
  }
}
