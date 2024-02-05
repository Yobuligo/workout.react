import { Page } from "../components/pages/Page";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { IWorkoutPageProps } from "./IWorkoutPageProps";

export const WorkoutPage: React.FC<IWorkoutPageProps> = () => {
  const { t } = useTranslation();

  return <Page title={t(texts.workoutPage.title)}></Page>;
};
