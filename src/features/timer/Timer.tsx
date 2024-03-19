import { useState } from "react";
import { useInitialize } from "../../hooks/useInitialize";
import { useRenderSeconds } from "../../hooks/useRenderSeconds";
import { useTimer } from "../../hooks/useTimer";
import { ITimerProps } from "./ITimerProps";

export const Timer: React.FC<ITimerProps> = (props) => {
  const [startCaption, setStartCaption] = useState("Start");
  const timer = useTimer(props.seconds);
  const renderSeconds = useRenderSeconds();

  useInitialize(() => {
    timer.onFinish(() => {
      console.log(`Timer Finished`);
    });

    timer.onStart(() => {
      setStartCaption("Start");
    });

    timer.onStop(() => {
      setStartCaption("Continue");
    });

    timer.onReset(() => {
      setStartCaption("Start");
    });

    timer.start();
  });

  return (
    <>
      {renderSeconds(timer.remainingSeconds)}
      <div>
        <button onClick={() => timer.start()}>{startCaption}</button>
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
