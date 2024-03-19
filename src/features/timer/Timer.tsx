import { useInitialize } from "../../hooks/useInitialize";
import { useRenderSeconds } from "../../hooks/useRenderSeconds";
import { useTimer } from "../../hooks/useTimer";
import { ITimerProps } from "./ITimerProps";

export const Timer: React.FC<ITimerProps> = (props) => {
  const timer = useTimer(props.seconds);
  const renderSeconds = useRenderSeconds();

  useInitialize(() => {
    timer.onFinish(() => {
      console.log(`Timer Finished`);
    });

    timer.start();
  });

  return (
    <>
      {renderSeconds(timer.remainingSeconds)}
      <div>
        <button onClick={() => timer.start()}>Start</button>
      </div>
      <div>
        <button onClick={() => timer.stop()}>Stop</button>
      </div>
      <div>
        <button onClick={() => timer.reset()}>Reset</button>
      </div>
    </>
  );
};
