import { useEffect } from "react";
import useSound from "use-sound";
import { Footer } from "../../components/footer/Footer";
import { useRenderSeconds } from "../../hooks/useRenderSeconds";
import { useTimer } from "../../hooks/useTimer";
import { TimerPanel } from "../timerPanel/timerPanel/TimerPanel";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";
import { IWorkoutProps } from "./IWorkoutProps";
import styles from "./Workout.module.scss";

export const Workout: React.FC<IWorkoutProps> = (props) => {
  const initialSeconds = 900;
  const renderSeconds = useRenderSeconds();
  const timer = useTimer(initialSeconds);
  const [playSound] = useSound("/assets/sounds/gong.mp3");

  const items = props.workout.blocks.map((workoutBlock) => (
    <WorkoutBlock key={workoutBlock.id} workoutBlock={workoutBlock} />
  ));

  useEffect(() => {
    const unregisterHandler = timer.onFinish(() => playSound());
    return () => {
      unregisterHandler();
    };
  }, [playSound, timer]);

  return (
    <>
      <div className={styles.workout}>{items}</div>
      <Footer>
        <h1 className={styles.time}>{renderSeconds(timer.remainingSeconds)}</h1>
        <TimerPanel timer={timer} />
      </Footer>
    </>
  );
};
