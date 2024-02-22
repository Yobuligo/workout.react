import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/pages/Page";
import { AppContext } from "../../context/AppContext";
import { WorkoutTypeSelector } from "../../features/workoutTypeSelector/WorkoutTypeSelector";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { Routes } from "../../routes/Routes";
import { IWorkoutType } from "../../shared/model/exercise/IWorkoutType";

export const WorkoutTypePage: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const onSelectWorkoutType = (workoutType: IWorkoutType) => {
    context.selectedWorkoutType.setValue(workoutType);
    navigate(Routes.workoutConfig.toPath({ "workout-type": workoutType.type }));
  };

  return (
    <Page
      title={t(texts.workoutTypePage.title)}
      subTitle={t(texts.workoutTypePage.subTitle)}
    >
      <WorkoutTypeSelector onSelect={onSelectWorkoutType} />
    </Page>
  );
};
