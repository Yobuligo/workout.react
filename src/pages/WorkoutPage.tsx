import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../components/pages/Page";
import { AppContext } from "../context/AppContext";
import { Workout } from "../features/workout/Workout";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { Routes } from "../routes/Routes";
import { WorkoutType } from "../shared/types/WorkoutType";
import { TimerPanel } from "../features/timerPanel/timerPanel/TimerPanel";

export const WorkoutPage: React.FC = () => {
  const { t } = useTranslation();
  const workoutType = useRouteParam<WorkoutType>("workout-type");
  const context = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context.selectedWorkout.value === undefined) {
      navigate(Routes.workoutConfig.toPath({ "workout-type": workoutType }));
    }
  }, [context.selectedWorkout.value, navigate, workoutType]);

  return (
    <Page
      navigateBackPath={Routes.workoutOverview.toPath({
        "workout-type": workoutType,
      })}
      title={t(texts.workoutPage.title)}
      subTitle={t(texts.workoutPage.subtitle)}
      footer={<TimerPanel seconds={900}/>}
    >
      {context.selectedWorkout.value && (
        <Workout workout={context.selectedWorkout.value} />
      )}
    </Page>
  );
};
