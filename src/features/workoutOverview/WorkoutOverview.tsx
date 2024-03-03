import { useContext } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { AppContext } from "../../context/AppContext";
import { IWorkoutConfig } from "../../shared/model/workout/workout/IWorkoutConfig";
import { checkNotNull } from "../../utils/checkNotNull";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";
import styles from "./WorkoutOverview.module.scss";

export const WorkoutOverview: React.FC = () => {
  const context = useContext(AppContext);

  const createWorkoutConfig = (): IWorkoutConfig => {
    return {
      devices: context.selectedDevices.items,
      workoutType: checkNotNull(context.selectedWorkoutType.value).type,
    };
  };

  const items = context.selectedWorkout.value?.blocks.map((workoutBlock) => (
    <WorkoutBlock key={workoutBlock.id} workoutBlock={workoutBlock} />
  ));

  return (
    <AsyncLoad
      load={async () => {
        // only generate if workout was not yet generated
        if (context.selectedWorkout.value === undefined) {
          const workout = await Api.workout.generateWorkout(
            createWorkoutConfig()
          );
          context.selectedWorkout.setValue(workout);
        }
      }}
    >
      <div className={styles.workoutOverview}>{items}</div>
    </AsyncLoad>
  );
};
