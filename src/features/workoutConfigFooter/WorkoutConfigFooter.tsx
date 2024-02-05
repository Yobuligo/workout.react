import { useNavigate } from "react-router-dom";
import { FooterButton } from "../../components/footerButton/FooterButton";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IWorkoutConfigFooterProps } from "./IWorkoutConfigFooterProps";

export const WorkoutConfigFooter: React.FC<IWorkoutConfigFooterProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onGenerateWorkout = () => navigate("/workout");

  return (
    <FooterButton
      caption={t(texts.workoutConfigFooter.captionGenerateWorkout)}
      onClick={onGenerateWorkout}
    />
  );
};
