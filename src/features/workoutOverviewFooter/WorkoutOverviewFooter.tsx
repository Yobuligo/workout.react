import { FooterButton } from "../../components/footerButton/FooterButton";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IWorkoutOverviewFooterProps } from "./IWorkoutOverviewFooterProps";

export const WorkoutOverviewFooter: React.FC<IWorkoutOverviewFooterProps> = (
  props
) => {
  const { t } = useTranslation();

  return (
    <FooterButton
      caption={t(texts.workoutFooter.startWorkout)}
      onClick={props.onStartWorkout}
    />
  );
};
