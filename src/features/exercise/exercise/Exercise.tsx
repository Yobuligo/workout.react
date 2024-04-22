import { ReactComponent as DownArrow } from "../../../assets/icons/down-arrow.svg";
import { ReactComponent as UpArrow } from "../../../assets/icons/up-arrow.svg";
import { useToggle } from "../../../hooks/useToggle";
import useTranslation from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { Difficulty } from "../../../shared/types/Difficulty";
import styles from "./Exercise.module.scss";
import { IExerciseProps } from "./IExerciseProps";

export const Exercise: React.FC<IExerciseProps> = (props) => {
  const [expand, toggleExpand] = useToggle(false);
  const { t } = useTranslation();

  const devices = props.exercise.devices?.map((device) => device.title);

  const muscleGroups = props.exercise.muscleGroups.join(",");

  return (
    <>
      <div className={styles.exercise}>
        <div className={styles.title}>{t(props.exercise.title)}</div>
        {expand === false ? (
          <DownArrow width={"2rem"} onClick={() => toggleExpand()} />
        ) : (
          <UpArrow width={"2rem"} onClick={() => toggleExpand()} />
        )}
      </div>
      {expand === true && (
        <div className={styles.details}>
          <div>{t(texts.exercise.description)}:</div>
          <div>{t(props.exercise.description)}</div>

          <div>{t(texts.exercise.difficulty)}:</div>
          <div>{Difficulty[props.exercise.difficulty]}</div>

          <div>{t(texts.exercise.muscleGroup)}:</div>
          <div>{muscleGroups}</div>

          {devices && devices.length > 0 && (
            <>
              <div>Devices:</div>
              <div> {devices}</div>
            </>
          )}
        </div>
      )}
    </>
  );
};
