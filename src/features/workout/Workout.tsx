import { useContext, useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { AppContext } from "../../context/AppContext";
import { IWorkout } from "../../shared/model/workout/IWorkout";
import { IWorkoutConfig } from "../../shared/model/workout/IWorkoutConfig";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";
import styles from "./Workout.module.scss";

export const Workout: React.FC = () => {
  const context = useContext(AppContext);
  const [workout, setWorkout] = useState<IWorkout | undefined>(undefined);

  const createWorkoutConfig = (): IWorkoutConfig => {
    return { devices: context.selectedDevices.items };
  };

  const items = workout?.blocks.map((workoutBlock) => (
    <WorkoutBlock key={workoutBlock.id} workoutBlock={workoutBlock} />
  ));

  return (
    <AsyncLoad
      load={async () => {
        const workout = await Api.workout.generateWorkout(
          createWorkoutConfig()
        );
        setWorkout(workout);
      }}
    >
      <div className={styles.workout}>{items}</div>
    </AsyncLoad>
  );
};
