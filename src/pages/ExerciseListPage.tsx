import { useState } from "react";
import { Page } from "../components/pages/Page";
import { ExerciseList } from "../features/exercise/exerciseList/ExerciseList";
import { useInitialize } from "../hooks/useInitialize";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { IExercise } from "../shared/model/exercise/IExercise";

export const ExerciseListPage: React.FC = () => {
  const workoutType = useRouteParam("workout-type");
  const { t } = useTranslation();
  const [exercises, setExercises] = useState<IExercise[]>([]);

  useInitialize(() => {
    
  });

  return (
    <Page title={t(texts.exerciseListPage.title)}>
      <ExerciseList exercises={exercises} />
    </Page>
  );
};
