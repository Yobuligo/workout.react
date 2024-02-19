import { IExerciseType } from "../../shared/model/exercise/IExerciseType";

export interface IExerciseTypeSelectorProps {
  onSelect?: (exerciseType: IExerciseType) => void;
}
