import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useRouteParam } from "../../hooks/useRouteParam";
import { Routes } from "../../routes/Routes";
import { WorkoutType } from "../../shared/types/WorkoutType";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";
import styles from "./WorkoutOverview.module.scss";

export const WorkoutOverview: React.FC = () => {
  const context = useContext(AppContext);
  const workoutType = useRouteParam<WorkoutType>("workout-type");
  const navigate = useNavigate();

  useEffect(() => {
    // If page was reloaded, the selected workout, which was persisted in the context is gone
    // Therefor navigate back to the workout config page
    if (context.selectedWorkout.value === undefined) {
      navigate(Routes.workoutConfig.toPath({ "workout-type": workoutType }));
    }
  }, [context.selectedWorkout.value, navigate, workoutType]);

  const items = context.selectedWorkout.value?.blocks.map((workoutBlock) => (
    <WorkoutBlock key={workoutBlock.id} workoutBlock={workoutBlock} />
  ));

  return <div className={styles.workoutOverview}>{items}</div>;
};
