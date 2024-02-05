import { FooterButton } from "../../components/footerButton/FooterButton";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";

export const WorkoutFooter: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <FooterButton caption={t(texts.workoutFooter.captionGenerateWorkout)} />
  );
};
