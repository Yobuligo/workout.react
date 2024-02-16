import { Page } from "../components/pages/Page";
import { Workout } from "../features/workout/Workout";
import { WorkoutFooter } from "../features/workoutFooter/WorkoutFooter";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { IWorkoutPageProps } from "./IWorkoutPageProps";

export const WorkoutPage: React.FC<IWorkoutPageProps> = () => {
  const { t } = useTranslation();

  return (
    <Page
      footer={<WorkoutFooter />}
      navigateBackPath="/"
      title={t(texts.workoutPage.title)}
      subTitle={t(texts.workoutPage.subtitle)}
    >
      <Workout />
    </Page>
  );
};
