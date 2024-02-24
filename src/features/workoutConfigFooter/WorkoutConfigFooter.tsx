import { FooterButton } from "../../components/footerButton/FooterButton";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IWorkoutConfigFooterProps } from "./IWorkoutConfigFooterProps";

export const WorkoutConfigFooter: React.FC<IWorkoutConfigFooterProps> = (
  props
) => {
  const { t } = useTranslation();

  return (
    <FooterButton
      caption={t(texts.workoutConfigFooter.captionGenerateWorkout)}
      onClick={props.onGenerateWorkout}
    />
  );
};
