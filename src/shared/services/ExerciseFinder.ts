import { IDevice } from "../model/device/IDevice";
import { ExercisePool } from "../model/exercise/ExercisePool";
import { IExercise } from "../model/exercise/IExercise";
import { MuscleGroup } from "./../types/MuscleGroup";
import { IExerciseFinder } from "./IExerciseFinder";

export class ExerciseFinder<TExercisePool extends ExercisePool>
  implements IExerciseFinder
{
  private registry: Map<MuscleGroup, IExercise[]> = new Map();
  private needsGroupExercises = true;

  constructor(private exercisePool: TExercisePool) {}

  findByMuscleGroup(
    muscleGroup: MuscleGroup,
    availableDevices?: IDevice[]
  ): IExercise {
    this.groupExercises();

    const exercises = this.findPotentialExercises(
      muscleGroup,
      availableDevices
    );
    const index = Math.floor(Math.random() * exercises.length);
    const exercise = exercises[index];
    if (!exercise) {
      throw new Error(
        `Error while finding exercise. No exercise found for '${muscleGroup}'. '${index}' is not valid index`
      );
    }

    return exercises[index];
  }

  private findPotentialExercises(
    muscleGroup: MuscleGroup,
    availableDevices?: IDevice[]
  ): IExercise[] {
    const exercises: IExercise[] = [];
    const registeredExercises = this.registry.get(muscleGroup) ?? [];
    registeredExercises.forEach((exercise) => {
      if (this.doesMatch(exercise, availableDevices)) {
        exercises.push(exercise);
      }
    });
    return exercises;
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

  private doesMatch(
    exercise: IExercise,
    availableDevices?: IDevice[]
  ): boolean {
    // exercises, which doesn't need any device match
    if (!exercise.devices || exercise.devices.length === 0) {
      return true;
    }

    // each other exercise need a device. If no device is available, the exercise doesn't match
    if (!availableDevices || availableDevices.length === 0) {
      return false;
    }

    // check if devices for exercise and available devices match
    for (const device of exercise.devices) {
      const index = availableDevices.findIndex(
        (availableDevice) => device.id === availableDevice.id
      );
      if (index === -1) {
        return false;
      }
    }

    return true;
  }
}
