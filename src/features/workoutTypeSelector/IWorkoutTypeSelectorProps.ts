import { IWorkoutType } from "../../shared/model/exercise/IWorkoutType";

export interface IWorkoutTypeSelectorProps {
  onSelect?: (workoutType: IWorkoutType) => void;
}
