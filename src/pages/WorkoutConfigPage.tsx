import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../api/Api";
import { FooterButton } from "../components/footerButton/FooterButton";
import { Page } from "../components/pages/Page";
import { AppContext } from "../context/AppContext";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { Routes } from "../routes/Routes";
import { IWorkoutConfig } from "../shared/model/workout/workout/IWorkoutConfig";
import { WorkoutType } from "../shared/types/WorkoutType";

export const WorkoutConfigPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const workoutType = useRouteParam<WorkoutType>("workout-type");
  const context = useContext(AppContext);
  const [isGenerating, setIsGenerating] = useState(false);

  const createWorkoutConfig = (): IWorkoutConfig => {
    return {
      devices: context.selectedDevices.items,
      workoutType: workoutType,
    };
  };

  const onGenerateWorkout = async () => {
    setIsGenerating(true);
    const workout = await Api.workout.generateWorkout(createWorkoutConfig());
    context.selectedWorkout.setValue(workout);
    setIsGenerating(false);
    navigate(Routes.workoutOverview.toPath({ "workout-type": workoutType }));
  };

  return (
    <Page
      footer={
        <FooterButton
          caption={t(texts.workoutConfigFooter.captionGenerateWorkout)}
          displaySpinner={isGenerating}
          onClick={onGenerateWorkout}
        />
      }
      subTitle={t(texts.workoutConfigPage.subTitle)}
      title={t(texts.workoutConfigPage.title)}
      navigateBackPath={Routes.workoutTypePage.toPath()}
    >
      <DeviceSelectorList workoutType={workoutType} />
    </Page>
  );
};
