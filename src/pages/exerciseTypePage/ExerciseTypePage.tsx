import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/pages/Page";
import { AppContext } from "../../context/AppContext";
import { ExerciseTypeSelector } from "../../features/exerciseTypeSelector/ExerciseTypeSelector";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { Routes } from "../../routes/AppRouter";
import { IExerciseType } from "../../shared/model/exercise/IExerciseType";

export const ExerciseTypePage: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const onSelectExerciseType = (exerciseType: IExerciseType) => {
    context.selectedExerciseType.setValue(exerciseType);
    navigate(Routes.workoutConfig);
  };

  return (
    <Page
      title={t(texts.exerciseTypePage.title)}
      subTitle={t(texts.exerciseTypePage.subTitle)}
    >
      <ExerciseTypeSelector onSelect={onSelectExerciseType} />
    </Page>
  );
};
