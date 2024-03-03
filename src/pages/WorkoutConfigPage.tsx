import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Athlete } from "../assets/plank.svg";
import { FooterButton } from "../components/footerButton/FooterButton";
import { Page } from "../components/pages/Page";
import { AppContext } from "../context/AppContext";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
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
  const context = useContext(AppContext);

  const onGenerateWorkout = () => {
    context.selectedWorkout.setValue(undefined);
    navigate(Routes.workoutOverview.toPath({ "workout-type": workoutType }));
  };

  return (
    <Page
      footer={
        <FooterButton
          caption={t(texts.workoutConfigFooter.captionGenerateWorkout)}
          onClick={onGenerateWorkout}
        />
      }
      subTitle={t(texts.workoutConfigPage.subTitle)}
      title={t(texts.workoutConfigPage.title)}
      navigateBackPath={Routes.workoutTypePage.toPath()}
    >
      <DeviceSelectorList />
      <Athlete className={styles.athlete} />
    </Page>
  );
};
