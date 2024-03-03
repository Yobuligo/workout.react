import { Page } from "../components/pages/Page";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { Routes } from "../routes/Routes";
import { WorkoutType } from "../shared/types/WorkoutType";

export const WorkoutPage: React.FC = () => {
  const { t } = useTranslation();
  const workoutType = useRouteParam<WorkoutType>("workout-type");

  return (
    <Page
      navigateBackPath={Routes.workoutOverview.toPath({
        "workout-type": workoutType,
      })}
      title={t(texts.workoutPage.title)}
      subTitle={t(texts.workoutPage.subtitle)}
    >
      Hello World
    </Page>
  );
};
