import useTranslation from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { Difficulty } from "../../../shared/types/Difficulty";
import { IExerciseProps } from "./IExerciseProps";

export const Exercise: React.FC<IExerciseProps> = (props) => {
  const { t } = useTranslation();
  const muscleGroups = props.exercise.muscleGroups.map(
    (muscleGroup) => muscleGroup
  );

  const devices = props.exercise.devices?.map((device) => device.title);

  return (
    <>
      <div>
        {t(texts.exercise.title)}: {t(props.exercise.title)}
      </div>
      <div>
        {t(texts.exercise.description)}: {t(props.exercise.description)}
      </div>
      <div>
        {t(texts.exercise.difficulty)}: {Difficulty[props.exercise.difficulty]}
      </div>
      <div>
        {t(texts.exercise.muscleGroup)}: {muscleGroups}
      </div>
      {devices && devices.length > 0 && <div>Devices: {devices}</div>}
    </>
  );
};
