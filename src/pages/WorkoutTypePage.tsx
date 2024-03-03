import { useNavigate } from "react-router-dom";
import { Page } from "../components/pages/Page";
import { WorkoutTypeSelector } from "../features/workoutTypeSelector/WorkoutTypeSelector";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { Routes } from "../routes/Routes";
import { IWorkoutType } from "../shared/model/exercise/IWorkoutType";

export const WorkoutTypePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSelectWorkoutType = (workoutType: IWorkoutType) => {
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
