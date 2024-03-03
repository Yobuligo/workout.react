import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";
import styles from "./WorkoutOverview.module.scss";

export const WorkoutOverview: React.FC = () => {
  const context = useContext(AppContext);

  const items = context.selectedWorkout.value?.blocks.map((workoutBlock) => (
    <WorkoutBlock key={workoutBlock.id} workoutBlock={workoutBlock} />
  ));

  return <div className={styles.workoutOverview}>{items}</div>;
};
