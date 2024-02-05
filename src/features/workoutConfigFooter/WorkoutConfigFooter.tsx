import { useNavigate } from "react-router-dom";
import { FooterButton } from "../../components/footerButton/FooterButton";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";

export const WorkoutConfigFooter: React.FC = () => {
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
