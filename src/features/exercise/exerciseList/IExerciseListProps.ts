import { IDevice } from "../../../shared/model/device/IDevice";
import { IExercise } from "../../../shared/model/exercise/IExercise";

export interface IExerciseListProps {
  /**
   * Consider {@link exercises} which require one of the following device
   */
  devices: IDevice[];

  exercises: IExercise[];
}
