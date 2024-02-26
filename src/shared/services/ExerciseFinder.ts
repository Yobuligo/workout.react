import { ExercisePool } from "../model/exercise/ExercisePool";
import { IDevice } from "../model/device/IDevice";
import { IExercise } from "../model/exercise/IExercise";
import { MuscleGroup } from "../types/MuscleGroup";
import { IExerciseFinder } from "./IExerciseFinder";

export class ExerciseFinder<TExercisePool extends ExercisePool>
  implements IExerciseFinder
{
  private registry: Map<MuscleGroup, IExercise[]> = new Map();
  private needsGroupExercises = true;

  constructor(private exercisePool: TExercisePool) {}

  findByMuscleGroup(muscleGroup: MuscleGroup, devices: IDevice[]): IExercise {
    this.groupExercises();
    const exercises = this.registry.get(muscleGroup) ?? [];
    const index = Math.floor(Math.random() * exercises.length);
    const exercise = exercises[index];
    if (!exercise) {
      throw new Error(
        `Error while finding exercise. Exercise not found. '${index}' is not valid index`
      );
    }
    return exercises[index];
  }

  private groupExercises() {
    if (this.needsGroupExercises) {
      this.needsGroupExercises = false;
      for (const propName in this.exercisePool) {
        const exercise = this.exercisePool[propName];
        const muscleGroup = exercise.muscleGroups[0];
        const exercises = this.registry.get(muscleGroup) ?? [];
        exercises.push(exercise);
        this.registry.set(muscleGroup, exercises);
      }
    }
  }
}
