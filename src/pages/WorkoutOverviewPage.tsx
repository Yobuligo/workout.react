import { useNavigate } from "react-router-dom";
import { Page } from "../components/pages/Page";
import { WorkoutOverview } from "../features/workoutOverview/WorkoutOverview";
import { WorkoutOverviewFooter } from "../features/workoutOverviewFooter/WorkoutOverviewFooter";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { Routes } from "../routes/Routes";
import { WorkoutType } from "../shared/types/WorkoutType";

export const WorkoutOverviewPage: React.FC = () => {
  const { t } = useTranslation();
  const workoutType = useRouteParam<WorkoutType>("workout-type");
  const navigate = useNavigate();

  const onStartWorkout = () =>
    navigate(Routes.workout.toPath({ "workout-type": workoutType }));

  return (
    <Page
      footer={<WorkoutOverviewFooter onStartWorkout={onStartWorkout} />}
      navigateBackPath={Routes.workoutConfig.toPath({
        "workout-type": workoutType,
      })}
      title={t(texts.workoutOverviewPage.title)}
      subTitle={t(texts.workoutOverviewPage.subtitle)}
    >
      <WorkoutOverview />
    </Page>
  );
};
