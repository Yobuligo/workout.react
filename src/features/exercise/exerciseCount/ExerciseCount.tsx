import useTranslation from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { IExerciseCountProps } from "./IExerciseCountProps";

export const ExerciseCount: React.FC<IExerciseCountProps> = (props) => {
  const { t } = useTranslation();
  return <>{t(texts.exerciseCount.text, { count: props.count })}</>;
};
