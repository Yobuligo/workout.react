import { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { useRenderSeconds } from "../../hooks/useRenderSeconds";
import { TimerPanel } from "../timerPanel/timerPanel/TimerPanel";
import { WorkoutBlock } from "../workoutBlock/WorkoutBlock";
import { IWorkoutProps } from "./IWorkoutProps";
import styles from "./Workout.module.scss";
import useSound from "use-sound";

export const Workout: React.FC<IWorkoutProps> = (props) => {
  // const workoutIterator: IWorkoutIterator = useMemo(
  //   () => new WorkoutIterator(props.workout),
  //   [props.workout]
  // );

  // const [workoutStep, setWorkoutStep] = useState<IWorkoutStep | undefined>(
  //   undefined
  // );

  const [seconds, setSeconds] = useState(900);
  const renderSeconds = useRenderSeconds();
  const [playSound] = useSound("/assets/sounds/gong.mp3");

  const items = props.workout.blocks.map((workoutBlock) => (
    <WorkoutBlock key={workoutBlock.id} workoutBlock={workoutBlock} />
  ));

  // const nextStep = () => {
  //   if (workoutIterator.hasNext) {
  //     const workoutStep = workoutIterator.next();
  //     setWorkoutStep(workoutStep);
  //   }
  // };

  // useInitialize(() => nextStep());

  return (
    <>
      <div className={styles.workout}>{items}</div>
      <Footer>
        <h3 className={styles.time}>{renderSeconds(seconds)}</h3>
        <TimerPanel
          seconds={10}
          onTick={(seconds) => setSeconds(seconds)}
          onFinish={() => {
            console.log("completed");
            playSound();
          }}
        />
      </Footer>
    </>
  );

  // return (
  //   <>
  //     {workoutStep && <WorkoutStep workoutStep={workoutStep} />}
  //   </>
  // );
};
