import { useNavigate } from "react-router-dom";
import { ReactComponent as Athlete } from "../assets/plank.svg";
import { Page } from "../components/pages/Page";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
import { WorkoutConfigFooter } from "../features/workoutConfigFooter/WorkoutConfigFooter";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { Routes } from "../routes/Routes";
import { WorkoutType } from "../shared/types/WorkoutType";
import styles from "./WorkoutConfigPage.module.scss";

export const WorkoutConfigPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const workoutType = useRouteParam<WorkoutType>("workout-type");

  const onGenerateWorkout = () =>
    navigate(Routes.workoutOverview.toPath({ "workout-type": workoutType }));

  return (
    <Page
      footer={<WorkoutConfigFooter onGenerateWorkout={onGenerateWorkout} />}
      subTitle={t(texts.workoutConfigPage.subTitle)}
      title={t(texts.workoutConfigPage.title)}
      navigateBackPath={Routes.workoutTypePage.toPath()}
    >
      <DeviceSelectorList />
      <Athlete className={styles.athlete} />
    </Page>
  );
};
