import { useState } from "react";
import { Api } from "../api/Api";
import { Page } from "../components/pages/Page";
import { ExerciseList } from "../features/exercise/exerciseList/ExerciseList";
import { useInitialize } from "../hooks/useInitialize";
import { useRouteParam } from "../hooks/useRouteParam";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { IExercise } from "../shared/model/exercise/IExercise";
import { WorkoutType } from "../shared/types/WorkoutType";

export const ExerciseListPage: React.FC = () => {
  const workoutType = useRouteParam<WorkoutType>("workout-type");
  const { t } = useTranslation();
  const [exercises, setExercises] = useState<IExercise[]>([]);

  useInitialize(async () => {
    const exercises = await Api.exercise.findByWorkoutType(workoutType);
    setExercises(exercises);
  });

  return (
    <Page title={t(texts.exerciseListPage.title)}>
      <ExerciseList exercises={exercises} />
    </Page>
  );
};
