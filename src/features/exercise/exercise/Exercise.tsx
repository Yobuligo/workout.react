import useTranslation from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { IExerciseProps } from "./IExerciseProps";
import { ReactComponent as UpArrow } from "../../../assets/icons/up-arrow.svg";
import { ReactComponent as DownArrow } from "../../../assets/icons/down-arrow.svg";
import styles from "./Exercise.module.scss";
import { useToggle } from "../../../hooks/useToggle";
import { Difficulty } from "../../../shared/types/Difficulty";

export const Exercise: React.FC<IExerciseProps> = (props) => {
  const [expand, toggleExpand] = useToggle(false);
  const { t } = useTranslation();

  const devices = props.exercise.devices?.map((device) => device.title);

  const muscleGroups = props.exercise.muscleGroups.join(",");

  return (
    <>
      <div className={styles.exercise}>
        <div>{t(props.exercise.title)}</div>
        {expand === false ? (
          <DownArrow width={"2rem"} onClick={() => toggleExpand()} />
        ) : (
          <UpArrow width={"2rem"} onClick={() => toggleExpand()} />
        )}
      </div>
      {expand === true && (
        <>
          <div>
            {t(texts.exercise.description)}: {t(props.exercise.description)}
          </div>
          <div>
            {t(texts.exercise.difficulty)}:{" "}
            {Difficulty[props.exercise.difficulty]}
          </div>
          <div>
            {t(texts.exercise.muscleGroup)}: {muscleGroups}
          </div>
          {devices && devices.length > 0 && <div>Devices: {devices}</div>}
        </>
      )}
    </>
  );
};
